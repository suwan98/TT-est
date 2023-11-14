import {useEffect, useState} from "react";
import {IQuestion} from "../@types/fireStoreDataType";
import {doc, getDoc} from "firebase/firestore/lite";
import {db} from "@/config/firebaseConfig";

const useFireStoreData = (documentNumber: number) => {
  const [data, setData] = useState<IQuestion | null>(null);

  useEffect(() => {
    async function fetchFirestoreData() {
      const docRef = doc(db, "questions", `Question${documentNumber}`);
      const docSnapShot = await getDoc(docRef);
      setData(docSnapShot.data() as IQuestion);
    }

    fetchFirestoreData();
  }, [documentNumber]);

  return data;
};

export default useFireStoreData;
