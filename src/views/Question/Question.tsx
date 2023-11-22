import {useNavigate, useParams} from "react-router-dom";
import QuestionContainer from "./QuestionContainer";
import Button from "./../../components/common/Button";
import {useRef} from "react";
import useFireStoreData from "@/hooks/useFireStoreData";

function Question() {
  const navigate = useNavigate();
  const {questionId} = useParams();

  /* 클릭 시 다음 질문으로 넘어가는 로직 구성 */
  const {questions} = useFireStoreData();
  const getCurrentQuestionIndex = (id) => {
    return questions?.findIndex((question) => question.id === id);
  };

  const handleMoveNextQuestion = () => {
    const currentIndex = getCurrentQuestionIndex(questionId);
    const nextQuestionId = questions[currentIndex + 1].id;
    navigate(`/question/${nextQuestionId}`);
  };

  return (
    <>
      <QuestionContainer />
      <Button onClick={handleMoveNextQuestion}>다음 질문으로 이동!</Button>
    </>
  );
}

export default Question;
