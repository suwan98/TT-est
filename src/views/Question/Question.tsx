import {useNavigate, useParams} from "react-router-dom";
import QuestionContainer from "./QuestionContainer";
import Button from "./../../components/common/Button";
import useFireStoreData from "@/api/useFireStoreData";
import {useEffect, useState} from "react";
import useLoadingDelay from "@/hooks/useLoadingDelay";
import Loading from "../Loading/Loading";
import LoadingResult from "../Loading/LoadingResult";

function Question() {
  const navigate = useNavigate();
  const {questionId} = useParams();

  /* 클릭 시 다음 질문으로 넘어가는 로직 구성 */
  const {questions, fetchQuestion} = useFireStoreData();

  const [currentIndex, setCurrentIndex] = useState(0);

  /* 질문 로딩 시간 로직 구성 */
  const [loading] = useLoadingDelay(true, 300);

  useEffect(() => {
    fetchQuestion(questionId!);
  }, [questionId]);

  /* 마지막 질문 상태 */
  const isLastIndex = questions && currentIndex === questions?.length - 1;
  const [loadingResult, setLoadingResut] = useState(false);
  const handleMoveResultPage = () => {
    if (!isLastIndex) {
      throw new Error("마지막 질문 선택해야겠쥐?");
    }
    setLoadingResut(true);
    setTimeout(() => {
      navigate(`/result`);
    }, 2500);
  };

  if (loading) {
    return <Loading loadingText="로봇이 질문을 운반중입니다..🤖" />;
  }

  if (loadingResult) {
    return <LoadingResult />;
  }

  return (
    <>
      <QuestionContainer
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isLastIndex={isLastIndex}
      />
      {isLastIndex && (
        <Button
          className="mt-6 border p-4 bg-[#e5e8eb] rounded-2xl text-[##888a8d] hover:bg-[#ced1d3] w-[40rem] font-semibold text-2xl"
          onClick={handleMoveResultPage}>
          분석결과 확인하기
        </Button>
      )}
    </>
  );
}

export default Question;
