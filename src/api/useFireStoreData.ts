import {useEffect, useState} from "react";
import {IQuestion} from "../types/fireStoreDataType";
import {collection, doc, getDoc, getDocs} from "firebase/firestore/lite";
import {db} from "@/config/firebaseConfig";
import {QUESTIONS} from "@/constants/constants";

const useFireStoreData = () => {
  const [questions, setQuestions] = useState<IQuestion[] | null>(null);
  const [singleQuestion, setSingleQuestion] = useState<IQuestion[] | null>(
    null
  );

  /* FireStore Data 전체 가져오기 */
  const fetchAllQuestions = async () => {
    const questionColleciton = collection(db, QUESTIONS);
    const questionSnapShot = await getDocs(questionColleciton);
    const questions = questionSnapShot.docs.map((doc) => ({
      id: doc.id,
      question: doc.data().question,
      choices: doc.data().choices,
      answer: doc.data().answer,
    }));
    setQuestions(questions);
  };

  const fetchQuestion = async (id: string) => {
    const questionDocument = doc(db, QUESTIONS, id);
    const questionSnapShot = await getDoc(questionDocument);
    questionSnapShot.exists()
      ? setSingleQuestion([
          {
            id: questionSnapShot.id,
            question: questionSnapShot.data().question,
            choices: questionSnapShot.data().choices,
            answer: questionSnapShot.data().answer,
          },
        ])
      : null;
  };

  useEffect(() => {
    fetchAllQuestions();
  }, []);

  return {
    fetchAllQuestions,
    fetchQuestion,
    questions,
    singleQuestion,
  };
};

export default useFireStoreData;
