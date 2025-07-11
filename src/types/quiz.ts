export interface Question {
  id: string;
  question: string;
  options: string[];
  correct_answer: string;
  narrative: string;
  category: string;
}

export interface Narrative {
  id: string;
  title: string;
  content: string;
  questions: Question[];
}
