import {useEffect, useState} from "react";
import {IQuestion} from "../types/fireStoreDataType";
import {collection, getDocs} from "firebase/firestore/lite";
import {db} from "@/config/firebaseConfig";

const useFireStoreData = () => {
  const [questions, setQuestions] = useState<IQuestion | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionCollection = collection(db, "questions");
      const questionSnapShot = await getDocs(questionCollection);
      const questions = questionSnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(questions);
    };
    fetchQuestions();
  }, []);

  return questions;
};

export default useFireStoreData;
