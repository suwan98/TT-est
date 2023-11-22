import {useNavigate, useParams} from "react-router-dom";
import QuestionContainer from "./QuestionContainer";
import Button from "./../../components/common/Button";
import useFireStoreData from "@/hooks/useFireStoreData";
import {useEffect} from "react";
import useLoadingDelay from "@/hooks/useLoadingDelay";
import Loading from "../Loading/Loading";

function Question() {
  const navigate = useNavigate();
  const {questionId} = useParams();

  /* 클릭 시 다음 질문으로 넘어가는 로직 구성 */
  const {questions, fetchQuestion} = useFireStoreData();
  const getCurrentQuestionIndex = (id: string) => {
    return questions?.findIndex((question) => question.id === id);
  };

  const currentIndex = getCurrentQuestionIndex(questionId!);
  const handleMoveNextQuestion = () => {
    const nextQuestionId = questions && questions[currentIndex! + 1].id;
    navigate(`/question/${nextQuestionId}`);
  };

  /* 질문 로딩 시간 로직 구성 */
  const [loading] = useLoadingDelay(true);

  useEffect(() => {
    fetchQuestion(questionId!);
  }, [questionId]);

  /* 마지막 질문 상태 */
  const isLastIndex = questions && currentIndex === questions?.length - 1;
  const handleMoveResultPage = () => {
    // todo : Result 페이지 이동시 로딩 스피너 및 시간 (2초?) 구현
    navigate("/result");
  };

  if (loading) {
    return <Loading loadingText="로봇이 질문을 운반중입니다..🤖" />;
  }

  return (
    <>
      <QuestionContainer
        currentIndex={currentIndex!}
        isLastIndex={isLastIndex}
      />
      {isLastIndex ? (
        <Button
          className="mt-6 border p-4 bg-[#e5e8eb] rounded-2xl text-[##888a8d] hover:bg-[#ced1d3] w-[40rem] font-semibold text-2xl"
          onClick={handleMoveResultPage}>
          분석결과 확인하기
        </Button>
      ) : (
        <Button className="mt-6" onClick={handleMoveNextQuestion}>
          다음 질문으로 이동!
        </Button>
      )}
    </>
  );
}

export default Question;
