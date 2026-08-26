import { Category } from "../types";
import { sports100Questions } from "./sportsQuestions";
import { riddles100Questions } from "./riddlesQuestions";
import { cars100Questions } from "./carsQuestions";
import { flags100Questions } from "./flagsQuestions";
import { capitals100Questions } from "./capitalsQuestions";
import { oldFlags100Questions } from "./oldFlagsQuestions";
import { ertugrul100Questions } from "./ertugrulQuestions";
import { kurulusOsman100Questions } from "./kurulusOsmanQuestions";
import { cukur100Questions } from "./cukurQuestions";
import { esrefRuya100Questions } from "./esrefRuyaQuestions";
import { seerah100Questions } from "./seerahQuestions";
import { theWalkingDead100Questions } from "./theWalkingDeadQuestions";
import { gameOfThrones100Questions } from "./gameOfThronesQuestions";
import { marvel100Questions } from "./marvel100Questions";
import { peakyBlinders100Questions } from "./peakyBlinders100Questions";
import { onePiece100Questions } from "./onePiece100Questions";
import { pokemon100Questions } from "./pokemon100Questions";
import { anime100Questions } from "./anime100Questions";
import { breakingBad100Questions } from "./breakingBad100Questions";
import {
  walaKelmaFootballQuestions,
  walaKelmaSportsQuestions,
  walaKelmaProverbsQuestions,
  walaKelmaGeneralQuestions,
  walaKelmaOriginalQuestions,
  walaKelmaAnimeQuestions,
  walaKelmaWrestlingQuestions,
  walaKelmaForeignArtQuestions,
  walaKelmaMediaQuestions
} from "./walaKelmaQuestions";

