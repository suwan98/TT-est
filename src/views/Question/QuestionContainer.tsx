import useFireStoreData from "@/hooks/useFireStoreData";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import SpeechBubbleStart from "./SpeechBubbleStart";
import SpeechBubbleEnd from "./SppechBubbleEnd";
import ChoiceButton from "@/components/common/ChoiceButton";

function QuestionContainer() {
  const {questionId} = useParams();
  console.log(questionId);
  /* 단일 질문 렌더링 */
  const {singleQuestion, fetchQuestion} = useFireStoreData();
  useEffect(() => {
    fetchQuestion(questionId!);
  }, [questionId]);

  console.log(singleQuestion);

  return (
    <>
      <div
        className={`flex items-center justify-center p-4 h-[40rem] w-[40rem] rounded-3xl border overflow-y-auto bg-[#b2c7da]`}>
        {singleQuestion &&
          singleQuestion.map((question) => (
            <ul key={question.id}>
              <SpeechBubbleStart chatText={question.question} />
              <SpeechBubbleEnd chatAnswer={question.answer} />
              <ChoiceButton>{question.choices[0]}</ChoiceButton>
              <ChoiceButton>{question.choices[1]}</ChoiceButton>
            </ul>
          ))}
      </div>
    </>
  );
}

export default QuestionContainer;
