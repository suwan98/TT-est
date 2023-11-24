import useFireStoreData from "@/hooks/useFireStoreData";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import SpeechBubbleStart from "./SpeechBubbleStart";
import SpeechBubbleEnd from "./SppechBubbleEnd";
import ChoiceButton from "@/components/common/ChoiceButton";
import QuestionContainerFooter from "@/layout/QuestionContainerFooter";
import {useRecoilValue} from "recoil";
import {themeState} from "@/recoil/theme";
import numberToKorean from "@/utils/numberToKorean.js";
import {KOREAN_NUMBER_UNITS} from "@/constants/constants";
import Swal from "sweetalert2";

interface IQuestionContainerProps {
  currentIndex: number;
  isLastIndex: boolean | null;
  setCurrentIndex: () => void;
}

interface QuestionState {
  [key: string]: number;
  questionIndex: number;
}

function QuestionContainer({
  currentIndex,
  isLastIndex,
  setCurrentIndex,
}: IQuestionContainerProps) {
  /* 전체 질문 렌더링 */
  const {questions} = useFireStoreData();
  const [questionState, setQuestionState] = useState<QuestionState>({
    FScore: 0,
    TScore: 0,
    questionIndex: 0,
  });

  /* 구조분해할당 */
  const {questionIndex} = questionState;

  /* theme에 따른 Container 배경색 수정 */
  const containerTheme = useRecoilValue(themeState);
  const isDarkMode =
    containerTheme === "dark" ? "bg-[#69727a] border-none" : "bg-[#b2c7da]";

  /* 질문 로딩 시간 로직 구성 */

  /* localStorge 총합 점수 저장 */
  const totalScore = questionState.TScore - questionState.FScore;
  useEffect(() => {
    localStorage.setItem("totalScore", totalScore.toString());
  }, [totalScore]);

  /* 버튼 클릭시 점수 추가 및 다음 질문으로 이동 */
  const navigate = useNavigate();
  const handleClickChoiceButton = (type: string, id: string) => () => {
    setQuestionState((prevState) => ({
      ...prevState,
      [`${type}Score`]: prevState[`${type}Score`] + 1,
      questionIndex: prevState.questionIndex + 1,
    }));

    /*  마지막 질문인 경우 totalScore만 증가하고 다른 페이지로 이동하지 않음 */
    if (isLastIndex) {
      Swal.fire({
        icon: "error",
        title: "마지막 질문입니다!",
        customClass: {
          confirmButton: "bg-[#759cbe]",
        },
      });
      return;
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      navigate(`/question/${id}`);
    }
  };

  return (
    <>
      <div
        className={`flex flex-col items-center relative justify-center p-4 h-[40rem] w-[40rem] rounded-t-3xl border overflow-y-auto ${isDarkMode} border-b-0`}>
        <p className="font-dote text-2xl pb-4">
          {!isLastIndex
            ? ` ${numberToKorean(
                currentIndex + 1,
                KOREAN_NUMBER_UNITS
              )}번째 질문`
            : "마지막 질문"}
        </p>
        {questions && questions[questionIndex] && (
          <ul key={questions[questionIndex].id}>
            <li>
              <SpeechBubbleStart chatText={questions[questionIndex].question} />
              <SpeechBubbleEnd chatAnswer={questions[questionIndex].answer} />
              <div className="mt-20">
                <ChoiceButton
                  onClick={handleClickChoiceButton(
                    "T",
                    questions[questionIndex].id
                  )}>
                  {questions[questionIndex].choices.T}
                </ChoiceButton>
                <ChoiceButton
                  onClick={handleClickChoiceButton(
                    "F",
                    questions[questionIndex].id
                  )}>
                  {questions[questionIndex].choices.F}
                </ChoiceButton>
              </div>
            </li>
          </ul>
        )}
        <QuestionContainerFooter />
      </div>
    </>
  );
}

export default QuestionContainer;
