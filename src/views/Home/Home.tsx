import Button from "@/components/common/Button";
import {useNavigate} from "react-router-dom";
import ShareButtons from "./ShareButtons";
import HomeBackGround from "@/assets/img/home-background.png";
import {useRecoilValue} from "recoil";
import {themeState} from "@/recoil/theme";
import useFireStoreData from "@/hooks/useFireStoreData";

function Home() {
  /* theme 적용 */
  const theme = useRecoilValue(themeState);
  const lightTheme = "bg-[#222222] text-white hover:bg-black";
  const blackTheme = "bg-[#fff6f6] text-black hover:bg-[#ffffff]";
  const isTheme = theme === "light" ? lightTheme : blackTheme;

  /*  QuestionData 가져오기 */
  const {questions} = useFireStoreData();
  const firstPageId = questions && questions[0].id;

  /* Question 페이지로 이동 */
  const navigate = useNavigate();
  const handleMoveQuestionPage = (id: string | null) => () => {
    navigate(`/question/${id}`);
  };

  return (
    <>
      <h1 className="font-dote text-6xl">너 T야?</h1>
      <div className="py-8">
        <img
          src={HomeBackGround}
          alt="홈 이미지"
          className="object-fill max-w-[31.25rem] p-3 rounded-[4px]"
        />
      </div>
      <p className="font-dote text-2xl">6가지 문제로 알아보는 T력 테스트</p>

      <Button
        onClick={handleMoveQuestionPage(firstPageId)}
        className={`${isTheme} border-none my-6 rounded-lg p-5 font-alice font-bold shadow-2xl`}>
        T력 테스트하러 가기!
      </Button>
      <ShareButtons />
    </>
  );
}

export default Home;
