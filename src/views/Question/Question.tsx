import {useNavigate, useParams} from "react-router-dom";
import QuestionContainer from "./QuestionContainer";
import Button from "./../../components/common/Button";
import useFireStoreData from "@/hooks/useFireStoreData";
import {useEffect, useState} from "react";
import useLoadingDelay from "@/hooks/useLoadingDelay";
import Loading from "../Loading/Loading";

function Question() {
  const navigate = useNavigate();
  const {questionId} = useParams();

  /* 클릭 시 다음 질문으로 넘어가는 로직 구성 */
  const {questions, fetchQuestion} = useFireStoreData();

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleMoveNextQuestion = () => {
    const nextQuestionId = questions && questions[currentIndex + 1].id;
    setCurrentIndex(currentIndex + 1);
    navigate(`/question/${nextQuestionId}`);
  };

  /* 질문 로딩 시간 로직 구성 */
  const [loading] = useLoadingDelay(true, 300);

  useEffect(() => {
    fetchQuestion(questionId!);
  }, [questionId]);

  /* 마지막 질문 상태 */
  const [loadingResult, setLoadingResult] = useState(false);
  const isLastIndex = questions && currentIndex === questions?.length - 1;
  const handleMoveResultPage = () => {
    setLoadingResult(true);
    setTimeout(() => {
      navigate(`/result`);
    }, 700);
  };

  if (loading || loadingResult) {
    return (
      <Loading
        loadingText={
          !loadingResult
            ? "로봇이 질문을 운반중입니다..🤖"
            : "로봇이 질문을 분석중입니다..🤖"
        }
      />
    );
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
