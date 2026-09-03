export const LOCAL_GUEST_UID = 'local_guest';

export const localGuestFallbackEnabled =
  import.meta.env.DEV && import.meta.env.VITE_ALLOW_LOCAL_GUEST_FALLBACK !== 'false';

export function createLocalGuestUser() {
  const localGuest = {
    uid: LOCAL_GUEST_UID,
    displayName: 'زائر محلي',
    name: 'زائر محلي',
    email: '',
    photoURL: '',
    isAnonymous: true,
    isLocalOnly: true,
  };

  localStorage.setItem('diwaniya_local_guest_user', JSON.stringify(localGuest));
  const balanceKey = `diwaniya_games_balance_${LOCAL_GUEST_UID}`;
  if (localStorage.getItem(balanceKey) === null) {
    localStorage.setItem(balanceKey, '5');
  }
  return localGuest;
}

export function isLocalGuestUser(user: { uid?: string; isLocalOnly?: boolean } | null | undefined): boolean {
  return user?.uid === LOCAL_GUEST_UID || Boolean(user?.isLocalOnly);
}

export function isLocalGuestUserId(userId: string | null | undefined): boolean {
  return userId === LOCAL_GUEST_UID;
}