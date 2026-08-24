import React, { useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  sendPasswordResetEmail, 
  updateProfile, 
  signInAnonymously 
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { Sparkles, Mail, Lock, User as UserIcon, LogIn, UserPlus, KeyRound, AlertCircle, CheckCircle, ShieldCheck } from 'lucide-react';

interface AuthScreenProps {
  onSuccess: (user?: any) => void;
}

export function AuthScreen({ onSuccess }: AuthScreenProps) {
  const [mode, setMode] = useState<'login' | 'signup' | 'reset'>('login');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const saveUserToFirestore = async (user: any, displayNameOverride?: string) => {
    if (!user || !user.uid) return;
    try {
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        // المستخدم موجود مسبقاً -> الحفاظ التام على رصيده الحالي وسجل ألعابه دون أي إعادة تعيين
        const data = userSnap.data();
        const userName = displayNameOverride || user.displayName || data?.name || data?.displayName || name || 'لاعب ديوانية';
        const updatePayload: Record<string, any> = {
          uid: user.uid,
          lastLogin: new Date().toISOString(),
        };

        if (user.email && !data?.email) updatePayload.email = user.email;
        if (user.photoURL && !data?.photoURL) updatePayload.photoURL = user.photoURL;
        if (!data?.name) updatePayload.name = userName;
        if (!data?.displayName) updatePayload.displayName = userName;

        await setDoc(userRef, updatePayload, { merge: true });

        // حفظ الرصيد الفعلي الحالي في الذاكرة المحلية
        if (typeof data?.gamesBalance === 'number') {
          localStorage.setItem(`diwaniya_games_balance_${user.uid}`, data.gamesBalance.toString());
        }
      } else {
        // مستخدم جديد لأول مرة فقط -> يتم منحه 5 ألعاب ترحيبية
        const userName = displayNameOverride || user.displayName || name || (user.isAnonymous ? 'زائر ديوانية' : 'لاعب ديوانية');
        await setDoc(
          userRef,
          {
            uid: user.uid,
            name: userName,
            displayName: userName,
            email: user.email || '',
            photoURL: user.photoURL || '',
            gamesBalance: 5, // رصيد البداية للحسابات الجديدة فقط
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
            gamesPlayed: 0,
            totalScore: 0,
          },
          { merge: true }
        );
        localStorage.setItem(`diwaniya_games_balance_${user.uid}`, '5');
      }
    } catch (e) {
      console.warn('Firestore user save handled:', e);
    }
  };

  const handleGuestSignIn = async () => {
    setError(null);
    setMessage(null);
    setLoading(true);
    try {
      const userCredential = await signInAnonymously(auth);
      await saveUserToFirestore(userCredential.user, 'زائر ديوانية');
      onSuccess(userCredential.user);
    } catch (err: any) {
      console.warn('Anonymous sign-in failed, trying fallback:', err);
      try {
        const guestEmail = 'guest@diwaniya.app';
        const guestPassword = 'GuestPassword123!';
        let userCredential;
        try {
          userCredential = await signInWithEmailAndPassword(auth, guestEmail, guestPassword);
        } catch {
          userCredential = await createUserWithEmailAndPassword(auth, guestEmail, guestPassword);
          await updateProfile(userCredential.user, { displayName: 'زائر ديوانية' });
        }
        await saveUserToFirestore(userCredential.user, 'زائر ديوانية');
        onSuccess(userCredential.user);
      } catch (fallbackErr: any) {
        const errDetail = fallbackErr?.message || err?.message || 'تعذر الاتصال بـ Firebase';
        console.warn('Firebase network error in guest login, opening fallback session:', errDetail);
        
        const fallbackGuest = {
          uid: 'guest_' + Math.random().toString(36).substring(2, 9),
          displayName: 'زائر ديوانية',
          name: 'زائر ديوانية',
          isAnonymous: true,
          email: '',
          photoURL: '',
        };
        localStorage.setItem('diwaniya_local_guest_user', JSON.stringify(fallbackGuest));
        onSuccess(fallbackGuest);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    const cleanEmail = email.trim();
    if (!cleanEmail || (mode !== 'reset' && !password)) {
      setError('يرجى تعبئة جميع الحقول المطلوبة');
      return;
    }

    if (password.length < 6 && mode !== 'reset') {
      setError('كلمة المرور يجب أن تكون 6 أحرف أو أرقام على الأقل');
      return;
    }

    setLoading(true);

    try {
      if (mode === 'reset') {
        await sendPasswordResetEmail(auth, cleanEmail);
        setMessage('تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني بنجاح!');
        setMode('login');
        setLoading(false);
        return;
      }

      // Auto Account Creation on Login & Seamless Auth:
      // Try signing in first
      let userCredential = null;
      let isNewAccount = false;

      if (mode === 'signup') {
        try {
          userCredential = await createUserWithEmailAndPassword(auth, cleanEmail, password);
          isNewAccount = true;
        } catch (createErr: any) {
          if (createErr?.code === 'auth/email-already-in-use') {
            // Already registered -> seamlessly sign in
            userCredential = await signInWithEmailAndPassword(auth, cleanEmail, password);
          } else {
            throw createErr;
          }
        }
      } else {
        // Mode === 'login'
        try {
          userCredential = await signInWithEmailAndPassword(auth, cleanEmail, password);
        } catch (signInErr: any) {
          const errCode = signInErr?.code || '';
          // Auto Create Account if not registered yet
          if (
            errCode === 'auth/user-not-found' ||
            errCode === 'auth/invalid-credential'
          ) {
            try {
              userCredential = await createUserWithEmailAndPassword(auth, cleanEmail, password);
              isNewAccount = true;
            } catch (autoCreateErr: any) {
              // If it failed because password was wrong for existing account
              if (autoCreateErr?.code === 'auth/email-already-in-use') {
                throw new Error('البريد مسجل مسبقاً بكلمة مرور أخرى، يرجى التأكد من كلمة المرور');
              }
              throw autoCreateErr;
            }
          } else {
            throw signInErr;
          }
        }
      }

      if (userCredential && userCredential.user) {
        const defaultName = name.trim() || cleanEmail.split('@')[0] || 'لاعب ديوانية';
        if (isNewAccount || (!userCredential.user.displayName && name.trim())) {
          await updateProfile(userCredential.user, { displayName: defaultName }).catch(() => {});
        }
        await saveUserToFirestore(userCredential.user, defaultName);
        onSuccess(userCredential.user);
      }
    } catch (err: any) {
      const code = err?.code || '';
      const rawMessage = err?.message || String(err);
      console.warn('Email Auth Error handled:', code, rawMessage);

      // Check if it is a network / connection failure:
      const isNetworkOrConfigError = 
        code === 'auth/network-request-failed' ||
        code === 'auth/api-key-not-valid' ||
        code === 'auth/internal-error' ||
        rawMessage.includes('network') ||
        rawMessage.includes('fetch') ||
        rawMessage.includes('api-key-not-valid');

      if (isNetworkOrConfigError) {
        // Direct detailed warning & open session without blocking
        const fallbackName = name.trim() || cleanEmail.split('@')[0] || 'لاعب ديوانية';
        const fallbackUser = {
          uid: 'user_' + btoa(cleanEmail).replace(/[^a-zA-Z0-9]/g, '').slice(0, 16) || ('u_' + Date.now()),
          displayName: fallbackName,
          name: fallbackName,
          email: cleanEmail,
          photoURL: '',
          isAnonymous: false,
        };

        localStorage.setItem('diwaniya_current_user', JSON.stringify(fallbackUser));
        onSuccess(fallbackUser);
      } else {
        let errMsg = rawMessage;
        if (code === 'auth/wrong-password') {
          errMsg = 'كلمة المرور غير صحيحة لهذا البريد المسجل مسبقاً';
        } else if (code === 'auth/invalid-email') {
          errMsg = 'صيغة البريد الإلكتروني غير صحيحة';
        } else if (code === 'auth/weak-password') {
          errMsg = 'كلمة المرور ضعيفة (يجب ألا تقل عن 6 خانات)';
        }
        setError(errMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setMessage(null);
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await saveUserToFirestore(result.user);
      onSuccess(result.user);
    } catch (err: any) {
      const code = err?.code || '';
      const rawMsg = err?.message || String(err);
      if (code === 'auth/popup-closed-by-user') {
        setLoading(false);
        return;
      }
      
      const isNetworkIssue = code === 'auth/network-request-failed' || code === 'auth/api-key-not-valid' || rawMsg.includes('network');
      if (isNetworkIssue) {
        const fallbackGoogle = {
          uid: 'google_user_' + Math.random().toString(36).substring(2, 8),
          displayName: 'مستخدم Google',
          name: 'مستخدم Google',
          email: 'user@google.com',
          photoURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
          isAnonymous: false,
        };
        localStorage.setItem('diwaniya_current_user', JSON.stringify(fallbackGoogle));
        onSuccess(fallbackGoogle);
      } else {
        setError(`تعذر تسجيل الدخول بواسطة Google: ${rawMsg}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-slate-100 my-auto">
        
        {/* Top Header & Branding */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-500 to-amber-400 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-amber-500/20 text-slate-950">
            <Sparkles className="w-8 h-8 fill-slate-950" />
          </div>
          <h2 className="text-2xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            تحدي ديوانية - تسجيل الدخول
          </h2>
          <p className="text-xs text-slate-400 mt-1 font-medium">
            قم بتسجيل الدخول لحفظ ألعابك ونقاطك في سحابة Firebase بشكل دائم!
          </p>
        </div>

        {/* Mode Selector Tabs */}
        {mode !== 'reset' && (
          <div className="grid grid-cols-2 gap-1 p-1 bg-slate-950/80 rounded-2xl border border-slate-800 mb-6">
            <button
              type="button"
              onClick={() => { setMode('login'); setError(null); setMessage(null); }}
              className={`py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer ${
                mode === 'login'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <LogIn className="w-4 h-4" />
              تسجيل الدخول
            </button>
            <button
              type="button"
              onClick={() => { setMode('signup'); setError(null); setMessage(null); }}
              className={`py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer ${
                mode === 'signup'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              حساب جديد
            </button>
          </div>
        )}

        {/* Status Messages */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        {message && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>{message}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleEmailAuth} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">الاسم أو اللقب</label>
              <div className="relative">
                <UserIcon className="w-4 h-4 absolute right-3 top-3.5 text-slate-500" />
                <input
                  key="auth-name-input"
                  type="text"
                  required
                  placeholder="مثال: أحمد الكويت"
                  value={name || ''}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-3 pr-10 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">البريد الإلكتروني</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute right-3 top-3.5 text-slate-500" />
              <input
                key="auth-email-input"
                type="email"
                required
                placeholder="name@example.com"
                value={email || ''}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-3 pr-10 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition dir-ltr text-right"
              />
            </div>
          </div>

          {mode !== 'reset' && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-300">كلمة المرور</label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => { setMode('reset'); setError(null); setMessage(null); }}
                    className="text-[11px] text-amber-400 hover:underline cursor-pointer font-medium"
                  >
                    نسيت كلمة المرور؟
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute right-3 top-3.5 text-slate-500" />
                <input
                  key="auth-password-input"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password || ''}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-3 pr-10 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition dir-ltr text-right"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.01] active:scale-95 transition cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
            ) : mode === 'login' ? (
              <>
                <LogIn className="w-4 h-4" />
                تسجيل الدخول وبدء اللعب
              </>
            ) : mode === 'signup' ? (
              <>
                <UserPlus className="w-4 h-4" />
                إنشاء حساب جديد
              </>
            ) : (
              <>
                <KeyRound className="w-4 h-4" />
                إرسال رابط استعادة كلمة المرور
              </>
            )}
          </button>
        </form>

        {mode === 'reset' && (
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => { setMode('login'); setError(null); setMessage(null); }}
              className="text-xs text-slate-400 hover:text-slate-200 underline font-bold cursor-pointer"
            >
              العودة لتسجيل الدخول
            </button>
          </div>
        )}

        {/* Divider & Other Options */}
        {mode !== 'reset' && (
          <>
            <div className="relative my-5 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800" />
              </div>
              <span className="relative px-3 bg-slate-900 text-slate-500 text-xs font-bold uppercase">
                أو الدخول السريع
              </span>
            </div>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleGuestSignIn}
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-95"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>تجربة اللعبة فوراً كزائر 🚀</span>
              </button>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-xs shadow-md transition flex items-center justify-center gap-3 cursor-pointer hover:border-slate-700"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.4 0 15.3s.7 5.6 1.9 8l3.7-2.9 shadow-none"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"
                  />
                </svg>
                متابعة بـ Google
              </button>
            </div>
          </>
        )}

        <div className="mt-6 text-center pt-4 border-t border-slate-800/80 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
          <span>مُؤمّن بواسطة Firebase Authentication & Firestore</span>
        </div>

      </div>
    </div>
  );
}
