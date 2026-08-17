const fs = require('fs');

const code = fs.readFileSync('src/data/categories.ts', 'utf8');

// Match all question objects
const regex = /{\s*id:\s*['"]([^'"]+)['"][\s\S]*?question:\s*['"]([^'"]+)['"][\s\S]*?correctAnswer:\s*['"]([^'"]+)['"][\s\S]*?imageUrl:\s*['"]([^'"]+)['"][\s\S]*?}/g;

let match;
const questions = [];
while ((match = regex.exec(code)) !== null) {
  questions.push({
    id: match[1],
    question: match[2],
    answer: match[3],
    imageUrl: match[4]
  });
}

console.log(`Found ${questions.length} questions in categories.ts`);
fs.writeFileSync('parsed_questions.json', JSON.stringify(questions, null, 2));
