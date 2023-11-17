// quiz.ts

export interface QuizOption {
    id: number;
    label: string;
    text: string;
    isCorrect: boolean;
}

export interface QuizQuestion {
    id: number;
    text: string;
    options: QuizOption[];
}

export interface Quiz {
    id: number;
    img: string;
    name: string;
    questions: QuizQuestion[];
}
