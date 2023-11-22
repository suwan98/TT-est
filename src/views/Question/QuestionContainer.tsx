import useFireStoreData from "@/hooks/useFireStoreData";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import SpeechBubbleStart from "./SpeechBubbleStart";
import SpeechBubbleEnd from "./SppechBubbleEnd";
import ChoiceButton from "@/components/common/ChoiceButton";
import QuestionContainerFooter from "@/layout/QuestionContainerFooter";
import {useRecoilValue} from "recoil";
import {themeState} from "@/recoil/theme";
import numberToKorean from "@/utils/numberToKorean.js";
import {KOREAN_NUMBER_UNITS} from "@/constants/constants";

interface IQuestionContainerProps {
  currentIndex: number;
  isLastIndex: boolean | null;
}

function QuestionContainer({
  currentIndex,
  isLastIndex,
}: IQuestionContainerProps) {
  const {questionId} = useParams();
  /* 단일 질문 렌더링 */
  const {singleQuestion, fetchQuestion} = useFireStoreData();

  /* theme에 따른 Container 배경색 수정 */
  const containerTheme = useRecoilValue(themeState);
  const isDarkMode =
    containerTheme === "dark" ? "bg-[#69727a] border-none" : "bg-[#b2c7da]";

  /* 질문 로딩 시간 로직 구성 */
  useEffect(() => {
    fetchQuestion(questionId!);
  }, [questionId]);

  return (
    <>
      <div
        className={`flex flex-col items-center relative justify-center p-4 h-[40rem] w-[40rem] rounded-t-3xl border overflow-y-auto ${isDarkMode} border-b-0`}>
        <p className="font-dote text-2xl pb-4">
          {!isLastIndex
            ? `${numberToKorean(
                currentIndex + 1,
                KOREAN_NUMBER_UNITS
              )}번째 질문`
            : "마지막 질문"}
        </p>
        {singleQuestion &&
          singleQuestion.map((question) => (
            <ul key={question.id}>
              <li>
                <SpeechBubbleStart chatText={question.question} />
                <SpeechBubbleEnd chatAnswer={question.answer} />
                <div className="mt-20">
                  <ChoiceButton>{question.choices.T}</ChoiceButton>
                  <ChoiceButton>{question.choices.F}</ChoiceButton>
                </div>
              </li>
            </ul>
          ))}
        <QuestionContainerFooter />
      </div>
    </>
  );
}

export default QuestionContainer;
