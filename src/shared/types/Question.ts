export interface Answer {
  text: string;
  isCorrect: boolean;
  isChecked?: boolean;
}

export interface Question {
  isPassed?: boolean;
  number: number;
  question: string;
  answers: Answer[];
}