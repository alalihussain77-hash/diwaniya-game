type BreakingBadImageContext = {
  id: string;
  questionText: string;
  correctAnswer: string;
  hint?: string;
};

const CURATED_IMAGES = [
  '/breaking_bad/curated/walter.jpg',
  '/breaking_bad/curated/jesse.jpg',
  '/breaking_bad/curated/hank.jpg',
  '/breaking_bad/curated/saul.jpg',
  '/breaking_bad/curated/skyler.jpg',
  '/breaking_bad/curated/gus.jpg',
  '/breaking_bad/curated/mike.jpg',
  '/breaking_bad/curated/pollos.jpg',
  '/breaking_bad/curated/rv.jpg',
  '/breaking_bad/curated/hat.jpg',
  '/breaking_bad/curated/superlab.jpg',
  '/breaking_bad/curated/blue-meth.jpg',
  '/breaking_bad/curated/desert.jpg',
] as const;

const IMAGE_RULES: Array<{ image: string; keywords: string[] }> = [
  {
    image: '/breaking_bad/curated/saul.jpg',
    keywords: ['سول', 'جيمي مكغيل', 'better call saul', 'المحامي'],
  },
  {
    image: '/breaking_bad/curated/mike.jpg',
    keywords: ['مايك', 'إرمانتراوت', 'ehrmantraut'],
  },
  {
    image: '/breaking_bad/curated/hank.jpg',
    keywords: ['هانك', 'شريتر', 'شريدر', 'غوميز', 'dea', 'مكافحة المخدرات'],
  },
  {
    image: '/breaking_bad/curated/skyler.jpg',
    keywords: ['سكايلر', 'ماري', 'والتر جونيور', 'فلين', 'هولي', 'عائلة وايت', 'زوجة والتر'],
  },
  {
    image: '/breaking_bad/curated/gus.jpg',
    keywords: ['غاس', 'فرينغ', 'gustavo', 'gus fring'],
  },
  {
    image: '/breaking_bad/curated/pollos.jpg',
    keywords: ['لوس بولوس', 'pollos', 'مطعم الدجاج', 'الدجاجتان الشقيقتان'],
  },
  {
    image: '/breaking_bad/curated/jesse.jpg',
    keywords: ['جيسي', 'بينكمان', 'أندريا', 'بروك', 'جين مارغوليس', 'el camino'],
  },
  {
    image: '/breaking_bad/curated/rv.jpg',
    keywords: ['شاحنة تخييم', 'مختبر متنقل', 'الـ rv', ' rv ', 'فليتوود باوندر'],
  },
  {
    image: '/breaking_bad/curated/hat.jpg',
    keywords: ['هايزنبرغ', 'heisenberg', 'قبعة'],
  },
  {
    image: '/breaking_bad/curated/superlab.jpg',
    keywords: ['المختبر الفائق', 'superlab', 'مغسلة ملابس', 'المختبر السري'],
  },
  {
    image: '/breaking_bad/curated/blue-meth.jpg',
    keywords: ['الميث الأزرق', 'كريستال ميث', 'ميثامفيتامين', '99.1%', 'نقاء الميث'],
  },
  {
    image: '/breaking_bad/curated/desert.jpg',
    keywords: ['الصحراء', 'ألبوكركي', 'albuquerque', 'سرقة القطار'],
  },
  {
    image: '/breaking_bad/curated/walter.jpg',
    keywords: ['والتر', 'وايت', 'معلم كيمياء', 'bryan cranston'],
  },
];

function stableIndex(id: string, length: number): number {
  let hash = 0;
  for (const character of id) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }
  return hash % length;
}

export function resolveBreakingBadImage(context: BreakingBadImageContext): string {
  const searchableText = [
    context.questionText,
    context.correctAnswer,
    context.hint ?? '',
  ].join(' ').toLowerCase();

  const matchedRule = IMAGE_RULES.find((rule) =>
    rule.keywords.some((keyword) => searchableText.includes(keyword.toLowerCase())),
  );

  return matchedRule?.image ?? CURATED_IMAGES[stableIndex(context.id, CURATED_IMAGES.length)];
}