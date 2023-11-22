import useFireStoreData from "@/hooks/useFireStoreData";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import SpeechBubbleStart from "./SpeechBubbleStart";
import SpeechBubbleEnd from "./SppechBubbleEnd";
import ChoiceButton from "@/components/common/ChoiceButton";
import QuestionContainerFooter from "@/layout/QuestionContainerFooter";

function QuestionContainer() {
  const {questionId} = useParams();
  /* 단일 질문 렌더링 */
  const {singleQuestion, fetchQuestion} = useFireStoreData();

  /* 질문 로딩 시간 로직 구성 */
  useEffect(() => {
    fetchQuestion(questionId!);
  }, [questionId]);

  return (
    <>
      <div
        className={`flex flex-col items-center relative justify-center p-4 h-[40rem] w-[40rem] rounded-t-3xl border overflow-y-auto bg-[#b2c7da] border-b-0`}>
        {singleQuestion &&
          singleQuestion.map((question) => (
            <ul key={question.id}>
              <SpeechBubbleStart chatText={question.question} />
              <SpeechBubbleEnd chatAnswer={question.answer} />
              <div className="mt-20">
                <ChoiceButton>{question.choices[0]}</ChoiceButton>
                <ChoiceButton>{question.choices[1]}</ChoiceButton>
              </div>
            </ul>
          ))}
        <QuestionContainerFooter />
      </div>
    </>
  );
}

export default QuestionContainer;
