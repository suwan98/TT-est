import useFireStoreData from "@/hooks/useFireStoreData";

function Home() {
  const data = useFireStoreData(1);

  return (
    <>
      <h1>너 T야?</h1>
      <p>6가지 문제로 알아보는 T력 테스트</p>
      {data?.question}
    </>
  );
}

export default Home;
