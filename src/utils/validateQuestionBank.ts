type RecordLike = Record<string, unknown>;

function isRecord(value: unknown): value is RecordLike {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function requiredString(
  value: RecordLike,
  field: string,
  location: string,
  errors: string[],
): void {
  if (typeof value[field] !== 'string' || value[field].trim() === '') {
    errors.push(`${location}.${field} must be a non-empty string`);
  }
}

export function validateQuestionBank(entries: unknown, source = 'question bank'): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();

  if (!Array.isArray(entries)) {
    return [`${source} must be an array`];
  }
  if (entries.length === 0) {
    return [`${source} must contain at least one question`];
  }

  entries.forEach((entry, index) => {
    const location = `${source}[${index}]`;
    if (!isRecord(entry)) {
      errors.push(`${location} must be an object`);
      return;
    }

    requiredString(entry, 'id', location, errors);
    requiredString(entry, 'question', location, errors);
    requiredString(entry, 'correctAnswer', location, errors);

    if (typeof entry.id === 'string' && entry.id.trim() !== '') {
      if (ids.has(entry.id)) {
        errors.push(`${location}.id duplicates "${entry.id}"`);
      }
      ids.add(entry.id);
    }

    if (typeof entry.points !== 'number' || !Number.isFinite(entry.points) || entry.points <= 0) {
      errors.push(`${location}.points must be a positive finite number`);
    }

    if (entry.options !== undefined) {
      if (
        !Array.isArray(entry.options) ||
        entry.options.some((option) => typeof option !== 'string' || option.trim() === '')
      ) {
        errors.push(`${location}.options must be an array of non-empty strings`);
      }
    }
  });

  return errors;
}

export function validateCategories(categories: unknown, source = 'categories'): string[] {
  const errors: string[] = [];
  const categoryIds = new Set<string>();
  const questionIds = new Set<string>();
  let generalCount = 0;
  let specificCount = 0;

  if (!Array.isArray(categories)) {
    return [`${source} must be an array`];
  }
  if (categories.length === 0) {
    return [`${source} must contain at least one category`];
  }

  categories.forEach((category, index) => {
    const location = `${source}[${index}]`;
    if (!isRecord(category)) {
      errors.push(`${location} must be an object`);
      return;
    }

    requiredString(category, 'id', location, errors);
    requiredString(category, 'name', location, errors);
    requiredString(category, 'type', location, errors);
    requiredString(category, 'iconName', location, errors);
    requiredString(category, 'description', location, errors);
    requiredString(category, 'color', location, errors);
    requiredString(category, 'bgGradient', location, errors);

    if (typeof category.id === 'string' && category.id.trim() !== '') {
      if (categoryIds.has(category.id)) {
        errors.push(`${location}.id duplicates "${category.id}"`);
      }
      categoryIds.add(category.id);
    }

    if (category.type === 'general') {
      generalCount += 1;
    } else if (category.type === 'specific') {
      specificCount += 1;
    } else if (typeof category.type === 'string' && category.type.trim() !== '') {
      errors.push(`${location}.type must be "general" or "specific"`);
    }

    if (!Array.isArray(category.tags) || category.tags.some((tag) => typeof tag !== 'string')) {
      errors.push(`${location}.tags must be an array of strings`);
    }

    errors.push(...validateQuestionBank(category.questions, `${location}.questions`));
    if (Array.isArray(category.questions)) {
      category.questions.forEach((question, questionIndex) => {
        if (!isRecord(question) || typeof question.id !== 'string' || question.id.trim() === '') return;
        if (questionIds.has(question.id)) {
          errors.push(`${location}.questions[${questionIndex}].id duplicates "${question.id}" across categories`);
        }
        questionIds.add(question.id);
      });
    }
  });

  if (generalCount < 4) {
    errors.push(`${source} must contain at least 4 general categories; found ${generalCount}`);
  }
  if (specificCount < 4) {
    errors.push(`${source} must contain at least 4 specific categories; found ${specificCount}`);
  }

  return errors;
}