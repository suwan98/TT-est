import Button from "@/components/common/Button";
import {useNavigate} from "react-router-dom";
import ShareButtons from "../Home/ShareButtons";
import F100 from "@/assets/img/result-image/F100.jpeg";
import TResult from "@/assets/img/result-image/T-result-image.jpg";
import {useRecoilValue} from "recoil";
import {themeState} from "@/recoil/theme";
import getScoreResult from "@/core/scoreResult";

function Result() {
  /* 첫화면으로 이동 및 로컬스토리지 데이터 초기화 */
  const navigate = useNavigate();
  const handleMoveHome = () => {
    navigate("/");
    localStorage.removeItem("totalScore");
  };

  /* 종합점수에 따른 데이터 조건부 렌더링 */
  const totalScore = parseInt(localStorage.getItem("totalScore"), 10);

  const theme = useRecoilValue(themeState);
  const lightTheme = "bg-black text-white hover:bg-[#696969]";
  const blackTheme = "bg-[#fff6f6] text-black hover:bg-[#ffffff]";
  const buttonTheme = theme === "light" ? lightTheme : blackTheme;

  const resultContent = getScoreResult({
    score: totalScore,
    TResult,
    FResult: F100,
  });

  return (
    <>
      <h1 className="font-dote text-4xl mb-12">당신은..</h1>
      <img src={resultContent.imageSrc} alt="" />
      <div className="mt-12 text-2xl text-center p-8">
        <p className="p-4 text-3xl font-bold text-rose-400 mb-4">
          {resultContent.textResult}
        </p>
        <p>{resultContent.text}</p>
      </div>

      <Button
        onClick={handleMoveHome}
        className={`${buttonTheme} border-none my-6 rounded-lg p-5 font-alice font-bold shadow-2xl`}>
        처음으로 돌아가기
      </Button>
      <ShareButtons />
    </>
  );
}

export default Result;
