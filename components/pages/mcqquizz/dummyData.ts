export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

type QuestionKey = keyof typeof questions;

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the finance capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "Mumbai",
  },
  {
    id: 2,
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Euro", "Pound"],
    answer: "Yen",
  },
  {
    id: 3,
    question: "What is the largest country in the world?",
    options: ["Russia", "Canada", "China", "USA"],
    answer: "Russia",
  },
  {
    id: 4,
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "San Marino", "Malta"],
    answer: "Vatican City",
  },
  {
    id: 5,
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile",
  },
  {
    id: 6,
    question: "What is the largest country in the world?",
    options: ["Russia", "Canada", "China", "USA"],
    answer: "Russia",
  },
  {
    id: 7,
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "San Marino", "Malta"],
    answer: "Vatican City",
  },
  {
    id: 8,
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile",
  },
  {
    id: 9,
    question: "Who is the CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Mark Zuckerberg", "Bill Gates"],
    answer: "Elon Musk",
  },
  {
    id: 10,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "Delhi",
  },
];
