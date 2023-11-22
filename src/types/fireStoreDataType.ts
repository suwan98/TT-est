export interface IQuestion {
  question: string;
  choices: {
    T: string;
    F: string;
  };
  answer: string;
  id: string;
}
