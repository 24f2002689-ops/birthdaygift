export type QuestionType =
  | 'multiple-choice'
  | 'image-choice'
  | 'true-false'
  | 'quote'
  | 'number'
  | 'ordering'
  | 'matching';

export type Question = {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  answer?: any;
  explanation?: string | null;
  correctMessage?: string;
  incorrectMessage?: string;
  image?: string | null;
  audio?: string | null;
};

export type Memory = {
  id: string;
  title: string;
  date: string;
  category: string;
  image?: string | null;
  images?: string[];
  video?: string | null;
  caption?: string | null;
  description?: string | null;
  quote?: string | null;
  featured?: boolean;
};

export type Incident = {
  id: string;
  caseNumber: string;
  title: string;
  date: string;
  status: string;
  image?: string | null;
  video?: string | null;
  description?: string | null;
  evidence?: any[];
  question?: string | null;
  options?: string[];
  answer?: any;
};

export type Letter = {
  id: string;
  title: string;
  subtitle?: string | null;
  locked?: boolean;
  unlockRequirement?: string | null;
  content?: string | null;
  image?: string | null;
  theme?: string | null;
};
