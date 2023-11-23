import Button from "@/components/common/Button";
import {useNavigate} from "react-router-dom";
import ShareButtons from "../Home/ShareButtons";

function Result() {
  /* 첫화면으로 이동 및 로컬스토리지 데이터 초기화 */
  const navigate = useNavigate();
  const handleMoveHome = () => {
    navigate("/");
    localStorage.removeItem("totalScore");
  };

  /* 종합점수에 따른 데이터 조건부 렌더링 */
  const totalScore = parseInt(localStorage.getItem("totalScore"), 10);
  const resultText = (() => {
    switch (totalScore) {
      case 4:
        return <div>당신은 T 군요</div>;
      case 3:
        return <div>당신은 T 80프로군요</div>;
      case 2:
        return <div>당신은 F 60프로군요</div>;
      case 1:
        return <div>당신은 F 40프로군요</div>;

      default:
        return <div> 당신은 완전히 F입니다</div>;
    }
  })();

  return (
    <>
      <div>{resultText}</div>
      <Button onClick={handleMoveHome}>처음으로 돌아가기</Button>
      <ShareButtons />
    </>
  );
}

export default Result;
