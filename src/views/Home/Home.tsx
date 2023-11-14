import {IQuestion} from "@/@types/fireStoreDataType";
import {db} from "@/config/firebaseConfig";
import {doc, getDoc} from "firebase/firestore/lite";
import {useEffect, useState} from "react";

function Home() {
  const [data, setData] = useState<IQuestion | null>(null);

  useEffect(() => {
    async function fetchFirestoreData() {
      const docRef = doc(db, "questions", "DQvuxYqoAulmohe8dLkd");
      const docSnapShot = await getDoc(docRef);
      setData(docSnapShot.data() as IQuestion);
    }

    fetchFirestoreData();
  }, []);

  console.log(data);

  return (
    <>
      <h1>너 T야?</h1>
      <p>6가지 문제로 알아보는 T력 테스트</p>
    </>
  );
}

export default Home;
