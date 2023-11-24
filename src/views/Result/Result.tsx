import Button from "@/components/common/Button";
import {useNavigate} from "react-router-dom";
import ShareButtons from "../Home/ShareButtons";
import F100 from "@/assets/img/result-image/F100.jpeg";
import {useRecoilValue} from "recoil";
import {themeState} from "@/recoil/theme";

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

  const resultContent = (() => {
    let textResult, text, imageSrc;
    switch (totalScore) {
      case 6:
      case 5:
      case 4:
        textResult = "축하드립니다 당신은 선택받은 순도 100% T입니다!!";
        text = "사람들이 혹시 로봇이냐고 묻지않나요? 자부심을 가지세요!";
        imageSrc = F100;
        break;
      case 3:
      case 2:
        textResult = "당신은 T점수가 80점입니다!";
        text =
          "아주 훌륭해요! 고난과 역경이 가득한 세상에서 논리적으로 헤쳐나가보자구요!";
        imageSrc = F100;
        break;
      case 1:
      case 0:
        textResult = "당신의 T점수는 60점입니다! ";
        text =
          "음.. 이정도면 나쁘지 않아요!  완벽한 T가 되기 위해 조금 더 노력해보는건 어떨까요?";
        imageSrc = F100;
        break;
      case -1:
      case -2:
      case -3:
        textResult = "당신은 T점수는 40점입니다!";
        text = " 조금 더 T답게 행동하도록 노력해주세요!";
        imageSrc = F100;
        break;
      case -4:
      case -5:
        textResult = "당신은 T점수가 30점이군요? ";
        text = "T답게 행동하도록 더더욱 노력하셔야합니다 이건 심각해요";
        imageSrc = F100;
        break;
      default:
        textResult = "이럴수가..😱 당신은 완전히 순도 100% F입니다,,";
        text =
          " 당신은 정말 감성 충만한 사람이네요,, 그 감성에 매몰되지 않도록 주의하길.. ";
        imageSrc = F100;
        break;
    }

    return {textResult, text, imageSrc};
  })();

  return (
    <>
      <h1 className="font-dote text-4xl mb-12">당신은..</h1>
      <img src={resultContent.imageSrc} alt="" />
      <div className="mt-12 text-2xl text-center p-8">
        <p className="p-4">{resultContent.textResult}</p>
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
