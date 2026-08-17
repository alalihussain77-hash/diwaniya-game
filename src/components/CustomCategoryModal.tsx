import React, { useState } from 'react';
import { Category, CategoryType, Question } from '../types';
import { PlusCircle, X, Sparkles, Plus, Check } from 'lucide-react';
import { sound } from '../utils/sound';

interface CustomCategoryModalProps {
  onAddCategory: (category: Category) => void;
  onClose: () => void;
}

export const CustomCategoryModal: React.FC<CustomCategoryModalProps> = ({
  onAddCategory,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [type, setType] = useState<CategoryType>('specific');
  const [description, setDescription] = useState('');
  
  // 5 question inputs
  const [q1, setQ1] = useState({ question: '', optionA: '', optionB: '', optionC: '', optionD: '', answer: '' });
  const [q2, setQ2] = useState({ question: '', optionA: '', optionB: '', optionC: '', optionD: '', answer: '' });
  const [q3, setQ3] = useState({ question: '', optionA: '', optionB: '', optionC: '', optionD: '', answer: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    sound.playClick();

    const questions: Question[] = [
      {
        id: `custom-${Date.now()}-200a`,
        points: 200,
        question: q1.question || `200 Pts Trivia Question (1) for ${name}`,
        options: q1.optionA ? [q1.optionA, q1.optionB, q1.optionC, q1.optionD].filter(Boolean) : undefined,
        correctAnswer: q1.answer || q1.optionA || 'Sample Answer 1',
      },
      {
        id: `custom-${Date.now()}-200b`,
        points: 200,
        question: `200 Pts Trivia Question (2) for ${name}`,
        correctAnswer: 'Sample Answer 1b',
      },
      {
        id: `custom-${Date.now()}-300a`,
        points: 300,
        question: q2.question || `300 Pts Trivia Question (1) for ${name}`,
        options: q2.optionA ? [q2.optionA, q2.optionB, q2.optionC, q2.optionD].filter(Boolean) : undefined,
        correctAnswer: q2.answer || q2.optionA || 'Sample Answer 2',
      },
      {
        id: `custom-${Date.now()}-300b`,
        points: 300,
        question: `300 Pts Trivia Question (2) for ${name}`,
        correctAnswer: 'Sample Answer 2b',
      },
      {
        id: `custom-${Date.now()}-400a`,
        points: 400,
        question: q3.question || `400 Pts Trivia Question (1) for ${name}`,
        options: q3.optionA ? [q3.optionA, q3.optionB, q3.optionC, q3.optionD].filter(Boolean) : undefined,
        correctAnswer: q3.answer || q3.optionA || 'Sample Answer 3',
      },
      {
        id: `custom-${Date.now()}-400b`,
        points: 400,
        question: `400 Pts Trivia Question (2) for ${name}`,
        correctAnswer: 'Sample Answer 3b',
      },
      {
        id: `custom-${Date.now()}-400a`,
        points: 400,
        question: `400 Pts Advanced Question (1) for ${name}`,
        correctAnswer: 'Sample Answer 4a',
      },
      {
        id: `custom-${Date.now()}-400b`,
        points: 400,
        question: `400 Pts Advanced Question (2) for ${name}`,
        correctAnswer: 'Sample Answer 4b',
      },
      {
        id: `custom-${Date.now()}-500a`,
        points: 500,
        question: `500 Pts Master Question (1) for ${name}`,
        correctAnswer: 'Sample Answer 5a',
      },
      {
        id: `custom-${Date.now()}-500b`,
        points: 500,
        question: `500 Pts Master Question (2) for ${name}`,
        correctAnswer: 'Sample Answer 5b',
      },
      {
        id: `custom-${Date.now()}-600a`,
        points: 600,
        question: `600 Pts Final Challenge Question (1) for ${name}`,
        correctAnswer: 'Sample Answer 6a',
      },
      {
        id: `custom-${Date.now()}-600b`,
        points: 600,
        question: `600 Pts Final Challenge Question (2) for ${name}`,
        correctAnswer: 'Sample Answer 6b',
      },
    ];

    const newCategory: Category = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      type: type,
      iconName: type === 'general' ? 'Brain' : 'Film',
      description: description || 'Custom user created category.',
      color: type === 'general' ? 'from-blue-600 to-indigo-600' : 'from-amber-600 to-rose-600',
      bgGradient: 'bg-gradient-to-br from-amber-500/10 to-indigo-500/10 border-amber-500/30',
      tags: ['Custom', name],
      questions: questions,
    };

    onAddCategory(newCategory);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-6 space-y-5 relative max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-base">
            <PlusCircle className="w-5 h-5" />
            <span>Create Custom Category</span>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="space-y-1">
            <label className="font-semibold text-slate-300">Category Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Friends TV Show, Anime Legends, Kuwait History"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-slate-300">Category Type</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setType('general')}
                className={`py-2 px-3 rounded-xl border font-bold transition ${
                  type === 'general' ? 'bg-blue-600 text-white border-blue-400' : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                General Category
              </button>
              <button
                type="button"
                onClick={() => setType('specific')}
                className={`py-2 px-3 rounded-xl border font-bold transition ${
                  type === 'specific' ? 'bg-amber-600 text-white border-amber-400' : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                Specific Category
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-slate-300">Short Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of questions in this category"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Quick Question 1 */}
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 space-y-2">
            <span className="font-bold text-amber-400 block">Question 1 (100 Pts)</span>
            <input
              type="text"
              value={q1.question}
              onChange={(e) => setQ1({ ...q1, question: e.target.value })}
              placeholder="Question text..."
              className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white"
            />
            <input
              type="text"
              value={q1.answer}
              onChange={(e) => setQ1({ ...q1, answer: e.target.value })}
              placeholder="Correct Answer..."
              className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-emerald-400 font-semibold"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Add Custom Category to Pool</span>
          </button>
        </form>
      </div>
    </div>
  );
};
