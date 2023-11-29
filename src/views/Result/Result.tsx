import Button from "@/components/common/Button";
import {useNavigate} from "react-router-dom";
import F100 from "@/assets/img/result-image/F100.jpeg";
import TResult from "@/assets/img/result-image/T-result-image.jpg";
import {useRecoilValue} from "recoil";
import {themeState} from "@/recoil/theme";
import getScoreResult from "@/core/scoreResult";
import ShareButton from "@/components/common/ShareButton";
import Swal from "sweetalert2";

function Result() {
  /* 첫화면으로 이동 및 로컬스토리지 데이터 초기화 */
  const navigate = useNavigate();
  const handleMoveHome = () => {
    navigate("/");
    localStorage.removeItem("totalScore");
  };

  /* 종합점수에 따른 데이터 조건부 렌더링 */
  const totalScore = parseInt(localStorage.getItem("totalScore")!, 10);

  const theme = useRecoilValue(themeState);
  const lightTheme = "bg-black text-white hover:bg-[#696969]";
  const blackTheme = "bg-[#fff6f6] text-black hover:bg-[#ffffff]";
  const buttonTheme = theme === "light" ? lightTheme : blackTheme;

  const resultContent = getScoreResult({
    score: totalScore,
    TResult,
    FResult: F100,
  });

  /* 카카오톡 링크 결과 공유 */
  const handleShareResultKaKao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(import.meta.env.VITE_KAKAO_APIKEY);
      }
      /* 카카오톡 링크 보내기 */
      kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "결과 공유",
          description: resultContent.text,
          imageUrl: resultContent.imageSrc,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      });
    }
  };

  /* 트위터 공유 */
  const handleShareResultTwitter = () => {
    const link = window.location.href;
    const twiiterIntent = `https://twitter.com/intent/tweet?text=custom%20text&url=${link}`;
    window.open(twiiterIntent, "_blank");
  };

  /* 결과물 복사 */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resultContent.text);
      Swal.fire({
        title: "결과가 복사되었습니다",
        timer: 3000,
        confirmButtonText: "확인",
        confirmButtonColor: "#2563eb",
      });
    } catch (error) {
      console.log("🎆 error:", error);
    }
  };

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
      <div className="flex gap-3">
        <ShareButton iconType="kakao" onClick={handleShareResultKaKao} />
        <ShareButton iconType="twitter" onClick={handleShareResultTwitter} />
        <ShareButton iconType="copy" onClick={handleCopy} />
      </div>
    </>
  );
}

export default Result;
