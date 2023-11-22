import {useNavigate, useParams} from "react-router-dom";
import QuestionContainer from "./QuestionContainer";
import Button from "./../../components/common/Button";
import useFireStoreData from "@/hooks/useFireStoreData";

function Question() {
  const navigate = useNavigate();
  const {questionId} = useParams();

  /* 클릭 시 다음 질문으로 넘어가는 로직 구성 */
  const {questions} = useFireStoreData();
  const getCurrentQuestionIndex = (id: string) => {
    return questions?.findIndex((question) => question.id === id);
  };

  const currentIndex = getCurrentQuestionIndex(questionId!);
  const handleMoveNextQuestion = () => {
    const nextQuestionId = questions && questions[currentIndex! + 1].id;
    navigate(`/question/${nextQuestionId}`);
  };

  /* 마지막 질문 상태 */
  const isLastIndex = questions && currentIndex === questions?.length - 1;
  const handleMoveResultPage = () => {
    // todo : Result 페이지 이동시 로딩 스피너 및 시간 (2초?) 구현
    navigate("/result");
  };

  return (
    <>
      <QuestionContainer />
      {isLastIndex ? (
        <Button className="mt-6" onClick={handleMoveResultPage}>
          최종 결과보기
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
