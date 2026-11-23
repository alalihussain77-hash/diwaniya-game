import { INITIAL_CATEGORIES } from '../src/data/categories';
import { get100CategoryQuestions } from '../src/data/hundredQuestionsBank';

// Comprehensive *structural* quality report. Human fact-checking is a separate step.
// QR acting games have intentionally shared prompt text; flag-identification games
// intentionally repeat "Which flag is this?" over different image-backed questions.
const approvedRepeatedPrompts = new Set([
  'gen-flags', 'gen-old-flags', 'gen-products', 'gen-cars',
  'wk-sports', 'wk-proverbs', 'wk-general', 'wk-classic', 'wk-anime',
  'wk-wrestling', 'wk-foreign-art',
]);
const preservedOriginalImageCategories = new Set([
  'gen-geography', 'spec-islamic-prophets', 'spec-islamic-sahaba',
  'spec-kuwait-general', 'spec-kuwait-restaurants', 'spec-kuwait-location',
  'spec-kuwait-cafes', 'spec-kuwait-malls', 'spec-anime-characters',
]);
const key = (value: string): string => value
  .normalize('NFKC')
  .toLowerCase()
  .replace(/[\u064b-\u065f\u0670\u0640]/g, '')
  .replace(/[أإآ]/g, 'ا')
  .replace(/ى/g, 'ي')
  .replace(/[\s؟?!،.,؛:"'()«»]/g, '');
type Result = { category: string; id: string; count: number; tiers: Record<string, number>; repeated: number; answerNotAnOption: number; short: number; };
const records: Result[] = [];
const failures: string[] = [];
const warnings: string[] = [];
const byId = new Map<string, Set<string>>();

for (const category of INITIAL_CATEGORIES.filter((c) => !c.hidden)) {
  const pool = get100CategoryQuestions(category.id, category.name);
  const questionTexts = new Set<string>();
  const questionIds = new Set<string>();
  const skipContentReview = category.id === 'gen-cars';
  let repeated = 0;
  let answerNotAnOption = 0;
  let short = 0;
  const tiers: Record<string, number> = {};
  for (const q of pool) {
    const text = String(q.question || '').trim();
    const answer = String(q.correctAnswer || '').trim();
    if (!text || !answer) failures.push(`${category.id}: missing question or answer, id=${q.id}`);
    if (questionIds.has(q.id)) failures.push(`${category.id}: duplicate question id ${q.id}`);
    questionIds.add(q.id);
    const fingerprint = category.id === 'wk-anime'
      ? key(q.questionText || text) // QR hides the actual distinct anime question
      : approvedRepeatedPrompts.has(category.id)
        ? [key(text), key(answer), q.imageUrl || q.answerImageUrl || ''].join('|')
        : key(text);
    if (questionTexts.has(fingerprint)) {
      repeated++;
      if (!skipContentReview) failures.push(`${category.id}: repeated question: ${text.slice(0, 80)}`);
    }
    questionTexts.add(fingerprint);
    if (text.length < 18 && !approvedRepeatedPrompts.has(category.id)) short++;
    if (q.options && q.options.length > 0 && !q.options.some((option) => key(option) === key(answer))) {
      answerNotAnOption++;
    }
    tiers[String(q.points)] = (tiers[String(q.points)] || 0) + 1;
  }

  // User explicitly excludes cars from the 100-question requirement.
  if (!skipContentReview && pool.length !== 100) failures.push(`${category.id}: ${pool.length} questions; expected exactly 100`);
  if (short) warnings.push(`${category.id}: ${short} very short question texts`);
  if (answerNotAnOption && !skipContentReview) failures.push(`${category.id}: ${answerNotAnOption} answers missing from option lists`);
  const outOfTier = Object.keys(tiers).filter((p) => !['200', '400', '600'].includes(p));
  if (outOfTier.length && !skipContentReview) failures.push(`${category.id}: unsupported point tiers: ${outOfTier.join(', ')}`);
  if (preservedOriginalImageCategories.has(category.id)) {
    for (const original of category.questions.slice(0, 5)) {
      if (!original.imageUrl && !original.answerImageUrl) continue;
      const matched = pool.find(q => q.imageUrl === original.imageUrl &&
        q.answerImageUrl === original.answerImageUrl &&
        q.hideImageUntilAnswer === original.hideImageUntilAnswer);
      if (!matched) failures.push(`${category.id}: an original image reference or display setting changed`);
    }
  }
  records.push({ category: category.name, id: category.id, count: pool.length, tiers, repeated, answerNotAnOption, short });
  if (!approvedRepeatedPrompts.has(category.id)) byId.set(category.id, questionTexts);
}

for (const [aId, aSet] of byId) {
  if (aSet.size < 20) continue;
  for (const [bId, bSet] of byId) {
    if (aId >= bId || bSet.size < 20) continue;
    const intersection = [...aSet].filter((q) => bSet.has(q)).length;
    if (intersection >= 20 && intersection / Math.min(aSet.size, bSet.size) >= 0.7) {
      warnings.push(`category overlap: ${aId} and ${bId} share ${intersection} identical question texts`);
    }
  }
}
console.log('[question-audit] 41 playable-category structural report');
console.log(JSON.stringify(records, null, 2));
console.log('[question-audit] warnings: ' + warnings.length);
warnings.forEach((issue) => console.warn('  WARN ' + issue));
if (failures.length) {
  failures.forEach((issue) => console.error('  ERROR ' + issue));
  process.exitCode = 1;
} else {
  console.log('[question-audit] hard structural checks passed; factual review still required');
}
