import useFireStoreData from "@/api/useFireStoreData";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import SpeechBubbleStart from "./SpeechBubbleStart";
import SpeechBubbleEnd from "./SppechBubbleEnd";
import ChoiceButton from "@/components/common/ChoiceButton";
import QuestionContainerFooter from "@/layout/QuestionContainerFooter";
import {useRecoilValue} from "recoil";
import {themeState} from "@/recoil/theme";
import numberToKorean from "@/utils/numberToKorean.js";
import {KOREAN_NUMBER_UNITS} from "@/constants/constants";
import {shuffleArray} from "@/utils/shuffleArray";
import showAlert from "@/utils/showAlert";

interface IQuestionContainerProps {
  currentIndex: number;
  isLastIndex: boolean | null;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
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
  const {questionIndex, TScore, FScore} = questionState;
  const selectedQuestion = questions && questions[questionIndex];

  /* theme에 따른 Container 배경색 수정 */
  const containerTheme = useRecoilValue(themeState);
  const isDarkMode =
    containerTheme === "dark" ? "bg-[#69727a] border-none" : "bg-[#b2c7da]";

  /* 질문 로딩 시간 로직 구성 */

  /* localStorge 총합 점수 저장 */
  const totalScore = TScore - FScore;
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
      showAlert(
        "error",
        "마지막 질문입니다!",
        "분석결과 확인하기 버튼을 눌러보세요"
      );
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      navigate(`/question/${id}`);
    }
  };

  /* 무작위로 섞인 선택지들을 렌더링하는 함수 */
  const shuffleQuestionChoices = () => {
    const choices = selectedQuestion!.choices;
    const choicesKeys = Object.keys(choices);
    const shuffledKeys = shuffleArray(choicesKeys);
    return shuffledKeys.map((key) => ({key, choice: choices[key]}));
  };

  /* */

  return (
    <>
      <div
        className={`flex flex-col items-center relative justify-center p-4 h-[50rem] w-[40rem] rounded-t-3xl border overflow-y-auto ${isDarkMode} border-b-0`}>
        <p className="font-dote text-3xl mb-12">
          {!isLastIndex
            ? ` ${numberToKorean(
                currentIndex + 1,
                KOREAN_NUMBER_UNITS
              )}번째 질문`
            : "마지막 질문"}
        </p>
        {selectedQuestion && (
          <ul key={selectedQuestion.id}>
            <li>
              <SpeechBubbleStart chatText={selectedQuestion.question} />
              <SpeechBubbleEnd chatAnswer={selectedQuestion.answer} />
              <div className="mt-20">
                {shuffleQuestionChoices().map(({key, choice}) => (
                  <ChoiceButton
                    key={key}
                    onClick={handleClickChoiceButton(key, selectedQuestion.id)}>
                    {choice}
                  </ChoiceButton>
                ))}
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
