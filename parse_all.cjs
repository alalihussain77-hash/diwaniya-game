const fs = require('fs');

const code = fs.readFileSync('src/data/categories.ts', 'utf8');

// Parse category array structure
const catMatches = code.match(/id:\s*['"]([^'"]+)['"]/g);
console.log('Total id matches:', catMatches ? catMatches.length : 0);

// Let's extract each question block
const lines = code.split('\n');
let currentQ = null;
const allQuestions = [];

lines.forEach(line => {
  const idM = line.match(/id:\s*['"]([^'"]+)['"]/);
  const qM = line.match(/question:\s*['"]([^'"]+)['"]/);
  const aM = line.match(/correctAnswer:\s*['"]([^'"]+)['"]/);
  const imgM = line.match(/imageUrl:\s*['"]([^'"]+)['"]/);

  if (idM) {
    if (currentQ && currentQ.correctAnswer) {
      allQuestions.push(currentQ);
    }
    currentQ = { id: idM[1] };
  }
  if (qM && currentQ) currentQ.question = qM[1];
  if (aM && currentQ) currentQ.correctAnswer = aM[1];
  if (imgM && currentQ) currentQ.imageUrl = imgM[1];
});
if (currentQ && currentQ.correctAnswer) {
  allQuestions.push(currentQ);
}

// Filter only question IDs (skip main category IDs if they don't have correctAnswer)
const questionsOnly = allQuestions.filter(q => q.correctAnswer);
console.log('Total question items parsed:', questionsOnly.length);

fs.writeFileSync('all_parsed_questions.json', JSON.stringify(questionsOnly, null, 2));
