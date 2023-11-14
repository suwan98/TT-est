import Button from "@/components/common/Button";
import {useNavigate} from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleMoveQuestionPage = () => {
    navigate("/question");
  };

  return (
    <>
      <h1>너 T야?</h1>
      <p>6가지 문제로 알아보는 T력 테스트</p>
      <Button onClick={handleMoveQuestionPage}>T력 테스트하러 가기!</Button>
    </>
  );
}

export default Home;