export const INITIAL_CATEGORIES: Category[] = [
  {
    "id": "gen-history",
    "name": "تاريخ",
    "type": "general",
    "section": "🌐 قسم عام",
    "iconName": "Landmark",
    "imageUrl": "https://i.postimg.cc/TP96LVZd/davinci-a-flat-vector-illustration-for-a-trivia-game-categ.png",
    "description": "يحتوي على أسئلة تتعلق بتاريخ العالم والسير الذاتية للشخصيات التاريخية",
    "color": "from-amber-600 to-orange-600",
    "bgGradient": "bg-gradient-to-br from-amber-600/10 to-orange-500/10 border-amber-600/30",
    "tags": [
      "حضارات",
      "معارك",
      "سير ذاتية"
    ],
    "questions": [
      {
        "id": "gen-history-1",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/V-J_Day_in_Times_Square.jpg/600px-V-J_Day_in_Times_Square.jpg",
        "hideImageUntilAnswer": true,
        "points": 200,
        "question": "في أي عام انتهت الحرب العالمية الثانية بانتصار الحلفاء؟",
        "options": [
          "1945",
          "1939",
          "1918",
          "1950"
        ],
        "correctAnswer": "1945",
        "explanation": "انتهت الحرب العالمية الثانية بانتهاء المعارك واستسلام ألمانيا واليابان عام 1945.",
        "hint": "منتصف الأربعينيات من القرن العشرين"
      },
      {
        "id": "gen-history-2",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Mehmed_II_by_Gentile_Bellini_1480.jpg/600px-Mehmed_II_by_Gentile_Bellini_1480.jpg",
        "hideImageUntilAnswer": true,
        "points": 300,
        "question": "من هو القائد المسلم الشهير الذي فتح القسطنطينية عام 1453م؟",
        "options": [
          "محمد الفاتح",
          "صلاح الدين الأيوبي",
          "قطز",
          "طارق بن زياد"
        ],
        "correctAnswer": "محمد الفاتح",
        "explanation": "السلطان العثماني محمد الثاني الملقب بالفاتح فتح القسطنطينية بعمر 21 عاماً.",
        "hint": "لقب بالفاتح لعظم إنجازه"
      },
      {
        "id": "gen-history-3",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Bataille_de_Hattin_1187.jpg/600px-Bataille_de_Hattin_1187.jpg",
        "hideImageUntilAnswer": true,
        "points": 400,
        "question": "ما اسم المعركة الشهيرة التي انتصر فيها المسلمون بقيادة صلاح الدين الأيوبي وحرروا القدس؟",
        "options": [
          "معركة حطين",
          "معركة عين جالوت",
          "معركة القادسية",
          "معركة اليرموك"
        ],
        "correctAnswer": "معركة حطين",
        "explanation": "معركة حطين عام 1187م كانت الحاسمة لفتح بيت المقدس.",
        "hint": "معركة في مرج حطين قرب طبريا"
      },
      {
        "id": "gen-history-4",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Statue-of-Augustus.jpg/600px-Statue-of-Augustus.jpg",
        "hideImageUntilAnswer": true,
        "points": 500,
        "question": "من هو أول إمبراطور للإمبراطورية الرومانية؟",
        "options": [
          "أغسطس قيصر",
          "يوليوس قيصر",
          "نيرون",
          "تراجان"
        ],
        "correctAnswer": "أغسطس قيصر",
        "explanation": "أغسطس قيصر (أوكتافيان) هو أول إمبراطور روماني وحكم من 27 ق.م.",
        "hint": "ابن يوليوس قيصر بالتبني"
      },
      {
        "id": "gen-history-5",
        "points": 600,
        "question": "من هو الخليفة العباسي الأبرز في العصر الذهبي الذي اشتهر بغزارة العلم ومكتبة بيت الحكمة؟",
        "options": [
          "هارون الرشيد",
          "المأمون",
          "أبو جعفر المنصور",
          "المعتصم بالله"
        ],
        "correctAnswer": "هارون الرشيد",
        "explanation": "هارون الرشيد واكبه الازدهار العلمي والتأليف وترجمة العلوم في العصر العباسي الأول.",
        "hint": "خليفة عباسي شهير في الحكايات والعصر الذهبي",
        "imageUrl": "https://images.unsplash.com/photo-1548625361-1851214040a4?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "gen-knowledge",
    "name": "معلومات عامة",
    "type": "general",
    "section": "🌐 قسم عام",
    "iconName": "Sparkles",
    "imageUrl": "https://i.postimg.cc/vZTNrD0M/davinci-i-want-the-same-immage-but-without-the-taxt-imag.png",
    "description": "يحتوي على أسئلة متنوعة وشاملة في الثقافة، السياسة، الاقتصاد، وغيرها",
    "color": "from-amber-400 to-amber-600",
    "bgGradient": "bg-gradient-to-br from-amber-400/10 to-amber-600/10 border-amber-400/30",
    "tags": [
      "ثقافة",
      "سياسة",
      "اقتصاد"
    ],
    "questions": [
      {
        "id": "gen-knowledge-1",
        "imageUrl": "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 200,
        "question": "ما هو المورد والسلعة الطبيعية التي تُلقب عالمياً بـ \"الذهب الأسود\"؟",
        "options": [
          "النفط (البترول)",
          "الفحم الحجري",
          "الحديد",
          "اليورانيوم"
        ],
        "correctAnswer": "النفط (البترول)",
        "explanation": "يُطلق على النفط البترول اسم الذهب الأسود لأهميته الاقتصادية الهائلة.",
        "hint": "مصدر الطاقة الرئيسي للوقود والصناعة"
      },
      {
        "id": "gen-knowledge-2",
        "imageUrl": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 300,
        "question": "ما هو العلم المعني بدراسة إنتاج وتوزيع واستهلاك السلع والخدمات والثروات؟",
        "options": [
          "علم الاقتصاد",
          "علم الاجتماع",
          "علم السياسة",
          "علم إدارة الأعمال"
        ],
        "correctAnswer": "علم الاقتصاد",
        "explanation": "الاقتصاد يدرس كيفية إدارة الموارد المحدودة لتلبية الاحتياجات البشريّة.",
        "hint": "يتناول البنوك والأسواق والمال"
      },
      {
        "id": "gen-knowledge-3",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Damascus_Mosque.jpg/600px-Damascus_Mosque.jpg",
        "hideImageUntilAnswer": true,
        "points": 400,
        "question": "ما هي أقدم عاصمة مأهولة بالسكان بشكل مستمر بدون انقطاع في التاريخ؟",
        "options": [
          "دمشق",
          "القاهرة",
          "أثينا",
          "بغداد"
        ],
        "correctAnswer": "دمشق",
        "explanation": "دمشق عاصمة سوريا تعتبر أقدم عاصمة مأهولة في العالم منذ آلاف السنين.",
        "hint": "عاصمة الشام الفيحاء"
      },
      {
        "id": "gen-knowledge-4",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/600px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        "hideImageUntilAnswer": true,
        "points": 500,
        "question": "ما هو النظام السياسي والفكري الذي يعني باليونانية \"حكم الشعب\"؟",
        "options": [
          "الديمقراطية",
          "الأوتوقراطية",
          "التكنوقراطية",
          "الأوليغارشية"
        ],
        "correctAnswer": "الديمقراطية",
        "explanation": "الديمقراطية تعني اختيار الشعب لممثليه وحكامهم عن طريق الانتخاب.",
        "hint": "تصويت وانتخابات حرة"
      },
      {
        "id": "gen-knowledge-5",
        "points": 600,
        "question": "ما هو أطول نهر في العالم من حيث الطول الإجمالي؟",
        "options": [
          "نهر النيل",
          "نهر الأمازون",
          "نهر الميسيسيبي",
          "نهر اليانغتسي"
        ],
        "correctAnswer": "نهر النيل",
        "explanation": "نهر النيل هو أطول نهر في العالم بطول يناهز 6650 كم يمر بدول حوض النيل.",
        "hint": "ينبع من أفريقيا ويصب في البحر المتوسط",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "gen-tech",
    "name": "تكنولوجيا",
    "type": "general",
    "hidden": true,
    "section": "🌐 قسم عام",
    "iconName": "Cpu",
    "description": "يحتوي على أسئلة تتعلق بكل ما يخص عالم التكنولوجيا والتقنية",
    "color": "from-blue-500 to-indigo-600",
    "bgGradient": "bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/30",
    "tags": [
      "برمجة",
      "ذكاء اصطناعي",
      "تقنية"
    ],
    "questions": [
      {
        "id": "gen-tech-1",
        "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 200,
        "question": "ماذا يرمز اختصار \"AI\" في مجالات التقنية والبرمجة الحديثة؟",
        "options": [
          "الذكاء الاصطناعي",
          "التوافق الآلي",
          "الأجهزة الذكية",
          "الاتصال الفوري"
        ],
        "correctAnswer": "الذكاء الاصطناعي",
        "explanation": "AI يرمز إلى Artificial Intelligence (الذكاء الاصطناعي).",
        "hint": "تعلم الآلة والنماذج الذكية"
      },
      {
        "id": "gen-tech-2",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Steve_Jobs_with_red_headphone_%28cropped%29.jpg/600px-Steve_Jobs_with_red_headphone_%28cropped%29.jpg",
        "hideImageUntilAnswer": true,
        "points": 300,
        "question": "من هو مؤسس شركة أبل (Apple) الشهير الذي كشف عن أول هاتف آيفون عام 2007؟",
        "options": [
          "ستيف جوبز",
          "إيلون ماسك",
          "مارك زوكربرغ",
          "جيف بيزوس"
        ],
        "correctAnswer": "ستيف جوبز",
        "explanation": "أطلق ستيف جوبز أول جهاز آيفون عام 2007 وغير صناعة الهواتف.",
        "hint": "ارتدى القميص الأسود الشهير في مؤتمرات أبل"
      },
      {
        "id": "gen-tech-3",
        "imageUrl": "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 400,
        "question": "ما اسم أضخم محرك بحث على الإنترنت وتتبع شركته الأم لـ \"ألفابت\" (Alphabet)؟",
        "options": [
          "جوجل (Google)",
          "بينج (Bing)",
          "ياهو (Yahoo)",
          "دك دك جو (DuckDuckGo)"
        ],
        "correctAnswer": "جوجل (Google)",
        "explanation": "محرك بحث جوجل يستحوذ على أكثر من 90% من عمليات البحث في العالم.",
        "hint": "أشهر محرك بحث عالمي"
      },
      {
        "id": "gen-tech-4",
        "imageUrl": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 500,
        "question": "ما هي التقنية الرقمية الموزعة والمشفرة التي تعتمد عليها العملات المشفرة مثل البيتكوين؟",
        "options": [
          "البلوكشين (Blockchain)",
          "السحابة الرقمية",
          "إنترنت الأشياء",
          "الحوسبة السحابية"
        ],
        "correctAnswer": "البلوكشين (Blockchain)",
        "explanation": "البلوكشين هو دفتر سجلات رقمي مشفر وموزع وآمن.",
        "hint": "سلسلة الكتل الرقمية"
      },
      {
        "id": "gen-tech-5",
        "points": 600,
        "question": "ما اسم نظام التشغيل الأكثر انتشاراً للهواتف الذكية في العالم المطور من شركة قوقل؟",
        "options": [
          "أندرويد (Android)",
          "آي أوه إس (iOS)",
          "ويندوز فون",
          "سيمبيان"
        ],
        "correctAnswer": "أندرويد (Android)",
        "explanation": "نظام أندرويد مفتوح المصدر المطور بواسطة Google يحكم الغالبية العظمى للهواتف.",
        "hint": "نظام الهواتف الذكية مفتوح المصدر من قوقل",
        "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "gen-animals",
    "name": "عالم الحيوان",
    "type": "general",
    "hidden": true,
    "section": "🌐 قسم عام",
    "iconName": "Sparkles",
    "description": "يحتوي على أسئلة تتعلق بعالم الحيوانات وكل ما يخص طبيعتها ومعلوماتها",
    "color": "from-emerald-500 to-teal-600",
    "bgGradient": "bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/30",
    "tags": [
      "حيوانات",
      "طبيعة",
      "كائنات"
    ],
    "questions": [
      {
        "id": "gen-animals-1",
        "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 200,
        "question": "ما هو الحيوان الذي يُلقب تاريخياً بـ \"سفينة الصحراء\"؟",
        "options": [
          "الجمل",
          "الحصان",
          "الغزال",
          "الضبع"
        ],
        "correctAnswer": "الجمل",
        "explanation": "يستطيع الجمل تحمّل العطش والحرارة والسفر مسافات طويلة بالصحراء.",
        "hint": "له سنام ويخزن فيه الدهون"
      },
      {
        "id": "gen-animals-2",
        "imageUrl": "https://images.unsplash.com/photo-1520808663317-647b476a81b9?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 300,
        "question": "ما هو الطائر الوحيد في العالم القادر على الطيران إلى الخلف؟",
        "options": [
          "طائر الطنان",
          "البومة",
          "النسر",
          "الهدهد"
        ],
        "correctAnswer": "طائر الطنان",
        "explanation": "يتميز طائر الطنان بأجنحة رفافة بسرعة هائلة تمكنه من الطيران بكافة الاتجاهات.",
        "hint": "أصغر الطيور حجماً ويمتص رحيق الأزهار"
      },
      {
        "id": "gen-animals-3",
        "imageUrl": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 400,
        "question": "ما هو أسرع حيوان بري على وجه الأرض وتصل سرعته إلى 120 كم/ساعة؟",
        "options": [
          "الفهد (Cheetah)",
          "الأسد",
          "الغزال",
          "الذئب"
        ],
        "correctAnswer": "الفهد (Cheetah)",
        "explanation": "الفهد الصياد هو أسرع الثدييات البرية في الانطلاق السريع.",
        "hint": "له نقط سوداء وجسم رشيق مخصص للركض"
      },
      {
        "id": "gen-animals-4",
        "imageUrl": "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 500,
        "question": "كم عدد القلوب التي يمتلكها كائن الأخطبوط البحري؟",
        "options": [
          "3 قلوب",
          "قلب واحد",
          "قلبان",
          "4 قلوب"
        ],
        "correctAnswer": "3 قلوب",
        "explanation": "يمتلك الأخطبوط 3 قلوب: قلبان يضخان الدم للخيام والقلب الثالث لبقية الجسم.",
        "hint": "أكثر من قلبين"
      },
      {
        "id": "gen-animals-5",
        "points": 600,
        "question": "ما هو الكائن الثديي الوحيد القادر على الطيران الحقيقي والمستمر؟",
        "options": [
          "الخفاش",
          "السنجاب الطائر",
          "البوم",
          "البطريق"
        ],
        "correctAnswer": "الخفاش",
        "explanation": "الخفافيش هي الثدييات الوحيدة التي تمتلك أجنحة حقيقية وتمارس الطيران الفعلي.",
        "hint": "ينشط ليلاً ويعتمد على الرادار الصوتي",
        "imageUrl": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "gen-logos",
    "name": "شعارات",
    "type": "general",
    "hidden": true,
    "section": "🌐 قسم عام",
    "iconName": "Tag",
    "description": "يحتوي على أسئلة تتعلق بشعارات الشركات محلية وعالمية مع عرض الصورة مباشرة",
    "color": "from-pink-500 to-rose-600",
    "bgGradient": "bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-500/30",
    "tags": [
      "شركات",
      "علامات",
      "شعارات"
    ],
    "questions": [
      {
        "id": "gen-logos-1",
        "points": 200,
        "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "question": "أي شركة تسوق وتجارة إلكترونية عالمية تملك الشعار الذي ينطلق سهمه الأصفر من A إلى Z؟",
        "options": [
          "أمازون (Amazon)",
          "إي باي (eBay)",
          "علي بابا (Alibaba)",
          "نون (Noon)"
        ],
        "correctAnswer": "أمازون (Amazon)",
        "explanation": "السهم الأصفر يمثل الابتسامة ويربط الحرف A بالحرف Z للدلالة على توفر كافة المنتجات.",
        "hint": "عملاق التجارة الإلكترونية الشامل"
      },
      {
        "id": "gen-logos-2",
        "points": 300,
        "imageUrl": "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "question": "أي سلسلة مطاعم وجبات سريعة عالمية تشتهر بشعار القوسين الذهبيين الأيقونيين؟",
        "options": [
          "ماكدونالدز (McDonald’s)",
          "برجر كنج (Burger King)",
          "كنتاكي (KFC)",
          "هارديز (Hardee’s)"
        ],
        "correctAnswer": "ماكدونالدز (McDonald’s)",
        "explanation": "الأقواس الذهبية M هي السمة المميزة لشركة ماكدونالدز عالمياً.",
        "hint": "أشهر مطعم وجبات سريعة في العالم"
      },
      {
        "id": "gen-logos-3",
        "points": 400,
        "imageUrl": "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "question": "أي شركة سيارات يابانية عملاقة يمثلها الشعار البيضاوي الثلاثي المتداخل؟",
        "options": [
          "تويوتا (Toyota)",
          "نيسان (Nissan)",
          "هوندا (Honda)",
          "ميتسوبيشي (Mitsubishi)"
        ],
        "correctAnswer": "تويوتا (Toyota)",
        "explanation": "تمثل الأشكال البيضاوية الثلاثة المتداخلة قلب العميل وقلب المنتج والتقدم التكنولوجي.",
        "hint": "أكبر صانع سيارات ياباني في العالم"
      },
      {
        "id": "gen-logos-4",
        "points": 500,
        "imageUrl": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "question": "أي تطبيق من تطبيقات التواصل الاجتماعي الشهيرة يمثله شعار الشبح الأبيض على خلفية صفراء؟",
        "options": [
          "سناب شات (Snapchat)",
          "تيك توك (TikTok)",
          "إنستغرام (Instagram)",
          "تليغرام (Telegram)"
        ],
        "correctAnswer": "سناب شات (Snapchat)",
        "explanation": "شعار سناب شات الشهير هو شبح أبيض على خلفية صفراء برّاقة.",
        "hint": "يرمز لاختفاء الرسائل وصور السناب السريع"
      },
      {
        "id": "gen-logos-5",
        "points": 600,
        "question": "ما اسم التطبيق الاجتماعي الشهير صاحب شعار الطائر الأزرق المغرد (المسمى حالياً X)؟",
        "options": [
          "تويتر (Twitter)",
          "فيسبوك",
          "إنستغرام",
          "تيك توك"
        ],
        "correctAnswer": "تويتر (Twitter)",
        "explanation": "كان الطائر الأزرق رمزا لمنصة تويتر قبل إعادة تسميتها إلى X بواسطة إيلون ماسك.",
        "hint": "منصة التغريدات والمنشورات القصيرة",
        "imageUrl": "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "gen-global-logos",
    "name": "شعارات عالمية",
    "type": "general",
    "hidden": true,
    "section": "🌐 قسم عام",
    "iconName": "Award",
    "description": "يحتوي على أسئلة حول شعارات العلامات التجارية العالمية مع عرض الشعار مباشرة",
    "color": "from-purple-500 to-violet-600",
    "bgGradient": "bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-purple-500/30",
    "tags": [
      "عالمي",
      "ماركات",
      "تصاميم"
    ],
    "questions": [
      {
        "id": "gen-global-logos-1",
        "points": 200,
        "imageUrl": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "question": "أي شركة رياضية عالمية تشتهر بشعار الخطوط المائلة الثلاثة؟",
        "options": [
          "أديداس (Adidas)",
          "نايكي (Nike)",
          "ريبوك (Reebok)",
          "نيو بالانس (New Balance)"
        ],
        "correctAnswer": "أديداس (Adidas)",
        "explanation": "تُعرف أديداس عالمياً باسم \"شركة الخطوط الثلاثة\" (Three Stripes).",
        "hint": "شركة رياضية ألمانية شهيرة"
      },
      {
        "id": "gen-global-logos-2",
        "points": 300,
        "imageUrl": "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "question": "أي شركة سيارات إيطالية فارهة يمثلها شعار الحصان الأسود الجامح؟",
        "options": [
          "فيراري (Ferrari)",
          "لامبورغيني (Lamborghini)",
          "بوجاتي (Bugatti)",
          "مازيراتي (Maserati)"
        ],
        "correctAnswer": "فيراري (Ferrari)",
        "explanation": "الحصان الأسود الجامح على خلفية صفراء هو رمز فيراري الأسطوري.",
        "hint": "سيارات السباقات الإيطالية باللون الأحمر الشهير"
      },
      {
        "id": "gen-global-logos-3",
        "points": 400,
        "imageUrl": "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "question": "أي شركة سيارات ألمانية تشتهر بالحلقات الأربع المتداخلة؟",
        "options": [
          "أودي (Audi)",
          "بي إم دبليو (BMW)",
          "مرسيدس (Mercedes)",
          "فولكسفاغن (Volkswagen)"
        ],
        "correctAnswer": "أودي (Audi)",
        "explanation": "ترمز الحلقات الأربع المتداخلة إلى تحالف أربع شركات سيارات ألمانية تأسست منها أودي.",
        "hint": "رمز الحلقات الفضية الأربع"
      },
      {
        "id": "gen-global-logos-4",
        "points": 500,
        "imageUrl": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "question": "أي شركة تكنولوجيا وبرمجيات عالمية يمثلها هذا الشعار ذو المربعات الأربعة الملونة؟",
        "options": [
          "مايكروسوفت (Microsoft)",
          "جوجل (Google)",
          "أبل (Apple)",
          "سامسونج (Samsung)"
        ],
        "correctAnswer": "مايكروسوفت (Microsoft)",
        "explanation": "يمثل المربع الملون الأربعة برامج مايكروسوفت الرئيسية ونظام ويندوز.",
        "hint": "مبتكرة نظام التشغيل ويندوز وحزمة أوفيس"
      },
      {
        "id": "gen-global-logos-5",
        "points": 600,
        "question": "شعار أي شركة سيارات ألمانية شهيرة يتكون من 4 حلقات متداخلة أفقياً؟",
        "options": [
          "أودي (Audi)",
          "بي إم دبليو (BMW)",
          "مرسيدس (Mercedes)",
          "فولكس واجن"
        ],
        "correctAnswer": "أودي (Audi)",
        "explanation": "ترمز الحلقات الأربع لاتحاد أربع شركات سيارات ألمانية شكلت أودي الحديثة.",
        "hint": "علامة السيارات الفاخرة بالحلقات الأربع",
        "imageUrl": "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "gen-products",
    "name": "منتجات",
    "type": "general",
    "section": "🌐 قسم عام",
    "iconName": "ShoppingBag",
    "imageUrl": "/products_thumb.jpg",
    "description": "يحتوي على أسئلة تتعلق بمنتجات عالمية مع عرض صورة المنتج أو شعاره مباشرة",
    "color": "from-amber-500 to-red-600",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-red-500/10 border-amber-500/30",
    "tags": [
      "منتجات",
      "سوق",
      "استهلاك"
    ],
    "questions": [
      {
        "id": "prod-001",
        "points": 200,
        "imageUrl": "/products_thumb.jpg",
        "hideImageUntilAnswer": false,
        "question": "ما هو هذا المنتج؟",
        "options": [
          "نسكويك (Nesquik)",
          "أوفالتين (Ovaltine)",
          "ميلو (Milo)",
          "كادبوري شوكولاتة"
        ],
        "correctAnswer": "نسكويك (Nesquik)",
        "explanation": "الإجابة الصحيحة: نسكويك (Nesquik)",
        "hint": ""
      },
      {
        "id": "prod-002",
        "points": 200,
        "imageUrl": "/products_thumb.jpg",
        "hideImageUntilAnswer": false,
        "question": "ما هو هذا المنتج؟",
        "options": [
          "دوريتوس حار نار (Doritos)",
          "شيتوس فلامينج هوت",
          "تاكيس فويغو",
          "ليز حار"
        ],
        "correctAnswer": "دوريتوس حار نار (Doritos)",
        "explanation": "الإجابة الصحيحة: دوريتوس حار نار (Doritos)",
        "hint": ""
      },
      {
        "id": "prod-034",
        "points": 400,
        "imageUrl": "/products_thumb.jpg",
        "hideImageUntilAnswer": false,
        "question": "ما هو هذا المنتج؟",
        "options": [
          "جلي فوستر كلاركس (Foster Clark's)",
          "جلي العالي بالفراولة",
          "جلي جرينز الكلاسيكي",
          "جلي رويال الإنجليزي"
        ],
        "correctAnswer": "جلي فوستر كلاركس (Foster Clark's)",
        "explanation": "الإجابة الصحيحة: جلي فوستر كلاركس (Foster Clark's)",
        "hint": ""
      },
      {
        "id": "prod-035",
        "points": 400,
        "imageUrl": "/products_thumb.jpg",
        "hideImageUntilAnswer": false,
        "question": "ما هو هذا المنتج؟",
        "options": [
          "إندومي (Indomie)",
          "نودلز ماجي بنكهة الكاري",
          "ساميانغ الكورية الحارة",
          "شين رامن نودلز"
        ],
        "correctAnswer": "إندومي (Indomie)",
        "explanation": "الإجابة الصحيحة: إندومي (Indomie)",
        "hint": ""
      },
      {
        "id": "prod-067",
        "points": 600,
        "imageUrl": "/products_thumb.jpg",
        "hideImageUntilAnswer": false,
        "question": "ما هو هذا المنتج؟",
        "options": [
          "زيت جوز هند أرض الطبيعة (Natureland)",
          "زيت جوز هند سي بي سي",
          "زيت باراشوت النقي",
          "زيت أورجانيك هندي"
        ],
        "correctAnswer": "زيت جوز هند أرض الطبيعة (Natureland)",
        "explanation": "الإجابة الصحيحة: زيت جوز هند أرض الطبيعة (Natureland)",
        "hint": ""
      }
    ]
  },
  {
    "id": "gen-science",
    "name": "علوم",
    "type": "general",
    "hidden": true,
    "section": "🌐 قسم عام",
    "iconName": "Atom",
    "description": "أسئلة الفيزياء والأحياء والكيمياء والاكتشافات العلمية",
    "color": "from-amber-500 to-yellow-600",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border-amber-500/30",
    "tags": [
      "فيزياء",
      "كيمياء",
      "أحياء"
    ],
    "questions": [
      {
        "id": "gen-science-1",
        "imageUrl": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 200,
        "question": "ما هو أكبر عضو في جسم الإنسان؟",
        "options": [
          "الجلد",
          "الكبد",
          "الرئة",
          "الدماغ"
        ],
        "correctAnswer": "الجلد",
        "explanation": "الجلد يغطي كامل الجسم ويشكل نحو 16% من وزن الإنسان.",
        "hint": "يغطي الجسم من الخارج بالكامل"
      },
      {
        "id": "gen-science-2",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/600px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
        "hideImageUntilAnswer": true,
        "points": 300,
        "question": "ما هو أسرع كوكب يدور حول نفسه في المجموعة الشمسية؟",
        "options": [
          "المشتري",
          "الأرض",
          "المريخ",
          "عطارد"
        ],
        "correctAnswer": "المشتري",
        "explanation": "يدور المشتري حول نفسه مرة واحدة كل 9 ساعات و55 دقيقة تقريباً.",
        "hint": "أكبر كواكب المجموعة الشمسية"
      },
      {
        "id": "gen-science-3",
        "imageUrl": "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 400,
        "question": "ما هو الغاز الرئيسي المسبب لظاهرة الاحتباس الحراري؟",
        "options": [
          "ثاني أكسيد الكربون",
          "النيتروجين",
          "الأرجون",
          "الهيليوم"
        ],
        "correctAnswer": "ثاني أكسيد الكربون",
        "explanation": "ثاني أكسيد الكربون (CO2) ينبعث بكثرة من احتراق الوقود ويحبس الحرارة.",
        "hint": "تطرحه الكائنات الحية أثناء الزفير"
      },
      {
        "id": "gen-science-4",
        "imageUrl": "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 500,
        "question": "كم عدد العظام في جسم الإنسان البالغ؟",
        "options": [
          "206",
          "210",
          "198",
          "250"
        ],
        "correctAnswer": "206",
        "explanation": "يولد الطفل بنحو 270 عظمة وتلتحم حتى تصبح 206 لدى البالغين.",
        "hint": "أكثر بقليل من مئتي عظمة"
      },
      {
        "id": "gen-science-5",
        "points": 600,
        "question": "ما اسم الكوكب الملقب بـ \"الكوكب الأحمر\" بسبب وفرة أكسيد الحديد على سطحه؟",
        "options": [
          "كوكب المريخ",
          "كوكب الزهرة",
          "كوكب المشتري",
          "كوكب زحل"
        ],
        "correctAnswer": "كوكب المريخ",
        "explanation": "يكتسب المريخ لونه الأحمر المميز من صدأ الحديد المنتشر في تربته وغلافه.",
        "hint": "الكوكب الرابع في المجموعة الشمسية",
        "imageUrl": "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "gen-sports",
    "name": "رياضة",
    "type": "general",
    "section": "🌐 قسم عام",
    "iconName": "Trophy",
    "imageUrl": "/sports_thumb.jpg",
    "description": "الأولمبياد وكأس العالم وكرة السلة والتنس والأرقام القياسية",
    "color": "from-amber-500 to-amber-700",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-amber-700/10 border-amber-500/30",
    "tags": [
      "أولمبياد",
      "بطولات",
      "رياضات"
    ],
    "questions": sports100Questions
  },
  {
    "id": "gen-riddles",
    "name": "ألغاز",
    "type": "general",
    "section": "🌐 قسم عام",
    "iconName": "Brain",
    "imageUrl": "https://i.postimg.cc/x8Jy85hR/davinci-a-clean-stylized-vector-style-cartoon-icon-repres.png",
    "description": "ألغاز ذكاء وتفكير جانبي وأسئلة غامضة وممتعة",
    "color": "from-purple-600 to-indigo-600",
    "bgGradient": "bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-purple-500/30",
    "tags": [
      "ذكاء",
      "تفكير",
      "تحدي"
    ],
    "questions": riddles100Questions
  },
  {
    "id": "gen-cars",
    "name": "سيارات",
    "type": "general",
    "section": "🌐 قسم عام",
    "iconName": "Car",
    "imageUrl": "/cars_category_thumb.jpg",
    "description": "تحدي معرفة قطع السيارات وأجزاء المحرك وأنظمة المركبات الميكانيكية",
    "color": "from-blue-600 to-amber-500",
    "bgGradient": "bg-gradient-to-br from-blue-500/10 to-amber-500/10 border-blue-500/30",
    "tags": [
      "قطع سيارات",
      "محركات",
      "ميكانيكا"
    ],
    "questions": cars100Questions
  },
  {
    "id": "wk-sports",
    "name": "ولا كلمة كروية",
    "type": "general",
    "section": "ولا كلمة",
    "iconName": "Trophy",
    "imageUrl": "/wk_sports_thumb.jpg",
    "description": "تحدي التمثيل الصامت لأشهر اللاعبين والأندية والأهداف واللحظات الكروية",
    "color": "from-amber-500 to-orange-600",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30",
    "tags": [
      "تمثيل صامت",
      "كرة قدم",
      "رياضة",
      "تحدي"
    ],
    "questions": walaKelmaFootballQuestions
  },
  {
    "id": "wk-proverbs",
    "name": "ولا كلمة أمثال",
    "type": "general",
    "section": "ولا كلمة",
    "iconName": "BookOpen",
    "imageUrl": "/wk_proverbs_thumb.jpg",
    "description": "تحدي التمثيل الصامت لأشهر الأمثال والحكم الشعبية الكويتية والخليجية والعربية",
    "color": "from-amber-500 to-orange-600",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30",
    "tags": [
      "تمثيل صامت",
      "أمثال",
      "تراث",
      "حكم"
    ],
    "questions": walaKelmaProverbsQuestions
  },
  {
    "id": "wk-general",
    "name": "ولا كلمة عامة",
    "type": "general",
    "section": "ولا كلمة",
    "iconName": "Brain",
    "imageUrl": "/wk_general_thumb.jpg",
    "description": "تحدي مسح الباركود بالهاتف والتمثيل الصامت لأشهر المنتجات والماركات والأجهزة",
    "color": "from-amber-500 to-orange-600",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30",
    "tags": [
      "تمثيل صامت",
      "باركود",
      "منتجات",
      "ماركات",
      "عامة"
    ],
    "questions": walaKelmaGeneralQuestions
  },
  {
    "id": "wk-classic",
    "name": "أفلام، مسلسلات، أغاني، ومسرحيات",
    "type": "general",
    "section": "ولا كلمة",
    "iconName": "Film",
    "imageUrl": "/wk_classic_thumb.jpg",
    "description": "تحدي التمثيل الصامت لأشهر الأفلام والمسلسلات والأغاني والمسرحيات العربية والخليجية",
    "color": "from-amber-500 to-orange-600",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30",
    "tags": [
      "تمثيل صامت",
      "أفلام",
      "مسلسلات",
      "أغاني",
      "مسرحيات"
    ],
    "questions": walaKelmaMediaQuestions
  },
  {
    "id": "wk-anime",
    "name": "أنمي - مسلسلات وشخصيات",
    "type": "general",
    "section": "ولا كلمة",
    "iconName": "Flame",
    "imageUrl": "/wk_anime_thumb.jpg",
    "description": "تحدي التمثيل الصامت لأشهر مسلسلات وشخصيات الأنمي العالمية",
    "color": "from-amber-500 to-orange-600",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30",
    "tags": [
      "تمثيل صامت",
      "أنمي",
      "مسلسلات أنمي",
      "شخصيات أنمي",
      "ون بيس",
      "ناروتو"
    ],
    "questions": walaKelmaAnimeQuestions
  },
  {
    "id": "wk-wrestling",
    "name": "ولا كلمة مصارعة",
    "type": "general",
    "section": "ولا كلمة",
    "iconName": "Swords",
    "imageUrl": "/wk_wrestling_thumb.jpg",
    "description": "تحدي التمثيل الصامت لأشهر حركات ومصارعي وأساطير حلبات WWE",
    "color": "from-amber-500 to-orange-600",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30",
    "tags": [
      "تمثيل صامت",
      "مصارعة",
      "WWE",
      "أساطير"
    ],
    "questions": walaKelmaWrestlingQuestions
  },
  {
    "id": "wk-foreign-art",
    "name": "ولا كلمة فن أجنبي",
    "type": "general",
    "section": "ولا كلمة",
    "iconName": "Tv",
    "imageUrl": "/wk_foreign_thumb.jpg",
    "description": "تحدي التمثيل الصامت لأشهر أفلام ومسلسلات وشخصيات هوليوود والسينما العالمية",
    "color": "from-amber-500 to-orange-600",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30",
    "tags": [
      "تمثيل صامت",
      "هوليوود",
      "أفلام",
      "سينما عالمية"
    ],
    "questions": walaKelmaForeignArtQuestions
  },
  {
    "id": "gen-geography",
    "name": "جغرافيا",
    "type": "general",
    "section": "🌍 قسم دول",
    "iconName": "Globe",
    "imageUrl": "/geography_thumb.jpg",
    "description": "يحتوي على أسئلة تتعلق بجغرافيا الدول وأهم المعالم الطبيعية والسياحية فيها",
    "color": "from-cyan-500 to-blue-600",
    "bgGradient": "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30",
    "tags": [
      "تضاريس",
      "جبال",
      "أنهار"
    ],
    "questions": [
      {
        "id": "gen-geography-1",
        "imageUrl": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 200,
        "question": "ما هي القارة الكبرى في العالم من حيث المساحة وعدد السكان؟",
        "options": [
          "قارة آسيا",
          "قارة أفريقيا",
          "قارة أوروبا",
          "قارة أمريكا الشمالية"
        ],
        "correctAnswer": "قارة آسيا",
        "explanation": "تغطي آسيا نحو 30% من مساحة يابسة الأرض وتضم أكثر من نُصف سكان العالم.",
        "hint": "تضم الصين والهند والخليج"
      },
      {
        "id": "gen-geography-2",
        "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 300,
        "question": "ما هي السلسلة الجبلية الشهيرة التي تحتوي على قمة إفرست أعلى قمة في العالم؟",
        "options": [
          "جبال الهيمالايا",
          "جبال الألب",
          "جبال الأنديز",
          "جبال الأطلس"
        ],
        "correctAnswer": "جبال الهيمالايا",
        "explanation": "تقع قمة إفرست بين نيبال والصين وترتفع 8,848 متراً عن سطح البحر.",
        "hint": "تقع في قارة آسيا"
      },
      {
        "id": "gen-geography-3",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 400,
        "question": "ما هو أعمق خندق بحري في المحيطات ويقع في المحيط الهادئ؟",
        "options": [
          "خندق ماريانا",
          "خندق بورتوريكو",
          "خندق جاوا",
          "خندق تونغا"
        ],
        "correctAnswer": "خندق ماريانا",
        "explanation": "تصل أعمق نقطة (تشالنجر ديب) في خندق ماريانا لنحو 11,000 متر تحت سطح البحر.",
        "hint": "عمق يتجاوز ارتفاع قمة إفرست"
      },
      {
        "id": "gen-geography-4",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Caspian_Sea_from_orbit.jpg/600px-Caspian_Sea_from_orbit.jpg",
        "hideImageUntilAnswer": true,
        "points": 500,
        "question": "ما هي أكبر بحيرة مغلقة (بحر داخلي) في العالم من حيث المساحة؟",
        "options": [
          "بحر قزوين",
          "البحر الميت",
          "بحيرة فيكتوريا",
          "البحيرة العظمى"
        ],
        "correctAnswer": "بحر قزوين",
        "explanation": "بحر قزوين هو أكبر مسطح مائي مغلق على الأرض وتبلغ مساحته 371,000 كم².",
        "hint": "يحاذي روسيا وإيران وأذربيجان"
      },
      {
        "id": "gen-geography-5",
        "points": 600,
        "question": "ما هي أكبر قارة في العالم من حيث المساحة وعدد السكان؟",
        "options": [
          "قارة آسيا",
          "قارة أفريقيا",
          "قارة أوروبا",
          "أمريكا الشمالية"
        ],
        "correctAnswer": "قارة آسيا",
        "explanation": "تغطي قارة آسيا نحو 30% من مساحة اليابسة وتضم أكثر من نُصف سكان الأرض.",
        "hint": "تضم أكبر دولتين من حيث السكان: الصين والهند",
        "imageUrl": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "gen-capitals",
    "name": "دول وعواصم",
    "type": "general",
    "section": "🌍 قسم دول",
    "iconName": "Building2",
    "description": "يحتوي على أسئلة تتعلق بعواصم الدول، أعلامها، ألوان الأعلام، اللغات، العملات، والحكام",
    "color": "from-emerald-500 to-green-600",
    "bgGradient": "bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/30",
    "tags": [
      "عواصم",
      "دول",
      "جغرافيا"
    ],
    "questions": capitals100Questions
  },
  {
    "id": "gen-flags",
    "name": "أعلام",
    "type": "general",
    "section": "🌍 قسم دول",
    "iconName": "Flag",
    "imageUrl": "https://i.postimg.cc/5trmVDk5/davinci-a-clean-stylized-vector-style-cartoon-icon-repres-(1).png",
    "description": "يحتوي على أسئلة التعرف على أعلام الدول الحالية مع عرض العلم مباشرة بالصورة",
    "color": "from-amber-500 to-red-500",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-red-500/10 border-amber-500/30",
    "tags": [
      "أعلام",
      "رموز",
      "دول"
    ],
    "questions": flags100Questions
  },
  {
    "id": "gen-old-flags",
    "name": "أعلام قديمة",
    "type": "general",
    "section": "🌍 قسم دول",
    "iconName": "Scroll",
    "imageUrl": "https://wsrv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FFlag_of_the_Ottoman_Empire_%25281844%25E2%2580%25931922%2529.svg%2F600px-Flag_of_the_Ottoman_Empire_%25281844%25E2%2580%25931922%2529.svg.png",
    "description": "يحتوي على أسئلة التعرف على الرايات والأعلام التاريخية القديمة مع عرض العلم بالصورة",
    "color": "from-amber-600 to-yellow-700",
    "bgGradient": "bg-gradient-to-br from-amber-600/10 to-yellow-600/10 border-amber-600/30",
    "tags": [
      "أعلام قديمة",
      "تاريخ",
      "رايات"
    ],
    "questions": oldFlags100Questions
  },
  {
    "id": "spec-kuwait-general",
    "name": "الكويت",
    "type": "general",
    "section": "🇰🇼 قسم الكويت",
    "iconName": "Landmark",
    "description": "أسئلة تتعلق بالكويت في جميع المجالات (تاريخ، شخصيات، معالم)",
    "color": "from-amber-500 to-emerald-600",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-emerald-600/10 border-amber-500/30",
    "tags": [
      "الكويت",
      "تاريخ",
      "معالم"
    ],
    "questions": [
      {
        "id": "spec-kuwait-general-1",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Abdullah_III_Al-Salim_Al-Sabah.jpg/600px-Abdullah_III_Al-Salim_Al-Sabah.jpg",
        "hideImageUntilAnswer": true,
        "points": 200,
        "question": "ما هو الرمز المعماري الوطني الشهير والمشرف على الساحل والذي افتتح عام 1979م؟",
        "options": [
          "أبراج الكويت",
          "برج الحمراء",
          "برج التحرير",
          "سوق شرق"
        ],
        "correctAnswer": "أبراج الكويت",
        "explanation": "أبراج الكويت الثلاثة تمثل الرمز الأبرز لمعالم الكويت الحديثة.",
        "hint": "ثلاثة أبراج كروية زرقاء مميزة"
      },
      {
        "id": "spec-kuwait-general-2",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kuwaiti_Baiza_1886.jpg/600px-Kuwaiti_Baiza_1886.jpg",
        "hideImageUntilAnswer": true,
        "points": 300,
        "question": "من هو حاكم الكويت الملقب بـ \"أبو الدستور\" والذي صدر الدستور بعهده عام 1962م؟",
        "options": [
          "الشيخ عبدالله السالم الصباح",
          "الشيخ مبارك الصباح",
          "الشيخ جابر الأحمد الصباح",
          "الشيخ صباح الأحمد الصباح"
        ],
        "correctAnswer": "الشيخ عبدالله السالم الصباح",
        "explanation": "الحاكم الحادي عشر للكويت ورائد النهضة الدستورية الحديثة.",
        "hint": "الشيخ عبدالله السالم"
      },
      {
        "id": "spec-kuwait-general-3",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/600px-Flag_of_Kuwait.svg.png",
        "hideImageUntilAnswer": true,
        "points": 400,
        "question": "ما هي أقدم عملة نقدية نحاسية صكّت محلياً في الكويت عام 1886م في عهد الشيخ عبدالله بن صباح الثاني؟",
        "options": [
          "البيزة الكويتية",
          "الروبية الهندية",
          "القرش",
          "الدينار"
        ],
        "correctAnswer": "البيزة الكويتية",
        "explanation": "صكت البيزة الكويتية محلياً عام 1886 وتعرف تاريخياً بالبيزة.",
        "hint": "البيزة الكويتية النحاسية"
      },
      {
        "id": "spec-kuwait-general-4",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Boubyan_Island_NASA.jpg/600px-Boubyan_Island_NASA.jpg",
        "hideImageUntilAnswer": true,
        "points": 500,
        "question": "ما هي أكبر جزيرة كويتية من حيث المساحة وتقع شمال شرق الكويت؟",
        "options": [
          "جزيرة بوبيان",
          "جزيرة فيلكا",
          "جزيرة وربة",
          "جزيرة كبر"
        ],
        "correctAnswer": "جزيرة بوبيان",
        "explanation": "تبلغ مساحة جزيرة بوبيان نحو 863 كم2 وهي أكبر الجزر الكويتية.",
        "hint": "ترتبط بمشروع ميناء المبارك الكبير"
      },
      {
        "id": "spec-kuwait-general-5",
        "points": 600,
        "question": "في أي عام تم افتتاح أبراج الكويت الشهيرة رسمياً كمعلم وطني وثقافي بارز على الخليج؟",
        "options": [
          "1979",
          "1961",
          "1985",
          "1990"
        ],
        "correctAnswer": "1979",
        "explanation": "افتتحت أبراج الكويت رسمياً في مارس 1979 وتعد الرمز الحضاري الأول للكويت.",
        "hint": "أواخر سبعينيات القرن الماضي",
        "imageUrl": "https://images.unsplash.com/photo-1578895210405-907db486c111?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "spec-kuwait-restaurants",
    "name": "شارع المطاعم",
    "type": "general",
    "section": "🇰🇼 قسم الكويت",
    "iconName": "Utensils",
    "description": "أسئلة تتعلق بالمطاعم والمأكولات الكويتية والعالمية",
    "color": "from-amber-600 to-orange-600",
    "bgGradient": "bg-gradient-to-br from-amber-600/10 to-orange-600/10 border-amber-600/30",
    "tags": [
      "مطاعم",
      "أكلات",
      "وجبات"
    ],
    "questions": [
      {
        "id": "spec-kuwait-restaurants-1",
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 200,
        "question": "ما هي الوجبة الوطنية الكويتية الأولى المكونة من الأرز والدجاج أو اللحم مع الدقوس والعيش؟",
        "options": [
          "المجبوس (مكبوس)",
          "المطبوخ",
          "المرقوقة",
          "الجريش"
        ],
        "correctAnswer": "المجبوس (مكبوس)",
        "explanation": "المجبوس الكويتي باللحم أو الدجاج والزعفران هو سيد المائدة التراثية.",
        "hint": "مجبوس لحم أو دجاج"
      },
      {
        "id": "spec-kuwait-restaurants-2",
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 300,
        "question": "ما اسم المطعم الكويتي التراثي الشهير بتقديم وجبة \"الباجة\" والمأكولات البحرية العريقة بالمرقاب والمباركية؟",
        "options": [
          "مطعم الشمم",
          "مطعم كابوريا",
          "مطعم الفوزان",
          "مطعم حسني"
        ],
        "correctAnswer": "مطعم الشمم",
        "explanation": "مطعم الشمم في المباركية مشهور بالأطباق الكويتية والمشاوي والباجة.",
        "hint": "مطعم الشمم بسوق المباركية"
      },
      {
        "id": "spec-kuwait-restaurants-3",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 400,
        "question": "ما هي الحلوى الكويتية الشعبية التراثية المكونة من السمسم والرهش ودبس التمر؟",
        "options": [
          "الرهش",
          "القبيط",
          "الدرابيل",
          "القرص عقيلي"
        ],
        "correctAnswer": "الرهش",
        "explanation": "الرهش الكويتي بالسمسم والنعمة هو من أقدم وألذ الحلويات الشعبية.",
        "hint": "حلوى سمسمية كويتية طرية"
      },
      {
        "id": "spec-kuwait-restaurants-4",
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 500,
        "question": "ما اسم الطبق البحري التراثي الكويتي المكون من الروبيان المجفف والأرز مع الحشو؟",
        "options": [
          "مموش روبيان",
          "مطبك زبيدي",
          "ربيان مشوي",
          "حسو بوبيان"
        ],
        "correctAnswer": "مموش روبيان",
        "explanation": "المموش بالروبيان اليابس أو الطري مطبوخ مع الماش والأرز المعطر.",
        "hint": "طبق المموش والماش مع الروبيان"
      },
      {
        "id": "spec-kuwait-restaurants-5",
        "points": 600,
        "question": "ما اسم الوجبة الليلية الأكثر شعبية وإقبالاً في المطاعم بالسالمية شارع المطاعم؟",
        "options": [
          "شاورما الدجاج واللحم",
          "البرجر على الحطب",
          "الفلافل المشكلة",
          "المشاوي المشكلة"
        ],
        "correctAnswer": "شاورما الدجاج واللحم",
        "explanation": "تعتبر الشاورما الوجبة الأكثر طلباً وإقبالاً بين الشباب والمقيدين ليلاً بشارع المطاعم.",
        "hint": "أشهر ساندويش سريع مع الثوم والبطاط",
        "imageUrl": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "spec-kuwait-location",
    "name": "لوكيشن",
    "type": "general",
    "section": "🇰🇼 قسم الكويت",
    "iconName": "MapPin",
    "description": "أسئلة تتعلق بمواقع وأماكن مختلف الأماكن والمناطق في الكويت",
    "color": "from-blue-600 to-indigo-600",
    "bgGradient": "bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border-blue-600/30",
    "tags": [
      "لوكيشن",
      "مناطق",
      "معالم"
    ],
    "questions": [
      {
        "id": "spec-kuwait-location-1",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sheikh_Jaber_Al-Ahmad_Al-Sabah_Causeway.jpg/600px-Sheikh_Jaber_Al-Ahmad_Al-Sabah_Causeway.jpg",
        "hideImageUntilAnswer": true,
        "points": 200,
        "question": "أين يقع جسر الشيخ جابر الأحمد الصباح البحري الفائق الطول والذي يربط العاصمة بـ؟",
        "options": [
          "منطقة الصبية (مدينة الحرير)",
          "جزيرة فيلكا",
          "جزيرة أم المرادم",
          "منطقة الخيران"
        ],
        "correctAnswer": "منطقة الصبية (مدينة الحرير)",
        "explanation": "يربط جسر الشيخ جابر بين مدينة الكويت والصبية عبر جون الكويت.",
        "hint": "منطقة الصبية شمال جون الكويت"
      },
      {
        "id": "spec-kuwait-location-2",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_Palace_Jahra.jpg/600px-Red_Palace_Jahra.jpg",
        "hideImageUntilAnswer": true,
        "points": 300,
        "question": "في أي محافظة كويتية تقع منطقة \"القصر الأحمر\" التاريخية الشاهدة على معركة الجهراء؟",
        "options": [
          "محافظة الجهراء",
          "محافظة العاصمة",
          "محافظة الأحمدي",
          "محافظة مبارك الكبير"
        ],
        "correctAnswer": "محافظة الجهراء",
        "explanation": "القصر الأحمر من أهم المعالم التاريخية في قلب محافظة الجهراء.",
        "hint": "محافظة الجهراء"
      },
      {
        "id": "spec-kuwait-location-3",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Failaka_Island_Ikaros.jpg/600px-Failaka_Island_Ikaros.jpg",
        "hideImageUntilAnswer": true,
        "points": 400,
        "question": "أين تقع جزيرة \"فيلكا\" التراثية ذات الآثار الدلمونية والإغريقية بالخليج العربي؟",
        "options": [
          "شمال شرق مدينة الكويت بمسافة 20 كم",
          "جنوب الخيران",
          "مقابل ساحل الفحيحيل",
          "في خور عبدالله"
        ],
        "correctAnswer": "شمال شرق مدينة الكويت بمسافة 20 كم",
        "explanation": "تقع جزيرة فيلكا في مدخل جون الكويت على بعد 20 كم من العاصمة.",
        "hint": "مقابل ساحل العاصمة بجون الكويت"
      },
      {
        "id": "spec-kuwait-location-4",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 500,
        "question": "أين تقع شاليهات ومنتجعات \"الخيران\" البحرية الشهيرة بالأنشطة البحرية؟",
        "options": [
          "أقصى جنوب الكويت قرب النويصيب",
          "شمال الصبية",
          "في جزيرة وربة",
          "في غرب العبدلي"
        ],
        "correctAnswer": "أقصى جنوب الكويت قرب النويصيب",
        "explanation": "الخيران منطقة بحرية استثمارية في أقصى جنوب دولة الكويت.",
        "hint": "جنوب الكويت قرب الحدود"
      },
      {
        "id": "spec-kuwait-location-5",
        "points": 600,
        "question": "في أي منطقة كويتية يقع سوق المباركية التاريخي العريق بقلب الكويت؟",
        "options": [
          "مدينة الكويت (العاصمة)",
          "السالمية",
          "حولي",
          "الجهراء"
        ],
        "correctAnswer": "مدينة الكويت (العاصمة)",
        "explanation": "يقع سوق المباركية التراثي في قلب العاصمة مدينة الكويت ويستقطب آلاف الزوار.",
        "hint": "قلب العاصمة التاريخي",
        "imageUrl": "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "spec-kuwait-malls",
    "name": "مجمعات الكويت",
    "type": "general",
    "section": "🇰🇼 قسم الكويت",
    "iconName": "Building2",
    "description": "أسئلة تتعلق بالمجمعات والأسواق التجارية في الكويت",
    "color": "from-amber-500 to-yellow-600",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border-amber-500/30",
    "tags": [
      "الأفنيوز",
      "مجمعات",
      "تسوق"
    ],
    "questions": [
      {
        "id": "spec-kuwait-malls-1",
        "imageUrl": "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 200,
        "question": "في أي منطقة يقع مجمع \"360\" الشهير الذي يضم أرينا الكويت وملاعب التنس العالمية؟",
        "options": [
          "جنوب السرة (الزهراء)",
          "السالمية",
          "شرق",
          "الفحيحيل"
        ],
        "correctAnswer": "جنوب السرة (الزهراء)",
        "explanation": "مجمع 360 يقع في منطقة الزهراء على الدائري السادس.",
        "hint": "منطقة الزهراء بجنوب السرة"
      },
      {
        "id": "spec-kuwait-malls-2",
        "imageUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 300,
        "question": "ما اسم المجمع والواجهة البحرية الفاخرة المطلة على ساحل الفحيحيل مع النافورة الموسيقية؟",
        "options": [
          "مجمع الكوت (Al Kout Mall)",
          "مجمع الفنار",
          "مجمع مارينا مول",
          "مجمع البيرق"
        ],
        "correctAnswer": "مجمع الكوت (Al Kout Mall)",
        "explanation": "مجمع الكوت في الفحيحيل يضم أكبر واجهة بحرية وتسويقية بالمنطقة الجنوبية.",
        "hint": "الكوت بالفحيحيل"
      },
      {
        "id": "spec-kuwait-malls-3",
        "imageUrl": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 400,
        "question": "ما اسم المجمع التجاري العريق المطل على شارع الخليج العربي بالسالمية ومربوط بـ \"جسر المشاة\" الشاطئي؟",
        "options": [
          "مارينا مول (Marina Mall)",
          "مجمع الثريا",
          "مجمع العوضي",
          "مجمع السلام"
        ],
        "correctAnswer": "مارينا مول (Marina Mall)",
        "explanation": "مارينا مول بالسالمية يمتد بجسر مشاة علوي نحو مارينا كريسينت والشاطئ.",
        "hint": "مارينا مول السالمية"
      },
      {
        "id": "spec-kuwait-malls-4",
        "imageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 500,
        "question": "ما هو البرج والمجمع التجاري الذي يعتبر الأطول في الكويت في قلب منطقة شرق؟",
        "options": [
          "برج الحمراء (Al Hamra Tower)",
          "برج الراية",
          "برج الكيبكو",
          "برج بيتك"
        ],
        "correctAnswer": "برج الحمراء (Al Hamra Tower)",
        "explanation": "برج ومجمع الحمراء يرتفع 414 متراً كأطول ناطحة سحاب في الكويت.",
        "hint": "برج الحمراء بشرق"
      },
      {
        "id": "spec-kuwait-malls-5",
        "points": 600,
        "question": "ما اسم المجمع التجاري الفاخر بمنطقة الشرق ذو الواجهة البحرية والمراسي والسينما؟",
        "options": [
          "مجمع سوق شرق",
          "الأفنيوز",
          "360 مول",
          "الكوت"
        ],
        "correctAnswer": "مجمع سوق شرق",
        "explanation": "سوق شرق هو من أقدم وأرقى المجمعات البحرية المطلة على الخليج في منطقة الشرق.",
        "hint": "سوق ومجمع بحري عريق بمنطقة الشرق",
        "imageUrl": "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "spec-kuwait-cafes",
    "name": "قهاوي",
    "type": "general",
    "section": "🇰🇼 قسم الكويت",
    "iconName": "Coffee",
    "description": "أسئلة تتعلق بالكافيهات والقهوة في الكويت",
    "color": "from-amber-700 to-orange-700",
    "bgGradient": "bg-gradient-to-br from-amber-700/10 to-orange-700/10 border-amber-700/30",
    "tags": [
      "قهاوي",
      "قهوة",
      "كافيهات"
    ],
    "questions": [
      {
        "id": "spec-kuwait-cafes-1",
        "imageUrl": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 200,
        "question": "ما هي المقاهي التراثية الرسمية المطلة على البحر والموجودة بالشرق والسالمية والشعيبات؟",
        "options": [
          "المقاهي الشعبية الكويتية",
          "القهاوي التركية",
          "قهوة بو راشد",
          "ديوانية السيف"
        ],
        "correctAnswer": "المقاهي الشعبية الكويتية",
        "explanation": "المقاهي الشعبية تديرها الدولة للمحافظة على التراث والألعاب الشعبية مثل الدومينو والجنجفة.",
        "hint": "المقاهي الشعبية التراثية"
      },
      {
        "id": "spec-kuwait-cafes-2",
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 300,
        "question": "ما اسم القهوة المقطرة الباردة المبتكرة والمشهورة في كافيهات الكويت الحديثة المجهزة خلال 12 ساعة؟",
        "options": [
          "كولد برو (Cold Brew)",
          "v60",
          "أمريكانو",
          "سيراب بارد"
        ],
        "correctAnswer": "كولد برو (Cold Brew)",
        "explanation": "الكولد برو تقطر بالماء البارد ببطء وتعطي نكهة مركزة غير حامضية.",
        "hint": "Cold Brew"
      },
      {
        "id": "spec-kuwait-cafes-3",
        "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 400,
        "question": "ماذا يسمى الوعاء النحاسي التراثي المستخدم لتحضير وتقديم القهوة العربية الكويتية مع الهيل والزعفران؟",
        "options": [
          "الدلة (الدلة الكويتية)",
          "الغرشة",
          "البريغ",
          "الستكانة"
        ],
        "correctAnswer": "الدلة (الدلة الكويتية)",
        "explanation": "الدلة هي رمزي الأصالة والضيافة العربية في تقديم القهوة.",
        "hint": "دلة القهوة العربية"
      },
      {
        "id": "spec-kuwait-cafes-4",
        "imageUrl": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 500,
        "question": "ما اسم المقهى الكويتي الشهير المختص بالقهوة الفاخرة والذي انطلق من الكويت وتوسع عالمياً بشعار بسيط راقٍ؟",
        "options": [
          "% Arabica (أرابيكا)",
          "Toby's Estate",
          "Volcano Coffee",
          "Dose Cafe"
        ],
        "correctAnswer": "% Arabica (أرابيكا)",
        "explanation": "% Arabica انطلقت بدعم كويتي وحققت انتشاراً عالمياً واسعاً.",
        "hint": "شعار النسبة المئوية %"
      },
      {
        "id": "spec-kuwait-cafes-5",
        "points": 600,
        "question": "ما اسم المقاهي الشعبية الكويتية العريقة التاريخية في المباركية التي تجمع بين الأجيال لشرب الشاي؟",
        "options": [
          "قهوة بوناشي",
          "قهوة المباركية",
          "قهوة شرق",
          "قهوة السالمية"
        ],
        "correctAnswer": "قهوة بوناشي",
        "explanation": "قهوة بوناشي هي أقدم قهوة شعبية تاريخية أنشئت في المباركية في عهد الشيخ جابر الأول.",
        "hint": "أول وأقدم مقهى تاريخي بالمباركية",
        "imageUrl": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "spec-islamic-general",
    "name": "إسلامي",
    "type": "specific",
    "section": "🕌 قسم إسلامي",
    "iconName": "Moon",
    "description": "أسئلة دينية عامة، تاريخ إسلامي، وسيرة",
    "color": "from-emerald-600 to-teal-700",
    "bgGradient": "bg-gradient-to-br from-emerald-600/10 to-teal-700/10 border-emerald-600/30",
    "tags": [
      "ديني",
      "إسلامي",
      "تاريخ"
    ],
    "questions": [
      {
        "id": "islamic_200_001",
        "points": 200,
        "question": "ما هي أطول سورة في القرآن الكريم؟",
        "correctAnswer": "سورة البقرة",
        "explanation": "الإجابة الصحيحة هي: سورة البقرة",
        "hint": "تضم آية الكرسي وآية الدين وعدد آياتها 286 آية"
      },
      {
        "id": "islamic_200_002",
        "points": 200,
        "question": "ما هي أقصر سورة في القرآن الكريم؟",
        "correctAnswer": "سورة الكوثر",
        "explanation": "الإجابة الصحيحة هي: سورة الكوثر",
        "hint": "عدد آياتها 3 آيات فقط"
      },
      {
        "id": "islamic_400_041",
        "points": 400,
        "question": "ما هي الغزوة الأولى في الإسلام؟",
        "correctAnswer": "غزوة الأبواء",
        "explanation": "الإجابة الصحيحة هي: غزوة الأبواء",
        "hint": "تسمى أيضاً غزوة ودّان"
      },
      {
        "id": "islamic_400_042",
        "points": 400,
        "question": "ما هي أول غزوة كبرى بين المسلمين والمشركين؟",
        "correctAnswer": "غزوة بدر الكبرى",
        "explanation": "الإجابة الصحيحة هي: غزوة بدر الكبرى",
        "hint": "وقعت في 17 رمضان 2 هـ وسميت يوم الفرقان"
      },
      {
        "id": "islamic_600_076",
        "points": 600,
        "question": "من هو الصحابي الوحيد الذي ذُكر اسمه صراحة في القرآن الكريم؟",
        "correctAnswer": "زيد بن حارثة رضي الله عنه",
        "explanation": "الإجابة الصحيحة هي: زيد بن حارثة رضي الله عنه",
        "hint": "في سورة الأحزاب: \"فلما قضى زيد منها وطراً زوجناكها\""
      }
    ]
  },
  {
    "id": "spec-islamic-quran",
    "name": "القرآن الكريم",
    "type": "specific",
    "section": "🕌 قسم إسلامي",
    "iconName": "Book",
    "description": "أسئلة تتعلق بآيات القرآن، السور، والقراء",
    "color": "from-emerald-500 to-green-600",
    "bgGradient": "bg-gradient-to-br from-emerald-500/10 to-green-600/10 border-emerald-500/30",
    "tags": [
      "قرآن",
      "سور",
      "آيات"
    ],
    "questions": [
      {
        "id": "quran_200_001",
        "points": 200,
        "question": "ما هي أعظم آية في القرآن الكريم؟",
        "correctAnswer": "آية الكرسي",
        "explanation": "الإجابة الصحيحة هي: آية الكرسي",
        "hint": "الآية 255 من سورة البقرة (الله لا إله إلا هو الحي القيوم)"
      },
      {
        "id": "quran_200_002",
        "points": 200,
        "question": "ما هي السورة التي تسمى \"أم الكتاب\"؟",
        "correctAnswer": "سورة الفاتحة",
        "explanation": "الإجابة الصحيحة هي: سورة الفاتحة",
        "hint": "فاتحة الكتاب والسبع المثاني"
      },
      {
        "id": "quran_400_041",
        "points": 400,
        "question": "ما هي السورة التي تنجي صاحبها من عذاب القبر؟",
        "correctAnswer": "سورة الملك (التبارك)",
        "explanation": "الإجابة الصحيحة هي: سورة الملك (التبارك)",
        "hint": "سورة ثلاثون آية شفعت لرجل حتى غفر له"
      },
      {
        "id": "quran_400_044",
        "points": 400,
        "question": "ما هي السورة التي تسمى \"سورة النعم\" لكثرة النعم المذكورة فيها؟",
        "correctAnswer": "سورة النحل",
        "explanation": "الإجابة الصحيحة هي: سورة النحل",
        "hint": "وإن تعدوا نعمة الله لا تحصوها"
      },
      {
        "id": "quran_600_077",
        "points": 600,
        "question": "ما هي السورة التي تكررت فيها الآية \"فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ\" 31 مرة؟",
        "correctAnswer": "سورة الرحمن",
        "explanation": "الإجابة الصحيحة هي: سورة الرحمن",
        "hint": "عروس القرآن"
      }
    ]
  },
  {
    "id": "spec-islamic-seerah",
    "name": "السيرة النبوية",
    "type": "specific",
    "section": "🕌 قسم إسلامي",
    "iconName": "Sparkles",
    "description": "أسئلة تتعلق بحياة وسيرة الرسول ﷺ",
    "color": "from-teal-600 to-emerald-700",
    "bgGradient": "bg-gradient-to-br from-teal-600/10 to-emerald-700/10 border-teal-600/30",
    "tags": [
      "سيرة",
      "الرسول",
      "النبي"
    ],
    "questions": seerah100Questions
  },
  {
    "id": "spec-islamic-prophets",
    "name": "قصص الأنبياء",
    "type": "specific",
    "section": "🕌 قسم إسلامي",
    "iconName": "Scroll",
    "description": "أسئلة تتعلق بآيات وأحداث قصص الأنبياء",
    "color": "from-emerald-700 to-green-800",
    "bgGradient": "bg-gradient-to-br from-emerald-700/10 to-green-800/10 border-emerald-700/30",
    "tags": [
      "أنبياء",
      "قصص",
      "معجزات"
    ],
    "questions": [
      {
        "id": "spec-islamic-prophets-1",
        "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 200,
        "question": "ما اسم النبي الكريم الذي التقمه الحوت ونادى في الظلمات \"لا إله إلا أنت سبحانك إني كنت من الظالمين\"؟",
        "options": [
          "يونس عليه السلام",
          "يوسف عليه السلام",
          "أيوب عليه السلام",
          "زكريا عليه السلام"
        ],
        "correctAnswer": "يونس عليه السلام",
        "explanation": "يونس عليه السلام (ذا النون) نجا بدعائه المستجاب في بطن الحوت.",
        "hint": "ذو النون يونس"
      },
      {
        "id": "spec-islamic-prophets-2",
        "imageUrl": "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 300,
        "question": "من هو كليم الله النبي الذي أيده الله بمعجزة العصا واليد البيضاء وأغرق فرعون بعهده؟",
        "options": [
          "موسى عليه السلام",
          "عيسى عليه السلام",
          "هارون عليه السلام",
          "شعيب عليه السلام"
        ],
        "correctAnswer": "موسى عليه السلام",
        "explanation": "موسى كليم الله عليه السلام واجه فرعون وجنوده بعون الله.",
        "hint": "كليم الله موسى"
      },
      {
        "id": "spec-islamic-prophets-3",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 400,
        "question": "ما اسم النبي والملك الصالح الذي سخر الله له الريح والجن وسال له عين القطر؟",
        "options": [
          "سليمان عليه السلام",
          "داوود عليه السلام",
          "طالوت",
          "ذو القرنين"
        ],
        "correctAnswer": "سليمان عليه السلام",
        "explanation": "سليمان بن داوود عليهما السلام آتاه الله ملكاً لم يؤتَ لأحد من العالمين.",
        "hint": "سليمان عليه السلام"
      },
      {
        "id": "spec-islamic-prophets-4",
        "imageUrl": "https://images.unsplash.com/photo-1568430462629-2235726c1e18?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 500,
        "question": "من هو النبي الصابر الشهير الذي ضرب الله به المثل في الصبر على الشفاء والبلاء بالجسد والمال؟",
        "options": [
          "أيوب عليه السلام",
          "يعقوب عليه السلام",
          "إسحاق عليه السلام",
          "يحيى عليه السلام"
        ],
        "correctAnswer": "أيوب عليه السلام",
        "explanation": "ضرب المثل بصبر أيوب عليه السلام حتى فرج الله عنه وعافاه.",
        "hint": "صبر أيوب عليه السلام"
      },
      {
        "id": "spec-islamic-prophets-5",
        "points": 600,
        "question": "من هو النبي الصالح الذي بنى الفلك العظيمة بنصيحة وأمر من الله لينجو من الطوفان؟",
        "options": [
          "نوح عليه السلام",
          "إبراهيم عليه السلام",
          "موسى عليه السلام",
          "هود عليه السلام"
        ],
        "correctAnswer": "نوح عليه السلام",
        "explanation": "بنى نبي الله نوح عليه السلام السفينة وحمل فيها من كل زوجين اثنين وحماه الله من الطوفان.",
        "hint": "صاحب الفلك والأب الثاني للبشرية",
        "imageUrl": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "spec-islamic-sahaba",
    "name": "الصحابة",
    "type": "specific",
    "section": "🕌 قسم إسلامي",
    "iconName": "Users",
    "description": "أسئلة تتعلق بسير ومواقف صحابة الرسول عليه الصلاة والسلام",
    "color": "from-emerald-600 to-amber-700",
    "bgGradient": "bg-gradient-to-br from-emerald-600/10 to-amber-700/10 border-emerald-600/30",
    "tags": [
      "صحابة",
      "بطولات",
      "فرسان"
    ],
    "questions": [
      {
        "id": "spec-islamic-sahaba-1",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Damascus_Mosque.jpg/600px-Damascus_Mosque.jpg",
        "hideImageUntilAnswer": true,
        "points": 200,
        "question": "من هو القائد الصحابي الملقب بـ \"سيف الله المسلول\" والذي لم يهزم في أي معركة خاضها؟",
        "options": [
          "خالد بن الوليد رضي الله عنه",
          "سعد بن أبي وقاص",
          "عمرو بن العاص",
          "القعقاع بن عمرو"
        ],
        "correctAnswer": "خالد بن الوليد رضي الله عنه",
        "explanation": "خالد بن الوليد قائد معارك اليرموك والفتوحات الخالدة.",
        "hint": "سيف الله المسلول خالد"
      },
      {
        "id": "spec-islamic-sahaba-2",
        "imageUrl": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 300,
        "question": "من هو الصحابي الجليل الملقب بـ \"ذو النورين\" لزواجه من بنتي النبي ﷺ (رقية وأم كلثوم)؟",
        "options": [
          "عثمان بن عفان رضي الله عنه",
          "عبد الرحمن بن عوف",
          "الزبير بن العوام",
          "سعيد بن زيد"
        ],
        "correctAnswer": "عثمان بن عفان رضي الله عنه",
        "explanation": "عثمان بن عفان صاحب بئر روما وجيش العسرة ثالث الخلفاء الراشدين.",
        "hint": "ذو النورين عثمان"
      },
      {
        "id": "spec-islamic-sahaba-3",
        "imageUrl": "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 400,
        "question": "من هو الصحابي الذي قال عنه النبي ﷺ \"لكل أمة أمين، وأمين هذه الأمة...\"؟",
        "options": [
          "أبو عبيدة بن الجراح رضي الله عنه",
          "أبو هريرة",
          "عبد الله بن مسعود",
          "أبي بن كعب"
        ],
        "correctAnswer": "أبو عبيدة بن الجراح رضي الله عنه",
        "explanation": "أبو عبيدة عامر بن الجراح أمين الأمة وأحد العشرة المبشرين بالجنة.",
        "hint": "أبو عبيدة بن الجراح"
      },
      {
        "id": "spec-islamic-sahaba-4",
        "imageUrl": "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true,
        "points": 500,
        "question": "من هو الصحابي الجليل قائد الأوس الذي اهتز لوفاته عرش الرحمن عز وجل في غزوة الخندق؟",
        "options": [
          "سعد بن معاذ رضي الله عنه",
          "سعد بن عبادة",
          "أسعد بن زرارة",
          "مصعب بن عمير"
        ],
        "correctAnswer": "سعد بن معاذ رضي الله عنه",
        "explanation": "سعد بن معاذ اهتز لموته عرش الرحمن وشيعه سبعون ألف ملك.",
        "hint": "سعد بن معاذ رضي الله عنه"
      },
      {
        "id": "spec-islamic-sahaba-5",
        "points": 600,
        "question": "من هو الصحابي الجليل الجميل الصوت أول مؤذن في الإسلام وصاحب الأذان فوق الكعبة؟",
        "options": [
          "بلال بن رباح",
          "عبدالله بن مسعود",
          "سلمان الفارسي",
          "أبو هريرة"
        ],
        "correctAnswer": "بلال بن رباح",
        "explanation": "بلال بن رباح رضي الله عنه كان مؤذن رسول الله ﷺ الصادق الصابر.",
        "hint": "مؤذن الرسول ﷺ الأخير والأول",
        "imageUrl": "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&auto=format&fit=crop&q=80",
        "hideImageUntilAnswer": true
      }
    ]
  },
  {
    "id": "spec-foreign-marvel",
    "name": "Marvel",
    "type": "specific",
    "section": "🎬 قسم فن أجنبي",
    "iconName": "ShieldAlert",
    "imageUrl": "https://i.postimg.cc/kGymzNXf/lucid-origin-A-stylized-vector-style-cartoon-icon-representing-Marvel-Superheroes-characters-0.jpg",
    "description": "أسئلة تتعلق بعالم وعالم أفلام ومسلسلات مارفل السينمائية",
    "color": "from-red-600 to-rose-700",
    "bgGradient": "bg-gradient-to-br from-red-600/10 to-rose-700/10 border-red-600/30",
    "tags": [
      "Marvel",
      "Avengers",
      "MCU"
    ],
    "questions": marvel100Questions
  },
  {
    "id": "spec-foreign-got",
    "name": "Game Of Thrones",
    "type": "specific",
    "section": "🎬 قسم فن أجنبي",
    "iconName": "Crown",
    "imageUrl": "https://i.postimg.cc/vmTpXFVP/davinci-a-stylized-dynamic-vector-style-cartoon-icon-repr.png",
    "description": "أسئلة تتعلق بمسلسل صراع العروش والعرش الحديدي",
    "color": "from-slate-700 to-amber-700",
    "bgGradient": "bg-gradient-to-br from-slate-700/10 to-amber-700/10 border-slate-700/30",
    "tags": [
      "GOT",
      "Stark",
      "Targaryen"
    ],
    "questions": gameOfThrones100Questions
  },
  {
    "id": "spec-foreign-twd",
    "name": "The Walking Dead",
    "type": "specific",
    "section": "🎬 قسم فن أجنبي",
    "iconName": "Skull",
    "imageUrl": "/the_walking_dead/twd_1.jpg",
    "description": "أسئلة تتعلق بمسلسل TWD والصراع ضد الزومبي والناجين",
    "color": "from-amber-800 to-stone-900",
    "bgGradient": "bg-gradient-to-br from-amber-800/10 to-stone-900/10 border-amber-800/30",
    "tags": [
      "TWD",
      "Zombies",
      "Rick"
    ],
    "questions": theWalkingDead100Questions
  },
  {
    "id": "spec-foreign-peaky",
    "name": "Peaky Blinders",
    "type": "specific",
    "section": "🎬 قسم فن أجنبي",
    "iconName": "Flame",
    "imageUrl": "/peaky_blinders/peaky_1.jpg",
    "description": "أسئلة تتعلق بمسلسل بيكي بليندرز وعصابة شيلبي",
    "color": "from-amber-600 to-slate-800",
    "bgGradient": "bg-gradient-to-br from-amber-600/10 to-slate-800/10 border-amber-600/30",
    "tags": [
      "Tommy Shelby",
      "Peaky",
      "Birmingham"
    ],
    "questions": peakyBlinders100Questions
  },
  {
    "id": "spec-foreign-bb",
    "name": "Breaking Bad",
    "type": "specific",
    "section": "🎬 قسم فن أجنبي",
    "iconName": "FlaskConical",
    "imageUrl": "/breaking_bad/bb_1.jpg",
    "description": "أسئلة تتعلق بمسلسل بريكنج باد، هايزنبرغ، وغاس فرينغ",
    "color": "from-emerald-500 to-green-700",
    "bgGradient": "bg-gradient-to-br from-emerald-500/10 to-green-700/10 border-emerald-500/30",
    "tags": [
      "Heisenberg",
      "BreakingBad",
      "Jesse"
    ],
    "questions": breakingBad100Questions
  },
  {
    "id": "spec-turkish-general",
    "name": "فن تركي",
    "type": "specific",
    "section": "🇹🇷 قسم فن تركي",
    "iconName": "Tv",
    "imageUrl": "/turkish_drama/turkish_1.jpg",
    "description": "أسئلة عامة عن الدراما والمسلسلات والنجوم التركية",
    "color": "from-red-600 to-rose-700",
    "bgGradient": "bg-gradient-to-br from-red-600/10 to-rose-700/10 border-red-600/30",
    "tags": [
      "دراما تركية",
      "إيزيل",
      "مسلسلات"
    ],
    "questions": [
      {
        "id": "tr_q1_001",
        "points": 200,
        "question": "من هو الممثل التركي الذي يقوم بدور البطولة بشخصية 'أشرف تك' في مسلسل 'حلم أشرف' (Eşref Rüya)؟",
        "options": ["شتاي أولسوي", "كيفانش تاتليتوغ", "بوراك أوزجيفيت", "إنجين أكيوريك"],
        "correctAnswer": "شتاي أولسوي",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطل مسلسل 'في الداخل' و'المحافظ'"
      },
      {
        "id": "tr_q1_002",
        "points": 200,
        "question": "من هي النجمة التي تشارك شتاي أولسوي البطولة وتؤدي دور 'نيسان أكيول' في مسلسل 'حلم أشرف'؟",
        "options": ["ديميت أوزديمير", "هاندة أرتشيل", "نسليهان أتاغول", "توبا بويوكوستين"],
        "correctAnswer": "ديميت أوزديمير",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطلة مسلسل 'الطائر المبكر'"
      },
      {
        "id": "tr_q1_003",
        "points": 200,
        "question": "ما اسم المسلسل التاريخي الشهير الذي جسد فيه بوراك أوزجيفيت دور 'عثمان بن أرطغرل'؟",
        "options": ["المؤسس عثمان", "قيامة أرطغرل", "حريم السلطان", "عاصمة عبد الحميد"],
        "correctAnswer": "المؤسس عثمان",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "استكمال لسلسلة قيامة أرطغرل"
      },
      {
        "id": "tr_q1_004",
        "points": 200,
        "question": "ما هو المسلسل الدرامي الأسطوري الذي أدى فيه الممثل كينان إميرزالي أوغلو دور 'إيزيل بايركتار'؟",
        "options": ["ايزيل (Ezel)", "القبضاي", "دموع الورد", "وادي الذئاب"],
        "correctAnswer": "ايزيل (Ezel)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس عن الكونت دي مونت كريستو"
      },
      {
        "id": "tr_q1_005",
        "points": 200,
        "question": "ما المسلسل الرومانسي الشهير الذي جمع بين كرم بورسين وهاندة أرتشيل (سركان وإيدا)؟",
        "options": ["أنت أطرق بابي", "الحب لا يفهم الكلام", "الطائر المبكر", "رائحة التوت"],
        "correctAnswer": "أنت أطرق بابي",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "حقق انتشاراً عالمياً واسعاً"
      },
      {
        "id": "tr_q1_006",
        "points": 200,
        "question": "ما اسم مسلسل المافيا التركي الأشهر على الإطلاق والذي استمر لسنوات طويلة بشخصية 'مراد علمدار'؟",
        "options": ["وادي الذئاب", "الحفرة", "القطاع", "في الداخل"],
        "correctAnswer": "وادي الذئاب",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة نجاتي شاشماز"
      },
      {
        "id": "tr_q1_007",
        "points": 200,
        "question": "ما المسلسل الذي اشتهر بشخصية 'مهند' (مهند شاد أوغلو) ولعب بطولته كيفانش تاتليتوغ مع سونغول أودين؟",
        "options": ["نور", "العشق الممنوع", "إيزيل", "جسور والجميلة"],
        "correctAnswer": "نور",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "أول مسلسل تركي مدبلج حقق جماهيرية واسعة بالوطن العربي"
      },
      {
        "id": "tr_q1_008",
        "points": 200,
        "question": "ما اسم العمل التاريخي الذي يروي قصة 'السلطان سليمان القانوني' وزوجته 'هيام'؟",
        "options": ["حريم السلطان (Muhteşem Yüzyıl)", "نهضة السلاجقة", "عاصمة عبد الحميد", "الفاتح"],
        "correctAnswer": "حريم السلطان (Muhteşem Yüzyıl)",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة خالد أرغنش ومريم أوزرلي"
      },
      {
        "id": "tr_q1_009",
        "points": 200,
        "question": "ما اسم المسلسل الاجتماعي الذي نال شهرة هائلة وتدور أحداثه حول عائلة 'تيكين' والأب 'علي رضا'؟",
        "options": ["الأوراق المتساقطة", "الأزهار الحزينة", "عشق وجزاء", "على مر الزمان"],
        "correctAnswer": "الأوراق المتساقطة",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس عن رواية للكاتب رشاد نوري غونتكين"
      },
      {
        "id": "tr_q1_010",
        "points": 200,
        "question": "ما المسلسل الذي تدور أحداثه في حي خطير يقوده آل كوتشوفالي وتحكمه رمزية الوشم الشهير؟",
        "options": ["الحفرة (Çukur)", "في الداخل", "الاصطدام", "العهد"],
        "correctAnswer": "الحفرة (Çukur)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة أراس بولوت إينملي بدور ياماش"
      },
      {
        "id": "tr_q1_011",
        "points": 200,
        "question": "ما المسلسل الذي قام ببطولته جان يامان وديميت أوزديمير وشخصيات 'جان وسنام'؟",
        "options": ["الطائر المبكر (Erkenci Kuş)", "رائحة التوت", "العريس الرائع", "حلو ومر"],
        "correctAnswer": "الطائر المبكر (Erkenci Kuş)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مسلسل كوميدي رومانسي حول شركة إعلانات"
      },
      {
        "id": "tr_q1_012",
        "points": 200,
        "question": "ما اسم المسلسل التركي الذي جمع بين بوراك أوزجيفيت ونسليهان أتاغول وحقق نجاحاً دولياً فاز فيه بجائزة إيمي؟",
        "options": ["حب أعمى (Kara Sevda)", "ابنة السفير", "طائر الرفراف", "أنت أطرق بابي"],
        "correctAnswer": "حب أعمى (Kara Sevda)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات كمال ونيهان وأمير كوزجو أوغلو"
      },
      {
        "id": "tr_q1_013",
        "points": 200,
        "question": "ما المسلسل الظاهرة الذي قام ببطولته ميرت رمضان دمير وأفرا ساراتش أوغلو بشخصيتي 'فريد وسيران'؟",
        "options": ["طائر الرفراف (Yalı Çapkını)", "شراب التوت", "عمر", "العميل"],
        "correctAnswer": "طائر الرفراف (Yalı Çapkını)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "تدور أحداثه حول عائلة أغا من عنتاب وحفيدهم المستهتر"
      },
      {
        "id": "tr_q1_014",
        "points": 200,
        "question": "ما المسلسل الدرامي القوي الذي يجسد الصراع بين عائلتي 'أونال' الكلاسيكية وعائلة 'أرسلان' التحررية؟",
        "options": ["شراب التوت (Kızılcık Şerbeti)", "طائر الرفراف", "البراعم الحمراء", "ثلاث أخوات"],
        "correctAnswer": "شراب التوت (Kızılcık Şerbeti)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات دوغا وفاتح وكيفيلجيم"
      },
      {
        "id": "tr_q1_015",
        "points": 200,
        "question": "ما المسلسل الذي قام ببطولته إنجين ألتان دوزياتان وجسد فيه شخصية والد المؤسس عثمان؟",
        "options": ["قيامة أرطغرل", "المؤسس عثمان", "بربروسا", "نهضة السلاجقة"],
        "correctAnswer": "قيامة أرطغرل",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "امتد لـ 5 مواسم وحقق أرقاماً قياسية عالمياً"
      },
      {
        "id": "tr_q1_016",
        "points": 200,
        "question": "ما اسم المسلسل الناجح الذي يتناول كفاح القوات الخاصة التركية بقيادة الملازم 'ياووز كاراتسو'؟",
        "options": ["العهد (Söz)", "المحارب", "المنظمة", "وادي الذئاب"],
        "correctAnswer": "العهد (Söz)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة تولغا ساريتش"
      },
      {
        "id": "tr_q1_017",
        "points": 200,
        "question": "ما المسلسل الكوميدي الرومانسي الذي جمع بوراك دينيز وهاندة أرتشيل لأول مرة (مراد وحياة)؟",
        "options": ["الحب لا يفهم الكلام", "شخص آخر", "بنات الشمس", "أنت أطرق بابي"],
        "correctAnswer": "الحب لا يفهم الكلام",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يدور في عالم شركات الأزياء والتجميل"
      },
      {
        "id": "tr_q1_018",
        "points": 200,
        "question": "ما اسم الشخصية المأساوية التي قدمها بيرين سات في مسلسل يدور حول كفاح امرأة للعدالة بعد تعرضها للاعتداء؟",
        "options": ["فاطمة جول (ما ذنب فاطمة جول؟)", "سمر", "عطايا", "اسمها زهرة"],
        "correctAnswer": "فاطمة جول (ما ذنب فاطمة جول؟)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شاركها البطولة إنجين أكيوريك بدور كريم"
      },
      {
        "id": "tr_q1_019",
        "points": 200,
        "question": "ما المسلسل الطبي الشهير المقتبس عن المسلسل الأمريكي 'The Good Doctor' وبطولة أونور تونا وتانر أؤلمز؟",
        "options": ["الطبيب المعجزة (Mucize Doktor)", "نبضات قلب", "طبيب المدينة", "الرحمة"],
        "correctAnswer": "الطبيب المعجزة (Mucize Doktor)",
        "imageUrl": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يحكي قصة جراح مصاب بالتوحد وطيف الموهبة (علي وفاء)"
      },
      {
        "id": "tr_q1_020",
        "points": 200,
        "question": "ما اسم الشخصية الأسطورية التي قدمتها بيرين سات في 'العشق الممنوع' أمام كيفانش تاتليتوغ؟",
        "options": ["سمر (Bihter)", "نهال", "فيروزة", "لميس"],
        "correctAnswer": "سمر (Bihter)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "زوجة عدنان بيك التي وقعت في حب ابن أخيه مهند"
      },
      {
        "id": "tr_q1_021",
        "points": 200,
        "question": "ما المسلسل الذي يتناول حياة المراهقين والصراع الطبقي في مدرسة خاصة ومقتل الطالب 'إيكيم'؟",
        "options": ["اسمعني (Duy Beni)", "إخوتي", "الشباب", "ياقة الغبار"],
        "correctAnswer": "اسمعني (Duy Beni)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة رابيا سويتورك وكانان أورجانجي أوغلو"
      },
      {
        "id": "tr_q1_022",
        "points": 200,
        "question": "ما اسم الممثلة التي جسدت شخصية 'فريحة' في المسلسل الشهير 'أسميتها فريحة' مع شتاي أولسوي؟",
        "options": ["هازار أرجوتشلو", "هازل كايا", "توبا بويوكوستين", "فرح زينب"],
        "correctAnswer": "هازل كايا",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "ابنة البواب التي ادعت أنها غنية في الجامعة"
      },
      {
        "id": "tr_q1_023",
        "points": 200,
        "question": "ما المسلسل التشويقي الحالم الذي يتناول المحاكمة والقضاء وبطولة كان أورجانجي أوغلو وبينار دينيز؟",
        "options": ["القضاء (Yargı)", "محكوم", "الثقبة", "المدينة المفقودة"],
        "correctAnswer": "القضاء (Yargı)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات المدعي العام 'إيلغاز' والمحامية 'جيلين'"
      },
      {
        "id": "tr_q1_024",
        "points": 200,
        "question": "ما اسم المسلسل الذي جمع بين خالد أرغنش ومريم أوزرلي واستعرض صراعات الحرملك العثماني؟",
        "options": ["حريم السلطان", "أنت وطني", "السلطانة كوسيم", "ممالك النار"],
        "correctAnswer": "حريم السلطان",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "عرف عالمياً باسم Magnificent Century"
      },
      {
        "id": "tr_q1_025",
        "points": 200,
        "question": "ما المسلسل القصير الذي لعب فيه شتاي أولسوي دور شقيق أراس بولوت إينملي واللذين يعملان في الشرطة والمافيا دون معرفة بعضهما؟",
        "options": ["في الداخل (İçerde)", "الحفرة", "الاصطدام", "العميل"],
        "correctAnswer": "في الداخل (İçerde)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس عن فيلم The Departed بشخصيات صرب ومارت"
      },
      {
        "id": "tr_q1_026",
        "points": 200,
        "question": "ما اسم الشخصية الشهيرة التي لعبها النجم الممثل إنجين أكيوريك في مسلسل 'ابنة السفير'؟",
        "options": ["سنجار إيفو أوغلو", "عمر ديمير", "كريم إيلغاز", "طاهر بيك"],
        "correctAnswer": "سنجار إيفو أوغلو",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شاركته البطولة نسليهان أتاغول بدور ناره"
      },
      {
        "id": "tr_q1_027",
        "points": 200,
        "question": "ما المسلسل الذي أدى فيه الممثل بوراك أوزجيفيت دور 'بالي بيك' وخطف الأنظار قبل بطولاته المطلقة؟",
        "options": ["حريم السلطان", "طائر النمنمة", "حب أعمى", "أسرار صغيرة"],
        "correctAnswer": "حريم السلطان",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "قائد الفرسان وقائد الجيش العثماني في عهد سليمان"
      },
      {
        "id": "tr_q1_028",
        "points": 200,
        "question": "ما اسم المسلسل الذي قامت ببطولته إلتشين سانجو وباريش أردوتش بشخصيتي 'دفنة وعمر'؟",
        "options": ["حب للإيجار (Kiralık Aşk)", "مصادفة العشق", "اصطدام", "ماذا لو أحببت كثيراً"],
        "correctAnswer": "حب للإيجار (Kiralık Aşk)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "عرض على قناتين وحقق أرقام مشاهدات قياسية"
      },
      {
        "id": "tr_q1_029",
        "points": 200,
        "question": "ما المسلسل الاجتماعي الشهير الذي تتناول قصته معانات أربع فتيات يتيمات في ملجأ للأيتام؟",
        "options": ["الأزهار الحزينة (Kırgın Çiçekler)", "إخوتي", "بنات الشمس", "أمي"],
        "correctAnswer": "الأزهار الحزينة (Kırgın Çiçekler)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات قدر وإيلول وسونجول وميرال"
      },
      {
        "id": "tr_q1_030",
        "points": 200,
        "question": "ما المسلسل الدرامي الذي يعرض معانات الأم 'زينب' والطفلة اليتيمة 'ملَك' مع الممثلة جانسو ديري؟",
        "options": ["أمي (Anne)", "إيزيل", "خائنة", "شخصية"],
        "correctAnswer": "أمي (Anne)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس عن مسلسل ياباني شهير بنفس الاسم"
      },
      {
        "id": "tr_q1_031",
        "points": 200,
        "question": "ما اسم المسلسل الخيالي الإثاري الذي قامت ببطولته سيريناي ساريكايا وتشاركت بطولته مع بوراك دينيز حول أسطورة الأفاعي؟",
        "options": ["شاهماران (Şahmaran)", "عطايا", "المحافظ", "الساحرة"],
        "correctAnswer": "شاهماران (Şahmaran)",
        "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
        "hideImageUntilAnswer": true,
        "hint": "من إنتاج منصة نتفليكس الأصلي"
      },
      {
        "id": "tr_q1_032",
        "points": 200,
        "question": "ما اسم المسلسل الذي جسد فيه كيفانش تاتليتوغ دور الشاب 'سيد كورث' الضابط الروسي ذي الأصول التركية؟",
        "options": ["سعيد وشورى (Kurt Seyit ve Şura)", "جسور والجميلة", "العائلة", "الاصطدام"],
        "correctAnswer": "سعيد وشورى (Kurt Seyit ve Şura)",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شاركت في بطولته فرح زينب عبد الله بدور شورى"
      },
      {
        "id": "tr_q1_033",
        "points": 200,
        "question": "ما العمل الدرامي الذي قامت ببطولته جانسو ديري وسيركات توتولار وتناول الخيانة الزوجية والانتقام؟",
        "options": ["الخائن (Sadakatsiz)", "أمي", "إيزيل", "شخصية"],
        "correctAnswer": "الخائن (Sadakatsiz)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس من المسلسل البريطاني Doctor Foster"
      },
      {
        "id": "tr_q1_034",
        "points": 200,
        "question": "ما اسم المسلسل الناجح الذي جمع بين أوزجان دينيز وأسلي إنفر في قصة حب بمدينة بورصة؟",
        "options": ["عروس إسطنبول (Istanbullu Gelin)", "ورد وشوك", "لعبة القدر", "المحكوم"],
        "correctAnswer": "عروس إسطنبول (Istanbullu Gelin)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "قصة ثري العائلات فاروق والفتاة البسيطة ثريا"
      },
      {
        "id": "tr_q2_035",
        "points": 400,
        "question": "في مسلسل 'حلم أشرف' (Eşref Rüya)، ما هي الطبيعة الأساسية لشخصية 'أشرف تك' التي يجسدها شتاي أولسوي؟",
        "options": ["زعيم إمبراطورية عالم الجريمة", "ضابط شرطة متخفٍ", "طبيب نفساني معالج", "محامٍ شهير"],
        "correctAnswer": "زعيم إمبراطورية عالم الجريمة",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يدير منظمة غامضة ويحكم بالولاء والدم"
      },
      {
        "id": "tr_q2_036",
        "points": 400,
        "question": "ما الممثلة الشهيرة التي تؤدي دور 'تشيغدم' في مسلسل 'حلم أشرف' إلى جانب شتاي أولسوي؟",
        "options": ["بشرى ديفيلي (Büşra Develi)", "هاندا دوغان ديمير", "هازال فيليز", "سيركاي توتونجو"],
        "correctAnswer": "بشرى ديفيلي (Büşra Develi)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شاركت سابقاً في مسلسل 'في' ومسلسل 'الملك'"
      },
      {
        "id": "tr_q2_037",
        "points": 400,
        "question": "ما اسم المسلسل التاريخي الضخم الذي جسد فيه بوراك أوزجيفيت وفهرية أوجن قصة الحب المقتبسة عن رواية رشاد نوري؟",
        "options": ["طائر النمنمة (Çalıkuşu)", "عشق وجزاء", "حريم السلطان", "ليث ونورا"],
        "correctAnswer": "طائر النمنمة (Çalıkuşu)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "قصة فريدة كامران التي نشأت بينهما قصة حب حقيقية وزواج"
      },
      {
        "id": "tr_q2_038",
        "points": 400,
        "question": "ما المسلسل الشهير الذي خاض بطولته النجم إبراهيم تشيليكول بشخصية القاتل المأجور 'فرهات' وأسلي الطبيبة؟",
        "options": ["حب أبيض وأسود", "الرحمة", "قدري هو المنزل", "الاصطدام"],
        "correctAnswer": "حب أبيض وأسود",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شاركت البطولة بيرجي أكالاي بدور أسلي"
      },
      {
        "id": "tr_q2_039",
        "points": 400,
        "question": "ما اسم المسلسل التشويقي الذي تدور أحداثه حول الدكتور الطبيب المعالج النفسي 'أيدين' ومرضاه في مصحة نفسية؟",
        "options": ["الغرفة الحمراء", "شقة الأبرياء", "طبيب المدينة", "في"],
        "correctAnswer": "الغرفة الحمراء",
        "imageUrl": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة الممثلة بيننور كايا"
      },
      {
        "id": "tr_q2_040",
        "points": 400,
        "question": "ما اسم المسلسل الرومانسي الناجح للغاية الذي يروي قصة حب 'ميران وهزار' في مدينة مدياط التاريخية؟",
        "options": ["زهرة الثالوث (Hercai)", "اشرح أيها البحر الأسود", "ابنة السفير", "عروس إسطنبول"],
        "correctAnswer": "زهرة الثالوث (Hercai)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة أكين أكينوزو وإيبرو شاهين"
      },
      {
        "id": "tr_q2_041",
        "points": 400,
        "question": "ما المسلسل الاجتماعي الذي جسد فيه الممثل خالد أرغنش دور الأستاذ الجامعي 'عرفان' المحروم من عمله؟",
        "options": ["بابل (Babil)", "أنت وطني", "حريم السلطان", "ويبقى الحب"],
        "correctAnswer": "بابل (Babil)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يدور حول منظومة التسويق الهرمي لجمع أموال علاج ابنه"
      },
      {
        "id": "tr_q2_042",
        "points": 400,
        "question": "ما هو المسلسل الدرامي الذي يعرض قصة 'نالان' وصراعها النفسي بداخل قصر ثري مقتبس عن رواية واقعية؟",
        "options": ["فتاة النافذة (Camdaki Kız)", "شقة الأبرياء", "البيت المأهول", "المعلم"],
        "correctAnswer": "فتاة النافذة (Camdaki Kız)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة بورجو بيريجيك وفياض شريف أوغلو"
      },
      {
        "id": "tr_q2_043",
        "points": 400,
        "question": "ما المسلسل الذي تناول حكاية الشقيقتين 'صفية وغلبن' والوسواس القهري الشديد بالنظافة والتعقيم؟",
        "options": ["شقة الأبرياء (Masumlar Apartmanı)", "الغرفة الحمراء", "فتاة النافذة", "بيت أهلي"],
        "correctAnswer": "شقة الأبرياء (Masumlar Apartmanı)",
        "imageUrl": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة إزجي مولا وفرح زينب عبد الله وبيركان سوكولو"
      },
      {
        "id": "tr_q2_044",
        "points": 400,
        "question": "ما المسلسل الذي قام ببطولته كيفانش تاتليتوغ مع سيريناي ساريكايا بشخصيتي 'اصلان ومارين'؟",
        "options": ["العائلة (Aile)", "الاصطدام", "جسور والجميلة", "سعيد وشورى"],
        "correctAnswer": "العائلة (Aile)",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يدور حول عائلة سويكان ذات الماضي المظلم مع المافيا"
      },
      {
        "id": "tr_q2_045",
        "points": 400,
        "question": "ما هو العمل الذي جسد فيه إنجين أكيوريك شخصية المفتش 'عمر ديمير' أمام توبا بويوكوستين؟",
        "options": ["العشق الأسود (Kara Para Aşk)", "ابنة السفير", "حتى الممات", "فاطمة جول"],
        "correctAnswer": "العشق الأسود (Kara Para Aşk)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يدور حول جريمة قتل تجمع ضابط شرطة ومصممة مجوهرات"
      },
      {
        "id": "tr_q2_046",
        "points": 400,
        "question": "ما اسم الفيلم التركي الشهير الذي ترشح للأوسكار وتناول قصة ضابط تركي ورعايته لطفلة كورية يتيمة؟",
        "options": ["أيلا: ابنة الحرب (Ayla)", "معجزة 7", "بيرجين", "مسلم"],
        "correctAnswer": "أيلا: ابنة الحرب (Ayla)",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة إسماعيل حجي أوغلو بدور سليمان الشاب"
      },
      {
        "id": "tr_q2_047",
        "points": 400,
        "question": "ما المسلسل الذي يعرض كفاح 'طاهر ونفس' ضد الظلم الأسري بداخل قرى الشمال التركي والبحر الأسود؟",
        "options": ["اشرح أيها البحر الأسود", "زهرة الثالوث", "المدينة البعيدة", "ابنة السفير"],
        "correctAnswer": "اشرح أيها البحر الأسود",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة إيرام هيلفاجي أوغلو وأولاش تونا أستبه"
      },
      {
        "id": "tr_q2_048",
        "points": 400,
        "question": "ما العمل الدرامي السياسي الذي يتناول جهاز الاستخبارات الوطنية التركي (MİT) وفريق 'عمر أتمان'؟",
        "options": ["المنظمة (Teşkilat)", "العهد", "المحارب", "وادي الذئاب"],
        "correctAnswer": "المنظمة (Teşkilat)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة تشاغلا أرتوغرول ودينيز بايسال ومراد أونالميش"
      },
      {
        "id": "tr_q2_049",
        "points": 400,
        "question": "ما اسم الفيلم المؤثر الذي أبدع فيه أراس بولوت إينملي بدور الأب المتخلف عقلياً 'مِمو' وبنته أوفا؟",
        "options": ["معجزة في الزنزانة رقم 7", "هل نحن بخير", "زهرة الغاب", "أمي"],
        "correctAnswer": "معجزة في الزنزانة رقم 7",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس من فيلم كوري وحقق أعلى إيرادات سينمائية"
      },
      {
        "id": "tr_q2_050",
        "points": 400,
        "question": "ما اسم المسلسل الضخم الذي يتناول قصة السلطان 'عبد الحميد الثاني' وتأسيس خط السكة الحديدية وتصدي التجسس؟",
        "options": ["عاصمة عبد الحميد", "سلطان الفتوحات", "المؤسس عثمان", "كوت العمارة"],
        "correctAnswer": "عاصمة عبد الحميد",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة الممثل بولنت إينال"
      },
      {
        "id": "tr_q2_051",
        "points": 400,
        "question": "ما المسلسل الذي قامت ببطولته الممثلة أصليهان جربوز وتدور أحداثه حول أربع صديقات وجرائم قتل غامضة بينهن؟",
        "options": ["جرائم صغيرة (Ufak Tefek Cinayetler)", "نساء حائرات", "التفاح الحرام", "الخائن"],
        "correctAnswer": "جرائم صغيرة (Ufak Tefek Cinayetler)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات أوييا ومروة وبادئة وبيلين"
      },
      {
        "id": "tr_q2_052",
        "points": 400,
        "question": "ما المسلسل الشهير الذي خاض ببطولته الممثل أقطاي كينارجا شخصية 'هضر تشاكر بيلي' لستة مواسم متتالية؟",
        "options": ["قطاع الطرق لن يحكموا العالم", "وادي الذئاب", "القبضاي", "الحفرة"],
        "correctAnswer": "قطاع الطرق لن يحكموا العالم",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يتناول صراع عائلات السلاح والمافيا"
      },
      {
        "id": "tr_q2_053",
        "points": 400,
        "question": "ما اسم مسلسل الموضة والترزي الشهير على منصة نتفليكس والذي يتناول قصة الترزي 'بيامي'؟",
        "options": ["الخياط (Terzi)", "المحافظ", "في الداخل", "شخص آخر"],
        "correctAnswer": "الخياط (Terzi)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة شتاي أولسوي وصالح باديمجي"
      },
      {
        "id": "tr_q2_054",
        "points": 400,
        "question": "ما اسم الفيلم الدرامي السيري الذي يروي حكاية المطربة الشهيرة الملقبة بـ 'امرأة الأحزان'؟",
        "options": ["بيرجين (Bergen)", "مسلم", "نعيم", "همس لو أنسيت"],
        "correctAnswer": "بيرجين (Bergen)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "جسدت دور البطولة الممثلة فرح زينب عبد الله"
      },
      {
        "id": "tr_q2_055",
        "points": 400,
        "question": "ما اسم المسلسل الذي قامت فيه شوال سام وتالات بولوت وإدا إيجي ببطولة صراع الثراء والنفوذ بالشركة؟",
        "options": ["التفاح الحرام (Yasak Elma)", "فضيلة وبناتها", "جرائم صغيرة", "نساء حائرات"],
        "correctAnswer": "التفاح الحرام (Yasak Elma)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات أندر ويلدز وشاهقة"
      },
      {
        "id": "tr_q2_056",
        "points": 400,
        "question": "ما المسلسل الملحمي الذي يروي صراع الشقيقين 'بربروس' وسيادتهما على البحار في العهد العثماني؟",
        "options": ["بربروسا: سيف البحر المتوسط", "نهضة السلاجقة", "سلطان الفتوحات", "الفاتح"],
        "correctAnswer": "بربروسا: سيف البحر المتوسط",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة إنجين ألتان دوزياتان وأولغون سيمسيك"
      },
      {
        "id": "tr_q2_057",
        "points": 400,
        "question": "ما العمل الرومانسي الدرامي الذي خاض بطولته الممثل شتاي أولسوي مع سيريناي ساريكايا بشخصيتي 'يامان وميرا'؟",
        "options": ["مد جزر (Medcezir)", "في الداخل", "أسميتها فريحة", "المحافظ"],
        "correctAnswer": "مد جزر (Medcezir)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس عن المسلسل الأمريكي الشهير The O.C."
      },
      {
        "id": "tr_q2_058",
        "points": 400,
        "question": "ما المسلسل الذي يجسد صراع أربعة إخوة (قدير وعمر وأسية وأمل) بعد مقتل والديهم في نفس اليوم؟",
        "options": ["إخوتي (Kardeşlerim)", "طيور النار", "الأزهار الحزينة", "المتشردون"],
        "correctAnswer": "إخوتي (Kardeşlerim)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "حقق نسبة مشاهدة عالية بين فئات الشباب"
      },
      {
        "id": "tr_q2_059",
        "points": 400,
        "question": "ما المسلسل الرومانسي الذي جمع بين إلكر كاليلي وبورتشين تيرزي أوغلو بشخصيتي 'بويراز وعايشة جول'؟",
        "options": ["بويراز كاراييل", "في الداخل", "القبضاي", "الرحمة"],
        "correctAnswer": "بويراز كاراييل",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "اشتهر بالأقتباسات الفلسفية والموسيقى التصويرية المميزة"
      },
      {
        "id": "tr_q2_060",
        "points": 400,
        "question": "ما العمل الدرامي الذي قامت ببطولته نازان كيصال مع تشاغلار أرطغرل وألب نافروز حول كفاح أم لتزويج ابنتيها؟",
        "options": ["فضيلة وبناتها", "بنات الشمس", "الأوراق المتساقطة", "عشق وجزاء"],
        "correctAnswer": "فضيلة وبناتها",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات هازان وإيجين وياغيز وسنان"
      },
      {
        "id": "tr_q2_061",
        "points": 400,
        "question": "ما اسم المسلسل النفسي والغموض الخيالي القصير من بطولة بيرين سات حول أسرار معبد 'جوبكلي تبه'؟",
        "options": ["عطايا (Atiye)", "المحافظ", "شاهماران", "الساحرة"],
        "correctAnswer": "عطايا (Atiye)",
        "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
        "hideImageUntilAnswer": true,
        "hint": "من إنتاج نتفليكس وبطولة إيركان كولتشاك ومحمد جونسور"
      },
      {
        "id": "tr_q2_062",
        "points": 400,
        "question": "ما المسلسل الدرامي الذي يعرض الصراع الاجتماعي والديني حول 'البراعم الحمراء' وتؤدي بطولته أوزغي أوزبيرينتشجي و أوزجان دينيز؟",
        "options": ["البراعم الحمراء (Kızıl Goncalar)", "شراب التوت", "عمر", "طائر الرفراف"],
        "correctAnswer": "البراعم الحمراء (Kızıl Goncalar)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات مريم والدكتور ليفينت وميرا ورايم"
      },
      {
        "id": "tr_q2_063",
        "points": 400,
        "question": "ما العمل الذي قامت ببطولته هاندة أرتشيل وبوراك دينيز حول مذيع يملك شخصيتين مزدوجتين ورئيسة مدعين عامين؟",
        "options": ["شخص آخر (Bambaşka Biri)", "الحب لا يفهم الكلام", "بنات الشمس", "القضاء"],
        "correctAnswer": "شخص آخر (Bambaşka Biri)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات كينان ودوغان والمدعية ليلى"
      },
      {
        "id": "tr_q2_064",
        "points": 400,
        "question": "ما المسلسل الذي جمع بين خالد أرغنش وبرغوزار كوريل وحكاية الضابط 'جودت' وزوجته 'عزيزة' في حرب الاستقلال؟",
        "options": ["أنت وطني (Vatanım Sensin)", "حريم السلطان", "ويبقى الحب", "بابل"],
        "correctAnswer": "أنت وطني (Vatanım Sensin)",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يتناول الاحتلال اليوناني لإزمير وكفاح المقاومة"
      },
      {
        "id": "tr_q2_065",
        "points": 400,
        "question": "ما اسم الفيلم الدرامي السيري الذي يجسد حياة أسطورة الأرابيسك 'مسلم جورسيس' وكفاحه الفني؟",
        "options": ["مُسلم (Müslüm)", "بيرجين", "نعيم", "أحمد كايا"],
        "correctAnswer": "مُسلم (Müslüm)",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "أدى دوره الممثل تيموتشين إيسن وغنى الأغاني بصوته"
      },
      {
        "id": "tr_q2_066",
        "points": 400,
        "question": "ما المسلسل الذي جمع بين النجم بوراك أوزجيفيت وكرم بورسين في عمل حربي يدور حول مكافحة الإرهاب؟",
        "options": ["فداء الوطن (Can Feda)", "المحارب", "العهد", "المنظمة"],
        "correctAnswer": "فداء الوطن (Can Feda)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "فيلم حربي سينمائي استعرض بطولة الجيش والملازم أبارسلان"
      },
      {
        "id": "tr_q3_067",
        "points": 600,
        "question": "ما هو اسم الشخصية التي يؤديها الممثل القدير نجيب ميميلي في مسلسل 'حلم أشرف' (Eşref Rüya)؟",
        "options": ["غوردال بوزوك", "إرمك بوزوك", "مُسلم جيرميك", "عزمي تك"],
        "correctAnswer": "غوردال بوزوك",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "أحد رجالات الصراع والنفوذ في المسلسل"
      },
      {
        "id": "tr_q3_068",
        "points": 600,
        "question": "ما هي الشخصية التي تؤديها الممثلة سيرين بينديرلي أوغلو في مسلسل 'حلم أشرف'؟",
        "options": ["إرمك بوزوك (Irmak Bozok)", "نيسان أكيول", "تشيغدم سريم", "ملك كوتشوفالي"],
        "correctAnswer": "إرمك بوزوك (Irmak Bozok)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "اشتهرت سابقاً ببطولتها في مسلسل قطاع الطرق"
      },
      {
        "id": "tr_q3_069",
        "points": 600,
        "question": "ما المسلسل الفلسفي الجريء الذي لعب فيه خلوق بيلغينار دور 'أغاه بيوغلو' ونال عنه جائزة إيمي الدولية كأفضل ممثل؟",
        "options": ["شخصية (Şahsiyet)", "ايزيل", "القبضاي", "الحفرة"],
        "correctAnswer": "شخصية (Şahsiyet)",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يدور حول موظف محكمة متقاعد يصاب بالزهايمر فيقرر إقامة العدالة بيديه"
      },
      {
        "id": "tr_q3_070",
        "points": 600,
        "question": "ما المسلسل التاريخي الذي تناول رحلة الشاعر والمفكر الصوفي 'يونس أمره' مع شيخه طَپتُق إمري؟",
        "options": ["يونس أمره: رحلة العشق", "جلال الدين الرومي", "حاجي بيرم ولي", "مولانا"],
        "correctAnswer": "يونس أمره: رحلة العشق",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "من إنتاج قناة TRT1 وبطولة يوسف خوكا أوغلو"
      },
      {
        "id": "tr_q3_071",
        "points": 600,
        "question": "ما الفيلم السينمائي المقتبس عن أحداث حقيقية والذي يروي حكاية الحصان الأسطوري 'بولد بيلوت' والفارس هاليس كاراتاش؟",
        "options": ["بطل من أجلنا (Bizim İçin Şampiyon)", "سليمان العظيم", "شامبيون", "الترك العظيم"],
        "correctAnswer": "بطل من أجلنا (Bizim İçin Şampiyon)",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة إيكين كوتش وفرح زينب عبد الله"
      },
      {
        "id": "tr_q3_072",
        "points": 600,
        "question": "ما اسم المسلسل الحقبي القصير لنتفليكس الذي جسدت فيه غوكشتشي بهادر دور 'ماتيلدا' في ملهى ليلي بإسطنبول في الخمسينيات؟",
        "options": ["الملهى (Kulüp)", "فاطمة", "محكومة", "منتصف الليل في بيرا بالاس"],
        "correctAnswer": "الملهى (Kulüp)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "تناول حياة اليهود والسفريين بإسطنبول وصراعات تلك الفتـرة"
      },
      {
        "id": "tr_q3_073",
        "points": 600,
        "question": "ما المسلسل الذي استعرض تاريخ قصر 'بيرا بالاس' والسفر عبر الزمن إلى عام 1917 لإنقاذ مصطفى كمال أتاتورك؟",
        "options": ["منتصف الليل في بيرا بالاس", "الملهى", "أنت وطني", "عاصمة عبد الحميد"],
        "correctAnswer": "منتصف الليل في بيرا بالاس",
        "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة هازال كايا بدور الصحفية إسراء"
      },
      {
        "id": "tr_q3_074",
        "points": 600,
        "question": "ما اسم الممثل الذي قدم شخصية 'علي رضا جابان' الميكانيكي الظالم في مسلسل 'دموع الورد'؟",
        "options": ["كينان إميرزالي أوغلو", "باشاك داغمان", "إيبرك بيكجان", "ساروهان هيلنيل"],
        "correctAnswer": "كينان إميرزالي أوغلو",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "عرف المسلسل بالوطن العربي باسم عمار كوسوفي"
      },
      {
        "id": "tr_q3_075",
        "points": 600,
        "question": "ما اسم فيلم السيرة الذاتية الشهير الذي يروي حكاية الرباع الأسطوري التركي 'نعيم سليمان أوغلو' الملقب بحرقل المصغر؟",
        "options": ["جيب هيركولي: نعيم سليمان أوغلو", "مسلم", "بيرجين", "بطلنا"],
        "correctAnswer": "جيب هيركولي: نعيم سليمان أوغلو",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "جسد بطولته الممثل الموهوب خايات فان إيك"
      },
      {
        "id": "tr_q3_076",
        "points": 600,
        "question": "ما اسم المسلسل الذي خاض بطولته كينان إميرزالي أوغلو وبيرغوزار كوريل وتدور أحداثه بالسبعينيات حول محاولات إنقاذ والد 'ماهر كارا' من الإعدام؟",
        "options": ["القبضاي (Karadayı)", "ايزيل", "دموع الورد", "الذئب"],
        "correctAnswer": "القبضاي (Karadayı)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات القاضية فريدة وصانع الأحذية ماهر كارا"
      },
      {
        "id": "tr_q3_077",
        "points": 600,
        "question": "ما اسم المسلسل النادر الذي أخرجه أونور ألاپ وقامت ببطولته بورجو بيريجيك بدور امرأة تنظف مسرح الجريمة لتغطية مقتل زوجها؟",
        "options": ["فاطمة (Fatma)", "الخياط", "شخصية", "الغرفة الحمراء"],
        "correctAnswer": "فاطمة (Fatma)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مسلسل إثارة قصير من إنتاج نتفليكس"
      },
      {
        "id": "tr_q3_078",
        "points": 600,
        "question": "ما اسم المسلسل الذي قامت ببطولته إلتشين سانجو مع كيفانش تاتليتوغ وتبدأ أحداثه بحادث تصادم أربع سيارات بنفس اللحظة؟",
        "options": ["الاصطدام (Çarpışma)", "جسور والجميلة", "العائلة", "حب للإيجار"],
        "correctAnswer": "الاصطدام (Çarpışma)",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات قدير وزينب وكرم وجيمري"
      },
      {
        "id": "tr_q3_079",
        "points": 600,
        "question": "ما العمل الذي تناول قصة حياة السفير 'عمر فاروق' والحب المعقد بمدينة موغلا مع أونور تونا؟",
        "options": ["شجرة الزيتون / الذات أصلها (Zeytin Ağacı)", "عروس إسطنبول", "ابنة السفير", "قدري هو المنزل"],
        "correctAnswer": "شجرة الزيتون / الذات أصلها (Zeytin Ağacı)",
        "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة طوبا بويوكوستين وس Seda Bakan حول الشفاء العائلي والعلاج بالتأمل"
      },
      {
        "id": "tr_q3_080",
        "points": 600,
        "question": "ما المسلسل التاريخي الضخم الذي تناول معركة 'كوت العمارة' الخالدة وانتصار العثمانيين على الجيش البريطاني؟",
        "options": ["كوت العمارة (Kütül Amare)", "نهضة السلاجقة", "ممالك النار", "الفاتح"],
        "correctAnswer": "كوت العمارة (Kütül Amare)",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "من إنتاج المخرج محمد بوزداغ وبطولة إسماعيل حجي أوغلو"
      },
      {
        "id": "tr_q3_081",
        "points": 600,
        "question": "ما اسم المسلسل الذي يتناول عالم الإعلانات وقصة الشاب 'علي' الملاكم الشاب العائد إلى إسطنبول؟",
        "options": ["هذه المدينة ستلاحقك (Bu Şehir Arkandan Gelecek)", "مسألة شرف", "شرف ضائع", "ماذا لو أحببت كثيراً"],
        "correctAnswer": "هذه المدينة ستلاحقك (Bu Şehir Arkandan Gelecek)",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة كرم بورسين و ليلى ليديا توغوتلو"
      },
      {
        "id": "tr_q3_082",
        "points": 600,
        "question": "ما اسم الفيلم التركي الرومانسي الأسطوري الذي أخرجه ألاپ أوراس وبطولة شتاي أولسوي وليلى ليديا بدور 'بارش وأفسون'؟",
        "options": ["زهرة الغاب (Delibal)", "قصة حب واحدة", "هل نحن بخير", "مصادفة العشق"],
        "correctAnswer": "زهرة الغاب (Delibal)",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يحكي قصة طالب الهندسة الموسيقي المصاب باضطراب ثنائي القطب"
      },
      {
        "id": "tr_q3_083",
        "points": 600,
        "question": "ما اسم العمل الذي جسد فيه بوراك دينيز شخصية 'مراد سارسيلماز' صاحب شركة الأزياء الكبرى؟",
        "options": ["الحب لا يفهم الكلام", "شخص آخر", "مرعشلي", "بنات الشمس"],
        "correctAnswer": "الحب لا يفهم الكلام",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "وقعت في حبه هاندة أرتشيل بدور حياة المتنكرة"
      },
      {
        "id": "tr_q3_084",
        "points": 600,
        "question": "ما المسلسل الإثم الإثاري الذي قامت ببطولته أوزغي أوزبيرينتشجي بدور 'بهار' الأم الفقيرة المقاتلة لتربية ابنيها نيسان ودوروك؟",
        "options": ["امتداد الحياة / امرأة (Kadın)", "أمي", "الرحمة", "قدري هو المنزل"],
        "correctAnswer": "امتداد الحياة / امرأة (Kadın)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس عن مسلسل ياباني وعرض لثلاثة مواسم"
      },
      {
        "id": "tr_q3_085",
        "points": 600,
        "question": "ما المسلسل التاريخي الذي يعرض تأسيس الدولة السلجوقية وصراع السلطان 'ملك شاه' وابنه 'أحمد سنجر' ضد الباطنية؟",
        "options": ["نهضة السلاجقة العظام (Uyanış: Büyük Selçuklu)", "ألب أرسلان", "جلال الدين", "سلطان الفتوحات"],
        "correctAnswer": "نهضة السلاجقة العظام (Uyanış: Büyük Selçuklu)",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة بوراك سيرجين وإيكين كوتش وبغرا جولسوي"
      },
      {
        "id": "tr_q3_086",
        "points": 600,
        "question": "ما اسم المسلسل الذي شارك ببطولته بوراك دينيز مع ألينا بوز بدور الحارس الشخصي السري والضابط المتقاعد؟",
        "options": ["مرعشلي (Maraşlı)", "شخص آخر", "العهد", "المنظمة"],
        "correctAnswer": "مرعشلي (Maraşlı)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "حماية المصورة الفوتوغرافية ماهور"
      },
      {
        "id": "tr_q3_087",
        "points": 600,
        "question": "ما العمل الدرامي الذي قامت ببطولته ديميت أوزديمير وإبراهيم تشيليكول المقتبس عن كتاب 'الفتاة في النافذة' للطبيبة جولسيران؟",
        "options": ["منزلي / قدري هو المنزل الذي ولدت فيه", "فتاة النافذة", "شقة الأبرياء", "الغرفة الحمراء"],
        "correctAnswer": "منزلي / قدري هو المنزل الذي ولدت فيه",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات زينب ومهدي والصراع الطبقي العائلي"
      },
      {
        "id": "tr_q3_088",
        "points": 600,
        "question": "ما اسم المسلسل الاجتماعي القصير لنتفليكس من بطولة أونور ألاپ وبطولة أوزغي أوزبيرينتشجي وبوران كوزوم حول زواج زائف وخسارة؟",
        "options": ["أول وأخير (İlk ve Son)", "الخياط", "شجرة الزيتون", "الملهى"],
        "correctAnswer": "أول وأخير (İlk ve Son)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يعرض العلاقة بين دينيز وباريش على مدار 10 سنوات"
      },
      {
        "id": "tr_q3_089",
        "points": 600,
        "question": "ما العمل الدرامي السياسي الإثاري القصير الذي تناول تاريخ المواجهات العسكرية لفرقة العمليات الخاصة 'BÖRK'؟",
        "options": ["الذئب (Börü)", "العهد", "المحارب", "المنظمة"],
        "correctAnswer": "الذئب (Börü)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يتكون من 6 حلقات فقط وفيلم سينمائي ختامي"
      },
      {
        "id": "tr_q3_090",
        "points": 600,
        "question": "ما العمل الخيالي الذي أدى فيه شتاي أولسوي دور الشاب 'هاكان' الحارس الأخير لإسطنبول حاملاً القميص الطلسمي؟",
        "options": ["المحافظ (Hakan: Muhafız)", "عطايا", "شاهماران", "في الداخل"],
        "correctAnswer": "المحافظ (Hakan: Muhafız)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "أول مسلسل إنتاج تركي أصلي لمنصة نتفليكس العالمية"
      },
      {
        "id": "tr_q3_091",
        "points": 600,
        "question": "ما اسم المسلسل الذي جسد فيه الممثل كرم بورسين شخصية الملاكم الشاب 'علي سميث' الذي ترعرع على السفن؟",
        "options": ["هذه المدينة ستلاحقك", "مسألة شرف", "أنت أطرق بابي", "ماذا لو أحببت كثيراً"],
        "correctAnswer": "هذه المدينة ستلاحقك",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شاركته البطولة ليلى ليديا توغوتلو بدور درين"
      },
      {
        "id": "tr_q3_092",
        "points": 600,
        "question": "ما اسم فيلم الأنيميشن والسينما التركية الشهير المقتبس عن ملحمة 'شاه جيهان' وتاريخ العمارة العثمانية؟",
        "options": ["عظماء الأناضول", "سليمان وقدره", "حريم الفن", "مباني إسطنبول"],
        "correctAnswer": "عظماء الأناضول",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "عمل وثائقي وسينمائي ضخم استعرض التاريخ المعماري"
      },
      {
        "id": "tr_q3_093",
        "points": 600,
        "question": "ما المسلسل النفسي والاجتماعي الذي يجمع بين الممثل أونور تونا وسيمغي سلجوق ويدور بداخل أروقة المستشفيات والطب الشرعي؟",
        "options": ["طبيب المدينة (Kasaba Doktoru)", "نبضات قلب", "الطبيب المعجزة", "الرحمة"],
        "correctAnswer": "طبيب المدينة (Kasaba Doktoru)",
        "imageUrl": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصية الدكتور كمال والعيادة الجراحية بالقرية"
      },
      {
        "id": "tr_q3_094",
        "points": 600,
        "question": "ما المسلسل المقتبس عن المسلسل الأمريكي 'Prison Break' وقام ببطولته أراس بولوت إينملي ببدلة الملازم المحكوم عليه غدراً؟",
        "options": ["محكوم (Mahkum)", "في الداخل", "الاصطدام", "سقوط القناع"],
        "correctAnswer": "محكوم (Mahkum)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة أونور تونا وإسماعيل حجي أوغلو بدور التوأم باريش وسافاش"
      },
      {
        "id": "tr_q3_095",
        "points": 600,
        "question": "ما المسلسل الرومانسي الناجح الذي جمع بين الشابين 'دوجان وسينام' في قصة حب خيالية عائلية بمدينة إزمير؟",
        "options": ["عائلتي الجملية", "بنات الشمس", "نجم الشمال", "العريس الرائع"],
        "correctAnswer": "بنات الشمس",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "برز فيه النجوم إمري كينكاي وهاندة أرتشيل وتولغا ساريتش"
      },
      {
        "id": "tr_q3_096",
        "points": 600,
        "question": "ما اسم المسلسل القصير الذي يروي قصة حب حقيقية بين الشاعرين الشابين 'مظفر طيب أوسلوك' و'رشتو أونور' زمن الحرب؟",
        "options": ["حلم الفراشة (Kelebeğin Rüyası)", "همس لو أنسيت", "زهرة الغاب", "قصة حب"],
        "correctAnswer": "حلم الفراشة (Kelebeğin Rüyası)",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "فيلم سينمائي من إخراج يلماز أردوغان وبطولة كيفانش تاتليتوغ وميرت فرات"
      },
      {
        "id": "tr_q3_097",
        "points": 600,
        "question": "ما المسلسل الذي تناول حكاية 'عايشة جول' وبويراز وصراعهما ضد والدها زعيم المافيا 'بحري عمان'؟",
        "options": ["بويراز كاراييل", "القبضاي", "في الداخل", "قطاع الطرق"],
        "correctAnswer": "بويراز كاراييل",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "قام ببطولته إلكر كاليلي وبورتشين تيرزي أوغلو"
      },
      {
        "id": "tr_q3_098",
        "points": 600,
        "question": "ما العمل الدرامي الذي قامت ببطولته هاندة دوغان ديمير وكرم بورسين وتناول عالم المدرسة الثانوية والأسرار؟",
        "options": ["عندما تبتسم الشمس / بانتظار الشمس (Güneşi Beklerken)", "بنات الشمس", "اسمعني", "ياقة الغبار"],
        "correctAnswer": "عندما تبتسم الشمس / بانتظار الشمس (Güneşi Beklerken)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات كرم سايار زينب يلماز"
      },
      {
        "id": "tr_q3_099",
        "points": 600,
        "question": "ما العمل الذي قامت ببطولته الممثلة القديرة أوزغي أوزبيرينتشجي وبغرا جولسوي بدور 'زينب وفاتح' اللذين التقيا بالطائرة؟",
        "options": ["العشق مجدداً (Aşk Yeniden)", "قدري هو المنزل", "الرحمة", "حلو ومر"],
        "correctAnswer": "العشق مجدداً (Aşk Yeniden)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مسلسل كوميدي رومانسي حول الادعاء بالزواج أمام العائلة"
      },
      {
        "id": "tr_q3_100",
        "points": 600,
        "question": "ما اسم المسلسل الذي خاضت ببطولته بيرين سات دور 'السلطانة كوسيم' في الجزء الأول من السلسلة العثمانية؟",
        "options": ["السلطانة كوسيم (Muhteşem Yüzyıl: Kösem)", "حريم السلطان", "عاصمة عبد الحميد", "قيامة أرطغرل"],
        "correctAnswer": "السلطانة كوسيم (Muhteşem Yüzyıl: Kösem)",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "استكمال لسلسلة القرن العظيم وحكم السلطان أحمد الأول"
      },
      {
        "id": "tr_q1_101",
        "points": 200,
        "question": "ما اسم القناة أو المنصة العربية الشهيرة التي قامت بعرض مسلسل 'حلم أشرف' (Eşref Rüya)؟",
        "options": ["شاهد (Shahid)", "OSN", "تلفزيون دبي", "روتانا دراما"],
        "correctAnswer": "شاهد (Shahid)",
        "imageUrl": "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800",
        "hideImageUntilAnswer": true,
        "hint": "المنصة التابعة لمجموعة MBC"
      },
      {
        "id": "tr_q1_102",
        "points": 200,
        "question": "ما هي مهنة الممثلة ديميت أوزديمير (نيسان في مسلسل حلم أشرف) قبل اتجاهها للتمثيل؟",
        "options": ["راقصة استعراضية", "طبيبة أطفال", "مهندسة ديكور", "مضيفة طيران"],
        "correctAnswer": "راقصة استعراضية",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "ظهرت في العديد من الكليبات الغنائية والفرق الاستعراضية"
      },
      {
        "id": "tr_q1_103",
        "points": 200,
        "question": "ما اسم المسلسل الشبابي الذي حقق شهرة واسعة ولعبت فيه هاندة أرتشيل دور 'سلين'؟",
        "options": ["بنات الشمس (Güneşin Kızları)", "أنت أطرق بابي", "الحب لا يفهم الكلام", "اللؤلؤة السوداء"],
        "correctAnswer": "بنات الشمس (Güneşin Kızları)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شاركها البطولة تولغا ساريتش بدور علي"
      },
      {
        "id": "tr_q1_104",
        "points": 200,
        "question": "ما المسلسل التاريخي الشهير الذي يروي قصة فتح القسطنطينية على يد السلطان محمد الفاتح؟",
        "options": ["الفاتح (Mehmed: Bir Cihan Fatihi)", "حريم السلطان", "المؤسس عثمان", "نهضة السلاجقة"],
        "correctAnswer": "الفاتح (Mehmed: Bir Cihan Fatihi)",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة الممثل كينان إميرزالي أوغلو"
      },
      {
        "id": "tr_q1_105",
        "points": 200,
        "question": "ما اسم المسلسل الذي جسد فيه الممثل أراس بولوت إينملي شخصية 'ياماش'؟",
        "options": ["الحفرة (Çukur)", "في الداخل", "الاصطدام", "العبقري"],
        "correctAnswer": "الحفرة (Çukur)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "حاكم الحي ورمز الحفرة الشهير"
      },
      {
        "id": "tr_q1_106",
        "points": 200,
        "question": "ما المسلسل الرومانسي الشهير الذي جمع بين الممثلة نسليهان أتاغول وقادير دوغولو وأدى لزواجهما؟",
        "options": ["أسرار البنات / أسرار صغيرة", "عشق شبيه بك", "حب أعمى", "بين نارين (Fatih Harbiye)"],
        "correctAnswer": "بين نارين (Fatih Harbiye)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس عن رواية تحمل نفس الاسم للمؤلف بيلامي صفا"
      },
      {
        "id": "tr_q1_107",
        "points": 200,
        "question": "ما الممثل الذي لعب دور البطل الملاكم 'علي' في مسلسل 'هذه المدينة ستلاحقك'؟",
        "options": ["كرم بورسين", "شتاي أولسوي", "كيفانش تاتليتوغ", "إبراهيم تشيليكول"],
        "correctAnswer": "كرم بورسين",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطل مسلسل 'أنت أطرق بابي'"
      },
      {
        "id": "tr_q1_108",
        "points": 200,
        "question": "ما المسلسل الذي اشتهر بشخصية الطفل الرائع 'عثمان' وصراعات عائلة علي رضا؟",
        "options": ["على مر الزمان (Öyle Bir Geçer Zaman ki)", "الأوراق المتساقطة", "الأزهار الحزينة", "إخوتي"],
        "correctAnswer": "على مر الزمان (Öyle Bir Geçer Zaman ki)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات القبطان علي وجميلة ومجد وإيلين"
      },
      {
        "id": "tr_q1_109",
        "points": 200,
        "question": "ما اسم المسلسل الذي قامت ببطولته توبا بويوكوستين مع بولنت إينال وجسدت شخصية 'لميس'؟",
        "options": ["سنوات الضياع (Ihlamurlar Altında)", "عاصي", "بائعة الورد", "جسور والجميلة"],
        "correctAnswer": "سنوات الضياع (Ihlamurlar Altında)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "قصة يحيى ولميس الشهيرة"
      },
      {
        "id": "tr_q1_110",
        "points": 200,
        "question": "ما العمل الدرامي الكوميدي الذي جمع بين بوراك أوزجيفيت وإيلين سوك أوجلو في بداياتهما؟",
        "options": ["أسرار صغيرة (Küçük Sırlar)", "حب أعمى", "طائر النمنمة", "المؤسس عثمان"],
        "correctAnswer": "أسرار صغيرة (Küçük Sırlar)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس عن المسلسل الأمريكي الشهير Gossip Girl"
      },
      {
        "id": "tr_q1_111",
        "points": 200,
        "question": "ما اسم المسلسل الذي خاضت فيه ديميت أوزديمير تجربة الدراما الحزينة بجانب إبراهيم تشيليكول؟",
        "options": ["قدرك هو المنزل الذي ولدت فيه", "الطائر المبكر", "رائحة التوت", "تكتيكات الحب"],
        "correctAnswer": "قدرك هو المنزل الذي ولدت فيه",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "تؤدي فيه شخصية 'زينب'"
      },
      {
        "id": "tr_q1_112",
        "points": 200,
        "question": "ما اسم الفنان التركي القدير الذي أدى دور 'السلطان عبد الحميد الثاني' في مسلسل 'عاصمة عبد الحميد'؟",
        "options": ["بولنت إينال", "خالد أرغنش", "كينان إميرزالي أوغلو", "نجيب ميميلي"],
        "correctAnswer": "بولنت إينال",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطل مسلسل سنوات الضياع سابقاً"
      },
      {
        "id": "tr_q1_113",
        "points": 200,
        "question": "ما اسم المسلسل الذي قامت ببطولته الممثلة مريم أوزرلي بعد نيلها الشهرة في حريم السلطان؟",
        "options": ["ملكة الليل (Gecenin Kraliçesi)", "عطر الأمس", "السلطانة كوسيم", "جروح القلب"],
        "correctAnswer": "ملكة الليل (Gecenin Kraliçesi)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شاركت البطولة مع مراد يلدريم"
      },
      {
        "id": "tr_q1_114",
        "points": 200,
        "question": "ما المسلسل الإثاري المافياوي الذي جمع بين تولغا ساريتش وآيتشا آيشين توران بشخصية 'علي رضا'؟",
        "options": ["علي رضا / أريزا (Arıza)", "العهد", "المنظمة", "الحفرة"],
        "correctAnswer": "علي رضا / أريزا (Arıza)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يدور حول سائق تاكسي يدخل عالم المافيا للانتقام لأخته"
      },
      {
        "id": "tr_q1_115",
        "points": 200,
        "question": "ما الممثل الذي يجسد دور البطولة بشخصية العبقري الرياضي 'ديفريم' في مسلسل 'العبقري' (Deha)؟",
        "options": ["أراس بولوت إينملي", "شتاي أولسوي", "تولغا ساريتش", "أولاش تونا"],
        "correctAnswer": "أراس بولوت إينملي",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطل مسلسلي الحفرة وفي الداخل"
      },
      {
        "id": "tr_q1_116",
        "points": 200,
        "question": "ما المسلسل الذي يعرض قصة صراع الفتاة الصماء 'عقيدة' وعائلتها؟",
        "options": ["الزهرة البيضاء", "الصمت", "اللؤلؤة السوداء", "الوردة البيضاء"],
        "correctAnswer": "اللؤلؤة السوداء",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة هاندة أرتشيل وتولغاهان سايشمان"
      },
      {
        "id": "tr_q1_117",
        "points": 200,
        "question": "ما الممثلة التي شاركت شتاي أولسوي بطولة فيلم 'زهرة الغاب' (Delibal)؟",
        "options": ["ليلى ليديا توغوتلو", "سيريناي ساريكايا", "هازال كايا", "هاندا دوغان ديمير"],
        "correctAnswer": "ليلى ليديا توغوتلو",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "جسدت دور الفتاة العازفة 'أفسون'"
      },
      {
        "id": "tr_q1_118",
        "points": 200,
        "question": "ما المسلسل الذي جمع بين بيرين سات وتوبا بويوكوستين في ترشيحات الأفضل بالدراما التركية كأبرز نجمتين؟",
        "options": ["العشق الممنوع وسنوات الضياع", "فاطمة جول وعاصي", "جميع ما سبق", "لا توجد أعمال مشتركة بينهما"],
        "correctAnswer": "جميع ما سبق",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "لكل منهما مسار فني مستقل ونفسا على صدارة الجوائز"
      },
      {
        "id": "tr_q1_119",
        "points": 200,
        "question": "ما المسلسل الذي اشتهر فيه الممثل باريش أرادوتش بشخصية 'عمر إبليكتشي'؟",
        "options": ["حب للإيجار", "غراب", "ألب أرسلان", "ماذا لو أحببت كثيراً"],
        "correctAnswer": "حب للإيجار",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مصمم الأحذية الشهير الذي يقع في حب دفنة"
      },
      {
        "id": "tr_q1_120",
        "points": 200,
        "question": "ما العمل الدرامي الذي قامت ببطولته هازال كايا وجسدت فيه شخصية 'نهال'؟",
        "options": ["العشق الممنوع", "أسميتها فريحة", "حكايتنا", "منتصف الليل في بيرا بالاس"],
        "correctAnswer": "العشق الممنوع",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "ابنة عدنان بيك المغرمة بمهند"
      },
      {
        "id": "tr_q1_121",
        "points": 200,
        "question": "ما اسم المسلسل الشبابي الكوميدي الذي جمع بوراك دينيز وهاندة أرتشيل وحقق أعلى نسبة مشاهدة بالهند وآسيا؟",
        "options": ["الحب لا يفهم الكلام", "أنت أطرق بابي", "شخص آخر", "طائر المبكر"],
        "correctAnswer": "الحب لا يفهم الكلام",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "عرف بشخصيات مراد وحياة"
      },
      {
        "id": "tr_q1_122",
        "points": 200,
        "question": "ما اسم الممثلة التي أدت دور 'عائشة' في مسلسل 'إيزيل' وكانت حب حياته والخائنة في نفس الوقت؟",
        "options": ["جانسو ديري", "توبا بويوكوستين", "بيرين سات", "بيرغوزار كوريل"],
        "correctAnswer": "جانسو ديري",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطلة مسلسلات أمي والخائن"
      },
      {
        "id": "tr_q1_123",
        "points": 200,
        "question": "ما هو اسم الشخصية التي أداها الممثل نجاتي شاشماز في مسلسل وادي الذئاب لمدة 10 مواسم؟",
        "options": ["مراد علمدار (Polat Alemdar)", "ميماتي باش", "عبد الحي", "سليمان شاكر"],
        "correctAnswer": "مراد علمدار (Polat Alemdar)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "العميل السري الملقب بـ علي جاندان سابقاً"
      },
      {
        "id": "tr_q1_124",
        "points": 200,
        "question": "ما اسم المسلسل الاجتماعي الذي يعرض قصة 'أسية' وأطفالها وكفاحها بعد هرب زوجها من المسؤولية؟",
        "options": ["لعبة قدري (Kaderimin Oyunu)", "امرأة", "أمي", "ابنة السفير"],
        "correctAnswer": "لعبة قدري (Kaderimin Oyunu)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة أويكو كارايل وأكين أكينوزو"
      },
      {
        "id": "tr_q1_125",
        "points": 200,
        "question": "ما اسم المسلسل التاريخي الذي تناول سيرة المؤسس عثمان بن أرطغرل؟",
        "options": ["المؤسس عثمان", "قيامة أرطغرل", "السلطان فاتح", "ألب أرسلان"],
        "correctAnswer": "المؤسس عثمان",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يعرض على قناة ATV التركية"
      },
      {
        "id": "tr_q1_126",
        "points": 200,
        "question": "ما الممثل الذي لعب دور 'جسور' في مسلسل 'جسور والجميلة' أمام توبا بويوكوستين؟",
        "options": ["كيفانش تاتليتوغ", "شتاي أولسوي", "إنجين أكيوريك", "بوراك أوزجيفيت"],
        "correctAnswer": "كيفانش تاتليتوغ",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "النجم المعروف بشخصية مهند"
      },
      {
        "id": "tr_q1_127",
        "points": 200,
        "question": "ما اسم العمل الذي أدت فيه الممثلة سينام كوبال دور الفتاة الساحرة 'سيلسي' في صغرها؟",
        "options": ["أمي الساحرة (Sihirli Annem)", "أسرار صغيرة", "بنات الشمس", "المواجهة"],
        "correctAnswer": "أمي الساحرة (Sihirli Annem)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "من أشهر مسلسلات الفانتازيا للأطفال والشباب"
      },
      {
        "id": "tr_q1_128",
        "points": 200,
        "question": "ما المسلسل الذي يروي قصة فتاة تدعي أنها ابنة رجل أعمال ثري لتستأجر بيتاً وتلتقي بشاب غني بالصدفة؟",
        "options": ["رائحة التوت (Çilek Kokusu)", "أنت أطرق بابي", "الطائر المبكر", "حب للإيجار"],
        "correctAnswer": "رائحة التوت (Çilek Kokusu)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة ديميت أوزديمير ويوسف تشيم"
      },
      {
        "id": "tr_q1_129",
        "points": 200,
        "question": "ما اسم المسلسل الذي قامت ببطولته فرح زينب عبد الله مع بيركان سوكولو بدور 'إينجي وصفوت'؟",
        "options": ["شقة الأبرياء", "سعيد وشورى", "حلم الفراشة", "في الداخل"],
        "correctAnswer": "شقة الأبرياء",
        "imageUrl": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
        "hideImageUntilAnswer": true,
        "hint": "عرض على قناة TRT1 وحقق جوائز عديدة"
      },
      {
        "id": "tr_q1_130",
        "points": 200,
        "question": "ما المسلسل الذي شارك فيه الممثل بوراك دينيز بدور 'مرعشلي' مع ألينا بوز؟",
        "options": ["مرعشلي", "شخص آخر", "الحب لا يفهم الكلام", "حكايتنا"],
        "correctAnswer": "مرعشلي",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يدور حول ضابط سابق في القوات الخاصة"
      },
      {
        "id": "tr_q1_131",
        "points": 200,
        "question": "ما اسم فيلم الأنيميشن والسينما التركية الذي حصد أكبر الإيرادات التاريخية حول معركة ملاذكرد؟",
        "options": ["ملاذكرد 1071", "1453 الفاتح", "أيلا", "أتاتورك"],
        "correctAnswer": "1453 الفاتح",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "فيلم ملحمي عن فتح إسطنبول"
      },
      {
        "id": "tr_q1_132",
        "points": 200,
        "question": "ما العمل الدرامي الذي قامت ببطولته هازال كايا المقتبس عن المسلسل الأمريكي 'Shameless'؟",
        "options": ["حكايتنا (Bizim Hikaye)", "أسميتها فريحة", "عشق", "مارال"],
        "correctAnswer": "حكايتنا (Bizim Hikaye)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شاركت البطولة مع بوراق دنيز بشخصية فيليز وباريش"
      },
      {
        "id": "tr_q1_133",
        "points": 200,
        "question": "ما اسم المسلسل الذي جسد فيه أونور تونا دور الطبيب الجراح الموهوب 'فرمان'؟",
        "options": ["الطبيب المعجزة", "طبيب المدينة", "الزهرة البيضاء", "الخائن"],
        "correctAnswer": "الطبيب المعجزة",
        "imageUrl": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
        "hideImageUntilAnswer": true,
        "hint": "استشاري جراحة الأطفال والقلب بالمستشفى"
      },
      {
        "id": "tr_q1_134",
        "points": 200,
        "question": "ما اسم المسلسل التركي الإثاري الذي تدور أحداثه بداخل مدرسة 'سارپ' وتتناول قضايا المراهقين؟",
        "options": ["ياقة الغبار (Tozluyaka)", "اسمعني", "إخوتي", "المعلم"],
        "correctAnswer": "ياقة الغبار (Tozluyaka)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يتناول مقتل الطالب وفا وحقيقة الجريمة"
      },
      {
        "id": "tr_q2_135",
        "points": 400,
        "question": "ما اسم الشخصية التي تؤديها الممثل تولغا تكين في مسلسل 'حلم أشرف' (Eşref Rüya)؟",
        "options": ["مُسلم جيرميك (Müslüm Çermik)", "غوردال بوزوك", "عزمي تك", "كمال أكيول"],
        "correctAnswer": "مُسلم جيرميك (Müslüm Çermik)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "من أبرز الشخصيات المؤثرة بعالم الجريمة بالمسلسل"
      },
      {
        "id": "tr_q2_136",
        "points": 400,
        "question": "في مسلسل 'حلم أشرف'، ما هي العلاقة الخفية التي تربط نيسان (ديميت أوزديمير) بإمبراطورية أشرف؟",
        "options": ["تحمل مفتاحاً خطيراً من ماضيه قد يدمر إمبراطوريته", "شقيقته المفقودة من الصغر", "ضابطة استخبارات مكلفة بقتله", "محامية الدفاع الخاصة به"],
        "correctAnswer": "تحمل مفتاحاً خطيراً من ماضيه قد يدمر إمبراطوريته",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "تسللت لعالمه بدافع الغموض والانتقام"
      },
      {
        "id": "tr_q2_137",
        "points": 400,
        "question": "ما العمل السينمائي الضخم الذي تناول قصة حياة العداء والرباع 'نعيم سليمان أوغلو'؟",
        "options": ["جيب هيركولي", "أيلا", "بطل من أجلنا", "المعجزة"],
        "correctAnswer": "جيب هيركولي",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "لقب برقل المصغر لكسره الأرقام القياسية العالمية"
      },
      {
        "id": "tr_q2_138",
        "points": 400,
        "question": "ما اسم المسلسل الدرامي الذي جمع بين الممثل ألب نافروز وحفصة نور سانجاكتوتان في حكاية انتقام عائلي؟",
        "options": ["ماذا لو أحببت كثيراً", "أجمل منك", "حكايتنا", "حكاية جزيرة"],
        "correctAnswer": "حكاية جزيرة",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "تدور الأحداث في جزيرة خلابة بين بويراز وحزيران"
      },
      {
        "id": "tr_q2_139",
        "points": 400,
        "question": "ما المسلسل النفسي الإثاري الذي لعب فيه الممثل كان أورجانجي أوغلو دور 'المدعي العام إيلغاز'؟",
        "options": ["القضاء (Yargı)", "محكوم", "عشق 101", "في الداخل"],
        "correctAnswer": "القضاء (Yargı)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "فاز المسلسل بجائزة إيمي الدولية كأفضل مسلسل درامي"
      },
      {
        "id": "tr_q2_140",
        "points": 400,
        "question": "ما المسلسل الذي تناول حكاية الطبيب النفسي المعالج لمرضى الحالات المستعصية في مسلسل 'الغرفة الحمراء'؟",
        "options": ["الغرفة الحمراء", "طبيب المدينة", "شقة الأبرياء", "فتاة النافذة"],
        "correctAnswer": "الغرفة الحمراء",
        "imageUrl": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس عن روايات الدكتورة جولسيران بودايجي أوغلو"
      },
      {
        "id": "tr_q2_141",
        "points": 400,
        "question": "ما اسم العمل الذي جسد فيه شتاي أولسوي شخصية الرسام والترزي المحترف 'بيامي أبكجي'؟",
        "options": ["الخياط (Terzi)", "المحافظ", "حلم أشرف", "في الداخل"],
        "correctAnswer": "الخياط (Terzi)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "عرض على منصة نتفليكس العالمية لثلاثة مواسم"
      },
      {
        "id": "tr_q2_142",
        "points": 400,
        "question": "ما المسلسل الاجتماعي الشهير الذي تتناول أحداثه صراع العائلتين التقليدية والحديثة في مسلسل 'شراب التوت'؟",
        "options": ["شراب التوت", "البراعم الحمراء", "طائر الرفراف", "ثلاث أخوات"],
        "correctAnswer": "شراب التوت",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "قصة زواج دوغا وفاتح وما تبعها من صدمة ثقافية"
      },
      {
        "id": "tr_q2_143",
        "points": 400,
        "question": "ما المسلسل التاريخي الضخم الذي يتناول قصة فتح القدس وتحريرها على يد القائد 'صلاح الدين الأيوبي'؟",
        "options": ["فاتح القدس صلاح الدين الأيوبي", "نهضة السلاجقة", "ألب أرسلان", "ممالك النار"],
        "correctAnswer": "فاتح القدس صلاح الدين الأيوبي",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة الممثل أورغور غونيش"
      },
      {
        "id": "tr_q2_144",
        "points": 400,
        "question": "ما اسم المسلسل التشويقي الذي تدور أحداثه حول قاتل مأجور يسعى للانتقام بعد خروجه من السجن في مسلسل 'الجراد'؟",
        "options": ["الرامو (Ramo)", "المرعشلي", "علي رضا", "العصابة"],
        "correctAnswer": "الرامو (Ramo)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة مراد يلدريم وإسراء بيلجيتش"
      },
      {
        "id": "tr_q2_145",
        "points": 400,
        "question": "ما اسم المسلسل الذي قامت ببطولته بينار دينيز بدور 'جيلين' المحامية المشاكسة والذكية؟",
        "options": ["القضاء", "عشق 101", "المعلم", "الأناني"],
        "correctAnswer": "القضاء",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شريكة المدعي العام إيلغاز قايا"
      },
      {
        "id": "tr_q2_146",
        "points": 400,
        "question": "ما العمل الدرامي الذي جسد فيه كيفانش تاتليتوغ دور 'أصلان سويكان' زعيم العائلة والمافيا؟",
        "options": ["العائلة (Aile)", "الاصطدام", "جسور والجميلة", "سعيد وشورى"],
        "correctAnswer": "العائلة (Aile)",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شاركت البطولة سيريناي ساريكايا بدور الدكتورة ديرين"
      },
      {
        "id": "tr_q2_147",
        "points": 400,
        "question": "ما اسم العمل الاجتماعي الذي تتناول قصته معانات أربع فتيات صغار بعد فقدان والديهن بظروف غامضة؟",
        "options": ["إخوتي", "الأزهار الحزينة", "طيور النار", "أمي"],
        "correctAnswer": "إخوتي",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "عرض لعدة مواسم على قناة ATV"
      },
      {
        "id": "tr_q2_148",
        "points": 400,
        "question": "ما اسم المسلسل الإثاري السياسي الذي يتناول عمليات المخابرات التركية الخارجة عن القانون بالخارج في 'المنظمة'؟",
        "options": ["المنظمة (Teşkilat)", "العهد", "المحارب", "وادي الذئاب"],
        "correctAnswer": "المنظمة (Teşkilat)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "عرض على قناة TRT1 الرسمية"
      },
      {
        "id": "tr_q2_149",
        "points": 400,
        "question": "ما المسلسل الرومانسي الذي جمع بوراك أوزجيفيت ونسليهان أتاغول وحقق مليار مشاهدة عالمية؟",
        "options": ["حب أعمى", "طائر النمنمة", "أسرار صغيرة", "ابنة السفير"],
        "correctAnswer": "حب أعمى",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات كمال ونيهان"
      },
      {
        "id": "tr_q2_150",
        "points": 400,
        "question": "ما المسلسل الذي يتناول صراع الأطباء في مشفى جراحي بحي استنبولي فقير في 'طبيب المدينة'؟",
        "options": ["طبيب المدينة", "الطبيب المعجزة", "نبضات قلب", "الرحمة"],
        "correctAnswer": "طبيب المدينة",
        "imageUrl": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة أونور تونا وهازال سوباشي"
      },
      {
        "id": "tr_q2_151",
        "points": 400,
        "question": "ما العمل الدرامي الذي قامت ببطولته الممثلة أوزغي أوزبيرينتشجي المقتبس عن المسلسل الكوري 'Mother'؟",
        "options": ["أمي", "امرأة", "الرحمة", "أول وأخير"],
        "correctAnswer": "أمي",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شاركتها البطولة جانسو ديري والطفلة برين غوكيلدز"
      },
      {
        "id": "tr_q2_152",
        "points": 400,
        "question": "ما اسم فيلم الدراما الحربية الذي يجسد بطولات الجيش التركي والملازم أبارسلان بالاشتراك بين بوراك أوزجيفيت وكرم بورسين؟",
        "options": ["فداء الوطن (Can Feda)", "المحارب", "العهد", "أيلا"],
        "correctAnswer": "فداء الوطن (Can Feda)",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "تم عرضه في السينمات عام 2018"
      },
      {
        "id": "tr_q2_153",
        "points": 400,
        "question": "ما اسم المسلسل الفلسفي الإثاري القصير الذي أخرجه أونور ألاپ وقام ببطولته خلوق بيلغينار في دور 'أغاه'؟",
        "options": ["شخصية (Şahsiyet)", "الخياط", "محكوم", "في"],
        "correctAnswer": "شخصية (Şahsiyet)",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "فاز بجائزة إيمي الدولية كأفضل ممثل"
      },
      {
        "id": "tr_q2_154",
        "points": 400,
        "question": "ما اسم المسلسل الذي قامت فيه شوال سام وإدا إيجي ببطولة صراع النفوذ بالشركة في 'التفاح الحرام'؟",
        "options": ["التفاح الحرام", "جرائم صغيرة", "فضيلة وبناتها", "نساء حائرات"],
        "correctAnswer": "التفاح الحرام",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "استمر لمدة 6 مواسم متتالية"
      },
      {
        "id": "tr_q2_155",
        "points": 400,
        "question": "ما المسلسل الذي جمع بين إلتشين سانجو وباريش أردوتش وحقق نجاحاً ساحقاً في مسلسل 'حب للإيجار'؟",
        "options": ["حب للإيجار", "اصطدام", "غراب", "ماذا لو أحببت كثيراً"],
        "correctAnswer": "حب للإيجار",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات دفنة وعمر إبليكتشي"
      },
      {
        "id": "tr_q2_156",
        "points": 400,
        "question": "ما اسم الفيلم المقتبس عن أحداث حقيقية ويروي قصة المطربة 'بيرجين' المغدورة من زوجها؟",
        "options": ["بيرجين (Bergen)", "مسلم", "أيلا", "نعيم"],
        "correctAnswer": "بيرجين (Bergen)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "جسدت بطولته الممثلة فرح زينب عبد الله"
      },
      {
        "id": "tr_q2_157",
        "points": 400,
        "question": "ما المسلسل التاريخي الملحمي الذي يتناول سير الأشقاء البحارة خير الدين بربروس وعروج بربروس؟",
        "options": ["بربروسا: سيف البحر المتوسط", "نهضة السلاجقة", "كوت العمارة", "الفاتح"],
        "correctAnswer": "بربروسا: سيف البحر المتوسط",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة إنجين ألتان دوزياتان وأولغون سيمسيك"
      },
      {
        "id": "tr_q2_158",
        "points": 400,
        "question": "ما اسم المسلسل الذي قامت ببطولته الممثلة أصليهان جربوز وتدور أحداثه حول 4 صديقات وجريمة مقتل بالماضي؟",
        "options": ["جرائم صغيرة", "التفاح الحرام", "نساء حائرات", "الخائن"],
        "correctAnswer": "جرائم صغيرة",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "عرف بأسماء أوييا ومروة وبادئة"
      },
      {
        "id": "tr_q2_159",
        "points": 400,
        "question": "ما العمل الدرامي الذي يعرض الصراع بين الطرق الصوفية والعلمانية بتركيا في 'البراعم الحمراء'؟",
        "options": ["البراعم الحمراء", "شراب التوت", "عمر", "طائر الرفراف"],
        "correctAnswer": "البراعم الحمراء",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة أوزجان دينيز وأوزغي أوزبيرينتشجي"
      },
      {
        "id": "tr_q2_160",
        "points": 400,
        "question": "ما المسلسل التاريخي الذي تناول حكاية السلطان السلجوقي ألب أرسلان وانتصاره بملاذكرد؟",
        "options": ["ألب أرسلان: السلاجقة العظام", "نهضة السلاجقة", "قيامة أرطغرل", "المؤسس عثمان"],
        "correctAnswer": "ألب أرسلان: السلاجقة العظام",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة باريش أرادوتش وفهرية أوجن"
      },
      {
        "id": "tr_q2_161",
        "points": 400,
        "question": "ما العمل الرومانسي الدرامي الذي خاض بطولته شتاي أولسوي مع سيريناي ساريكايا بدور 'يامان وميرا'؟",
        "options": ["مد جزر (Medcezir)", "أسميتها فريحة", "في الداخل", "المحافظ"],
        "correctAnswer": "مد جزر (Medcezir)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس عن المسلسل الأمريكي The O.C."
      },
      {
        "id": "tr_q2_162",
        "points": 400,
        "question": "ما المسلسل الذي جمع بين خالد أرغنش وبرغوزار كوريل بملحمة حب زمن الاحتلال اليوناني لإزمير؟",
        "options": ["أنت وطني", "حريم السلطان", "ويبقى الحب", "بابل"],
        "correctAnswer": "أنت وطني",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "قصة الملازم جودت وزوجته عزيزة"
      },
      {
        "id": "tr_q2_163",
        "points": 400,
        "question": "ما اسم المسلسل الاجتماعي المقتبس عن رواية واقعية حول معاناة الفتاة 'نالان' بقصر عائلة كوروغلو؟",
        "options": ["فتاة النافذة", "شقة الأبرياء", "بيت أهلي", "الغرفة الحمراء"],
        "correctAnswer": "فتاة النافذة",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة بورجو بيريجيك وفياض شريف أوغلو"
      },
      {
        "id": "tr_q2_164",
        "points": 400,
        "question": "ما اسم المسلسل الذي خاض بطولته الممثل أقطاي كينارجا بشخصية 'هضر تشاكر بيلي' لستة مواسم؟",
        "options": ["قطاع الطرق لن يحكموا العالم", "وادي الذئاب", "القبضاي", "الحفرة"],
        "correctAnswer": "قطاع الطرق لن يحكموا العالم",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "يعرف بختام حلقاته اليومية القياسية"
      },
      {
        "id": "tr_q2_165",
        "points": 400,
        "question": "ما اسم المسلسل الذي قامت ببطولته جانسو ديري وتناول الخيانة الزوجية والانتقام الجريء؟",
        "options": ["الخائن (Sadakatsiz)", "أمي", "إيزيل", "شخصية"],
        "correctAnswer": "الخائن (Sadakatsiz)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصية الدكتورة آسيا وزوجها فولكان"
      },
      {
        "id": "tr_q2_166",
        "points": 400,
        "question": "ما المسلسل النفسي والغموض الخيالي حول أسرار معبد 'جوبكلي تبه' التاريخي من بطولة بيرين سات؟",
        "options": ["عطايا (Atiye)", "المحافظ", "شاهماران", "الساحرة"],
        "correctAnswer": "عطايا (Atiye)",
        "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
        "hideImageUntilAnswer": true,
        "hint": "عرض على منصة نتفليكس الأصلي"
      },
      {
        "id": "tr_q2_167",
        "points": 400,
        "question": "ما اسم الفيلم الدرامي المؤثر من بطولة أراس بولوت إينملي بدور الأب 'مِمو' المصاب بإعاقة ذهنية؟",
        "options": ["معجزة في الزنزانة رقم 7", "هل نحن بخير", "زهرة الغاب", "أمي"],
        "correctAnswer": "معجزة في الزنزانة رقم 7",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "حقق ملايين المشاهدات حول العالم"
      },
      {
        "id": "tr_q3_168",
        "points": 600,
        "question": "ما اسم المخرج والكاتب التركي الشهير الذي يتولى كتابة وإخراج أعمال الجريمة الكبرى ومنها مسلسل 'حلم أشرف' و'في الداخل'؟",
        "options": ["أولوتش بايراكتار (Uluç Bayraktar)", "سنان أوزتورك", "سردار أليكار", "محمد بوزداغ"],
        "correctAnswer": "أولوتش بايراكتار (Uluç Bayraktar)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مخرج مسلسلات إيزيل وفي الداخل والقبضاي"
      },
      {
        "id": "tr_q3_169",
        "points": 600,
        "question": "ما اسم الشخصية التاريخية الحقيقية التي جسدها الممثل إيكين كوتش في مسلسل 'نهضة السلاجقة العظام'؟",
        "options": ["أحمد سنجر", "ملك شاه", "نظام الملك", "ألب أرسلان"],
        "correctAnswer": "أحمد سنجر",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "ابن السلطان ملك شاه والقائد المحارب للباطنية"
      },
      {
        "id": "tr_q3_170",
        "points": 600,
        "question": "ما اسم المسلسل الحقبي الذي أخرجته زينب غوناي وتناول حياة أبناء الطائفة اليهودية بإسطنبول في الخمسينيات باسم 'الملهى'؟",
        "options": ["Kulüp (الملهى)", "فاطمة", "محكومة", "بيرا بالاس"],
        "correctAnswer": "Kulüp (الملهى)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة غوكشتشي بهادر وصالح باديمجي"
      },
      {
        "id": "tr_q3_171",
        "points": 600,
        "question": "ما المسلسل الذي جمع بين إلكر كاليلي وبورتشين تيرزي أوغلو بشخصية 'بويراز وعايشة جول' واشتهر بالعبارات الفلسفية؟",
        "options": ["بويراز كاراييل", "في الداخل", "القبضاي", "الرحمة"],
        "correctAnswer": "بويراز كاراييل",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "تأليف الكاتب إثيم أوزشيك"
      },
      {
        "id": "tr_q3_172",
        "points": 600,
        "question": "ما اسم المسلسل الذي يتناول عالم السجون والانتقام الذكي وبطولة إسماعيل حجي أوغلو بدور التوأم باريش وسافاش؟",
        "options": ["محكوم (Mahkum)", "في الداخل", "الاصطدام", "سقوط القناع"],
        "correctAnswer": "محكوم (Mahkum)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس عن المسلسل الكوري Innocent Defendant"
      },
      {
        "id": "tr_q3_173",
        "points": 600,
        "question": "ما العمل الدرامي القصير لنتفليكس من بطولة أوزغي أوزبيرينتشجي وبوران كوزوم الذي يعرض تحولات علاقة زوجين عبر 10 سنوات؟",
        "options": ["أول وأخير (İlk ve Son)", "الخياط", "شجرة الزيتون", "الملهى"],
        "correctAnswer": "أول وأخير (İlk ve Son)",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات دينيز وباريش"
      },
      {
        "id": "tr_q3_174",
        "points": 600,
        "question": "ما اسم المسلسل الإثاري القصير المكون من 6 حلقات فقط ويدور حول فرقة العمليات الخاصة التركية BÖRK؟",
        "options": ["الذئب (Börü)", "العهد", "المحارب", "المنظمة"],
        "correctAnswer": "الذئب (Börü)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "من إخراج وسيناريو ألبير كاجلار"
      },
      {
        "id": "tr_q3_175",
        "points": 600,
        "question": "ما الفيلم السينمائي الذي جمع بين كيفانش تاتليتوغ وميرت فرات ويروي قصة الشاعرين الشابين المريضين بالسل زمن الحرب؟",
        "options": ["حلم الفراشة (Kelebeğin Rüyası)", "همس لو أنسيت", "زهرة الغاب", "قصة حب"],
        "correctAnswer": "حلم الفراشة (Kelebeğin Rüyası)",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "إخراج وتأليف يلماز أردوغان"
      },
      {
        "id": "tr_q3_176",
        "points": 600,
        "question": "ما العمل الذي قامت ببطولته طوبا بويوكوستين وحقق نجاحاً على نتفليكس بتناول العلاج العائلي بالتأمل في شجرة الزيتون؟",
        "options": ["شجرة الزيتون (Zeytin Ağacı)", "عروس إسطنبول", "ابنة السفير", "قدري هو المنزل"],
        "correctAnswer": "شجرة الزيتون (Zeytin Ağacı)",
        "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات أدا وسيفجي وليلى بالبلدة الساحلية"
      },
      {
        "id": "tr_q3_177",
        "points": 600,
        "question": "ما المسلسل التاريخي الضخم الذي يتناول صراع ومعركة 'كوت العمارة' الخالدة ضد الجيش البريطاني؟",
        "options": ["كوت العمارة (Kütül Amare)", "نهضة السلاجقة", "ممالك النار", "الفاتح"],
        "correctAnswer": "كوت العمارة (Kütül Amare)",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "من إنتاج شركة بوزداغ فيلم"
      },
      {
        "id": "tr_q3_178",
        "points": 600,
        "question": "ما اسم الشخصية الحقيقية التي جسدها الممثل تيموتشين إيسن وغنى جميع الأغاني الخاصة بها بصوته في فيلم سيري؟",
        "options": ["مُسلم جورسيس (Müslüm)", "نعيم سليمان", "أحمد كايا", "بيرجين"],
        "correctAnswer": "مُسلم جورسيس (Müslüm)",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "أسطورة أغاني الأرابيسك التركي"
      },
      {
        "id": "tr_q3_179",
        "points": 600,
        "question": "ما المسلسل الذي يتناول صراع ثلاث أخوات (تكان، دونش، ودريا) بمدينة أيفاليك المقتبس عن رواية إجلال أيدين؟",
        "options": ["ثلاث أخوات (Üç Kız Kardeş)", "شراب التوت", "الفتيات الثلاث", "بنات الشمس"],
        "correctAnswer": "ثلاث أخوات (Üç Kız Kardeş)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "حقق أرقام مشاهدات عالية على القناة D"
      },
      {
        "id": "tr_q3_180",
        "points": 600,
        "question": "ما اسم المسلسل الذي قامت فيه الممثلة بورجو بيريجيك بدور امرأة تنظف منازل القتلة لتغطية مقتل زوجها في 'فاطمة'؟",
        "options": ["فاطمة (Fatma)", "الخياط", "شخصية", "الغرفة الحمراء"],
        "correctAnswer": "فاطمة (Fatma)",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "إنتاج أصلي لمنصة نتفليكس"
      },
      {
        "id": "tr_q3_181",
        "points": 600,
        "question": "ما المسلسل النفسي الذي تناول وسواس النظافة القهري الشديد لشقيقتين تعيشان بشقة ممتلئة بالذكريات المؤلمة؟",
        "options": ["شقة الأبرياء", "الغرفة الحمراء", "فتاة النافذة", "بيت أهلي"],
        "correctAnswer": "شقة الأبرياء",
        "imageUrl": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات صفية وغلبن هانم"
      },
      {
        "id": "tr_q3_182",
        "points": 600,
        "question": "ما اسم المسلسل الذي خاض بطولته كينان إميرزالي أوغلو وبيرغوزار كوريل بالسبعينيات للإنقاذ من الإعدام؟",
        "options": ["القبضاي (Karadayı)", "ايزيل", "دموع الورد", "الذئب"],
        "correctAnswer": "القبضاي (Karadayı)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصية صانع الأحذية ماهر كارا"
      },
      {
        "id": "tr_q3_183",
        "points": 600,
        "question": "ما اسم العمل الخيالي الذي أدى فيه شتاي أولسوي دور الشاب 'هاكان' الحارس الأخير لإسطنبول؟",
        "options": ["المحافظ (Hakan: Muhafız)", "عطايا", "شاهماران", "في الداخل"],
        "correctAnswer": "المحافظ (Hakan: Muhafız)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "أول عمل تركي أصلي لمنصة نتفليكس"
      },
      {
        "id": "tr_q3_184",
        "points": 600,
        "question": "ما المسلسل التشويقي الذي يبدأ بحادث تصادم أربع سيارات بنفس اللحظة وبطولة كيفانش تاتليتوغ؟",
        "options": ["الاصطدام (Çarpışma)", "جسور والجميلة", "العائلة", "حب للإيجار"],
        "correctAnswer": "الاصطدام (Çarpışma)",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصية مفوض الشرطة قدير أضالي"
      },
      {
        "id": "tr_q3_185",
        "points": 600,
        "question": "ما العمل الدرامي الكوميدي الذي أخرجه سينان أوزتورك وبطولة نازان كيصال حول أم تسعى لتزويج ابنتيها؟",
        "options": ["فضيلة وبناتها", "بنات الشمس", "الأوراق المتساقطة", "عشق وجزاء"],
        "correctAnswer": "فضيلة وبناتها",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصيات هازان وإيجين وياغيز إيجيمان"
      },
      {
        "id": "tr_q3_186",
        "points": 600,
        "question": "ما المسلسل الذي يعرض صراع عائلتي أونال وأرسلان بمسلسل 'شراب التوت' المقتبس عن أحداث حقيقية؟",
        "options": ["شراب التوت", "طائر الرفراف", "البراعم الحمراء", "ثلاث أخوات"],
        "correctAnswer": "شراب التوت",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "تأليف الكاتبة ميليس سيفليك"
      },
      {
        "id": "tr_q3_187",
        "points": 600,
        "question": "ما اسم الفيلم المقتبس عن أحداث حقيقية ويروي قصة الفارس هاليس كاراتاش والحصان الأسطوري 'بولد بيلوت'؟",
        "options": ["بطل من أجلنا (Bizim İçin Şampiyon)", "سليمان العظيم", "شامبيون", "الترك العظيم"],
        "correctAnswer": "بطل من أجلنا (Bizim İçin Şampiyon)",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة إيكين كوتش وفرح زينب عبد الله"
      },
      {
        "id": "tr_q3_188",
        "points": 600,
        "question": "ما العمل الاجتماعي المقتبس عن رواية رشاد نوري غونتكين والذي يتناول ضياع أفراد عائلة علي رضا تيكين؟",
        "options": ["الأوراق المتساقطة (Yaprak Dökümü)", "على مر الزمان", "الأزهار الحزينة", "عشق وجزاء"],
        "correctAnswer": "الأوراق المتساقطة (Yaprak Dökümü)",
        "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        "hideImageUntilAnswer": true,
        "hint": "عرض لـ 5 مواسم وتجاوزت حلقاته 170 حلقة"
      },
      {
        "id": "tr_q3_189",
        "points": 600,
        "question": "ما اسم المسلسل الخيالي الإثاري حول أسطورة ملكة الأفاعي من بطولة سيريناي ساريكايا وبوراك دينيز؟",
        "options": ["شاهماران (Şahmaran)", "عطايا", "المحافظ", "الساحرة"],
        "correctAnswer": "شاهماران (Şahmaran)",
        "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
        "hideImageUntilAnswer": true,
        "hint": "من إنتاج منصة نتفليكس"
      },
      {
        "id": "tr_q3_190",
        "points": 600,
        "question": "ما اسم المسلسل الذي جسد فيه إنجين أكيوريك دور الشاب القروي 'سنجار إيفو أوغلو' المتمسك بعهده؟",
        "options": ["ابنة السفير", "العشق الأسود", "فاطمة جول", "حتى الممات"],
        "correctAnswer": "ابنة السفير",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شاركت البطولة نسليهان أتاغول وطوبا بويوكوستين"
      },
      {
        "id": "tr_q3_191",
        "points": 600,
        "question": "ما المسلسل الذي قام فيه الممثل بوراك أوزجيفيت بدور الشخصية التاريخية الفاتحة بالقرن الثالث عشر؟",
        "options": ["المؤسس عثمان", "قيامة أرطغرل", "حريم السلطان", "عاصمة عبد الحميد"],
        "correctAnswer": "المؤسس عثمان",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مستمر في العرض لعدة مواسم متتالية"
      },
      {
        "id": "tr_q3_192",
        "points": 600,
        "question": "ما المسلسل الطبي الشهير الذي جسد فيه تانر أؤلمز دور الجراح الموهوب المصاب بالطيف التوحدي 'علي وفاء'؟",
        "options": ["الطبيب المعجزة", "نبضات قلب", "طبيب المدينة", "الرحمة"],
        "correctAnswer": "الطبيب المعجزة",
        "imageUrl": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
        "hideImageUntilAnswer": true,
        "hint": "مقتبس عن المسلسل الكوري والأمريكي Good Doctor"
      },
      {
        "id": "tr_q3_193",
        "points": 600,
        "question": "ما اسم العمل السياسي الإثاري الذي تناول صراعات جهاز الاستخبارات الوطنية التركي بقيادة عمر باسيون؟",
        "options": ["المنظمة", "العهد", "المحارب", "وادي الذئاب"],
        "correctAnswer": "المنظمة",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "أدى بطولته مراد أونالميش وتشاغلا أرتوغرول"
      },
      {
        "id": "tr_q3_194",
        "points": 600,
        "question": "ما اسم المسلسل الذي جمع بوراك دينيز وهاندة أرتشيل حول مذيع يملك شخصية مزدوجة متهمة بالقتل في 'شخص آخر'؟",
        "options": ["شخص آخر (Bambaşka Biri)", "الحب لا يفهم الكلام", "بنات الشمس", "القضاء"],
        "correctAnswer": "شخص آخر (Bambaşka Biri)",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "شخصية المذيع كينان والمدعية ليلى"
      },
      {
        "id": "tr_q3_195",
        "points": 600,
        "question": "ما المسلسل التاريخي الأسطوري المكون من 5 مواسم والذي تناول تأسيس قبيلة الكاي على يد أرطغرل بن سليمان شاه؟",
        "options": ["قيامة أرطغرل", "المؤسس عثمان", "ألب أرسلان", "نهضة السلاجقة"],
        "correctAnswer": "قيامة أرطغرل",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة إنجين ألتان دوزياتان"
      },
      {
        "id": "tr_q3_196",
        "points": 600,
        "question": "ما اسم المسلسل الإثاري الذي يعرض صراع عائلتي المافيا كوتشوفالي وحملات السيطرة على حيهم الشهير بالوشم؟",
        "options": ["الحفرة", "في الداخل", "الاصطدام", "العهد"],
        "correctAnswer": "الحفرة",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة أراس بولوت إينملي وأركان كولتشاك"
      },
      {
        "id": "tr_q3_197",
        "points": 600,
        "question": "ما العمل الدرامي الحائز على جائزة إيمي الدولية كأفضل مسلسل والمقتبس عن صراع فتاة وشاب بداخل أروقة المحاكم والقضاء؟",
        "options": ["القضاء", "محكوم", "حب أعمى", "شخصية"],
        "correctAnswer": "القضاء",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة كان أورجانجي أوغلو وبينار دينيز"
      },
      {
        "id": "tr_q3_198",
        "points": 600,
        "question": "ما اسم المسلسل الذي جمع بين الممثل بوراك أوزجيفيت وفهرية أوجن في اقتباس درامي تاريخي لرواية 'طائر النمنمة'؟",
        "options": ["طائر النمنمة", "عشق شبيه بك", "أسرار صغيرة", "حريم السلطان"],
        "correctAnswer": "طائر النمنمة",
        "imageUrl": "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
        "hideImageUntilAnswer": true,
        "hint": "قصة المعلمة فريدة والدكتور كامران"
      },
      {
        "id": "tr_q3_199",
        "points": 600,
        "question": "ما العمل السينمائي الحقبي التركي الذي ترشح للأوسكار وتناول كفاح الرائد 'سليمان' في حرب كوريا عام 1950؟",
        "options": ["أيلا: ابنة الحرب (Ayla)", "معجزة 7", "نعيم", "مسلم"],
        "correctAnswer": "أيلا: ابنة الحرب (Ayla)",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
        "hideImageUntilAnswer": true,
        "hint": "جسد دور سليمان الشاب الممثل إسماعيل حجي أوغلو"
      },
      {
        "id": "tr_q3_200",
        "points": 600,
        "question": "ما اسم المسلسل التاريخي العثماني الشهير عالمياً باسم 'Magnificent Century' وحقق أعلى نسبة توزيع عالمي للدراما التركية؟",
        "options": ["حريم السلطان", "قيامة أرطغرل", "أنت وطني", "السلطانة كوسيم"],
        "correctAnswer": "حريم السلطان",
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "hideImageUntilAnswer": true,
        "hint": "بطولة خالد أرغنش ومريم أوزرلي"
      }
    ]
  },
  {
    "id": "spec-turkish-ertugrul",
    "name": "قيامة أرطغرل",
    "type": "specific",
    "section": "🇹🇷 قسم فن تركي",
    "iconName": "Swords",
    "imageUrl": "/ertugrul/ertugrul_1.jpg",
    "description": "أسئلة تتعلق بمسلسل قيامة أرطغرل وقبيلة الكايي",
    "color": "from-amber-600 to-red-700",
    "bgGradient": "bg-gradient-to-br from-amber-600/10 to-red-700/10 border-amber-600/30",
    "tags": [
      "أرطغرل",
      "الكايي",
      "تورغوت"
    ],
    "questions": ertugrul100Questions
  },
  {
    "id": "spec-turkish-osman",
    "name": "المؤسس عثمان",
    "type": "specific",
    "section": "🇹🇷 قسم فن تركي",
    "iconName": "Crown",
    "imageUrl": "/kurulus_osman/osman_1.jpg",
    "description": "أسئلة تتعلق بمسلسل المؤسس عثمان وفتوحاته",
    "color": "from-red-700 to-amber-700",
    "bgGradient": "bg-gradient-to-br from-red-700/10 to-amber-700/10 border-red-700/30",
    "tags": [
      "عثمان",
      "المؤسس",
      "فتوحات"
    ],
    "questions": kurulusOsman100Questions
  },
  {
    "id": "spec-turkish-cukur",
    "name": "الحفرة (Çukur)",
    "type": "specific",
    "section": "🇹🇷 قسم فن تركي",
    "iconName": "Target",
    "imageUrl": "/cukur/cukur_1.jpg",
    "description": "أسئلة تتعلق بمسلسل الحفرة وعائلة كوتشوفالي",
    "color": "from-slate-900 to-red-950",
    "bgGradient": "bg-gradient-to-br from-slate-900/10 to-red-950/10 border-slate-900/30",
    "tags": [
      "Çukur",
      "الحفرة",
      "ياماش"
    ],
    "questions": cukur100Questions
  },
  {
    "id": "spec-turkish-esref-ruya",
    "name": "حلم أشرف (Eşref Rüya)",
    "type": "specific",
    "section": "🇹🇷 قسم فن تركي",
    "iconName": "Tv",
    "imageUrl": "/esref_ruya/esref_1.jpg",
    "description": "قسم خاص بمسلسل الدراما والجريمة حلم أشرف (Eşref Rüya) بطولة شتاي أولسوي وديميت أوزديمير",
    "color": "from-red-600 to-amber-700",
    "bgGradient": "bg-gradient-to-br from-red-600/10 to-amber-700/10 border-red-600/30",
    "tags": [
      "حلم أشرف",
      "Eşref Rüya",
      "فن تركي",
      "شتاي أولسوي",
      "ديميت أوزديمير"
    ],
    "questions": esrefRuya100Questions
  },
  {
    "id": "spec-anime-general",
    "name": "أنمي",
    "type": "specific",
    "section": "🎌 قسم أنمي",
    "iconName": "Sparkles",
    "imageUrl": "/anime/anime_1.jpg",
    "description": "أسئلة عامة وشاملة تتعلق لعالم الأنمي والمانغا",
    "color": "from-amber-500 to-rose-600",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-rose-600/10 border-amber-500/30",
    "tags": [
      "أنمي",
      "مانغا",
      "أوتاكو"
    ],
    "questions": anime100Questions
  },
  {
    "id": "spec-anime-onepiece",
    "name": "One Piece",
    "type": "specific",
    "section": "🎌 قسم أنمي",
    "iconName": "CassetteTape",
    "imageUrl": "/one_piece/onepiece_1.jpg",
    "description": "أسئلة تتعلق بمسلسل ون بيس وقبعة القش",
    "color": "from-amber-500 to-red-600",
    "bgGradient": "bg-gradient-to-br from-amber-500/10 to-red-600/10 border-amber-500/30",
    "tags": [
      "One Piece",
      "لوفي",
      "زورو"
    ],
    "questions": onePiece100Questions
  },
  {
    "id": "spec-anime-pokemon",
    "name": "Pokémon",
    "type": "specific",
    "section": "🎌 قسم أنمي",
    "iconName": "Sparkles",
    "imageUrl": "/pokemon/pokemon_1.jpg",
    "description": "أسئلة تتعلق بسلسلة البوكيمون والمدربين",
    "color": "from-yellow-500 to-amber-600",
    "bgGradient": "bg-gradient-to-br from-yellow-500/10 to-amber-600/10 border-yellow-500/30",
    "tags": [
      "Pokémon",
      "بيكاتشو",
      "آش"
    ],
    "questions": pokemon100Questions
  },
  {
    "id": "spec-anime-characters",
    "name": "شخصيات أنمي",
    "type": "specific",
    "section": "🎌 قسم أنمي",
    "iconName": "Users",
    "imageUrl": "/anime/anime_2.jpg",
    "description": "أسئلة التخمين والتعرف على أسماء شخصيات الأنمي الشهيرة",
    "color": "from-pink-600 to-purple-600",
    "bgGradient": "bg-gradient-to-br from-pink-600/10 to-purple-600/10 border-pink-600/30",
    "tags": [
      "شخصيات",
      "تخمين",
      "أنمي"
    ],
    "questions": [
      {
        "id": "spec-anime-characters-1",
        "imageUrl": "/anime/anime_2.jpg",
        "hideImageUntilAnswer": false,
        "points": 200,
        "question": "من هو المعلم الأسطوري معصوب العينين وذو الشعر الأبيض وصاحب تقنية اللانهائية في Jujutsu Kaisen؟",
        "options": [
          "ساتورو غوجو (Satoru Gojo)",
          "إيتا دوري",
          "سوكونا",
          "مغومي"
        ],
        "correctAnswer": "ساتورو غوجو (Satoru Gojo)",
        "explanation": "ساتورو غوجو أقوى السحرة في عالم جوجوتسو كايسن.",
        "hint": "Satoru Gojo"
      },
      {
        "id": "spec-anime-characters-2",
        "imageUrl": "/anime/anime_1.jpg",
        "hideImageUntilAnswer": false,
        "points": 300,
        "question": "من هو البطل الملقب بـ \"رجل اللكمة الواحدة\" الصلع الذي يقضي على أي خصم بلكمة واحدة؟",
        "options": [
          "سايتاما (Saitama)",
          "جينوس",
          "غارو",
          "بونغ"
        ],
        "correctAnswer": "سايتاما (Saitama)",
        "explanation": "سايتاما بطل One Punch Man الخارق.",
        "hint": "Saitama"
      },
      {
        "id": "spec-anime-characters-3",
        "imageUrl": "/anime/anime_3.jpg",
        "hideImageUntilAnswer": false,
        "points": 400,
        "question": "من هو المحقق العبقري الغامض الملقب بـ L في أنمي مذكرة الموت والذي يعشق أكل الحلويات؟",
        "options": [
          "إل لاوليت (L Lawliet)",
          "نير",
          "ميلو",
          "مات"
        ],
        "correctAnswer": "إل لاوليت (L Lawliet)",
        "explanation": "المحقق L خاض أضخم مواجهة ذكاء ضد كيرة (لايت).",
        "hint": "L"
      },
      {
        "id": "spec-anime-characters-4",
        "imageUrl": "/anime/anime_4.jpg",
        "hideImageUntilAnswer": false,
        "points": 500,
        "question": "من هو البطل الشاب صاحب قدرة \"ون فور أول\" (One For All) والشعر الأخضر في My Hero Academia؟",
        "options": [
          "إيزوكو ميدوريا / ديكو (Deku)",
          "باكوغو",
          "تودوروكي",
          "أول مايت"
        ],
        "correctAnswer": "إيزوكو ميدوريا / ديكو (Deku)",
        "explanation": "ميدوريا (ديكو) ورث قدرة أول مايت ليصبح البطل الأول.",
        "hint": "Deku / Midoriya"
      },
      {
        "id": "spec-anime-characters-5",
        "points": 600,
        "question": "من هو السياف الأسطوري ذو الشعر الأخضر في One Piece الذي يقاتل بثلاثة سيوف معاً؟",
        "options": [
          "رورونوا زورو (Roronoa Zoro)",
          "سوبارو",
          "شانكس",
          "ميهوك"
        ],
        "correctAnswer": "رورونوا زورو (Roronoa Zoro)",
        "explanation": "زورو هو السياف الأول في طاقم قبعة القش وصاحب أسوب \"سانتوريو\" السيوف الثلاثة.",
        "hint": "صاحب الشعر الأخضر والسيوف الثلاثة",
        "imageUrl": "/one_piece/onepiece_2.jpg",
        "hideImageUntilAnswer": false
      }
    ]
  }
];
