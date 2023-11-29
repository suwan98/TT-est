import Button from "@/components/common/Button";
import {useNavigate} from "react-router-dom";
import HomeBackGround from "@/assets/img/home-background.png";
import {useRecoilValue} from "recoil";
import {themeState} from "@/recoil/theme";
import useFireStoreData from "@/api/useFireStoreData";
import ShareButton from "@/components/common/ShareButton";
import NotFound from "../404/NotFound";
import Swal from "sweetalert2";

function Home() {
  /* theme 적용 */
  const theme = useRecoilValue(themeState);
  const lightTheme = "bg-black text-white hover:bg-[#696969]";
  const blackTheme = "bg-[#fff6f6] text-black hover:bg-[#ffffff]";
  const buttonTheme = theme === "light" ? lightTheme : blackTheme;

  /*  QuestionData 가져오기 */
  const {questions} = useFireStoreData();
  const firstPageId = questions && questions[0].id;

  /* Question 페이지로 이동 */
  const navigate = useNavigate();
  const handleMoveQuestionPage = (id: string | null) => () => {
    navigate(`/question/${id}`);
  };

  /* 카카오톡 링크  공유 */
  const handleShareResultKaKao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(import.meta.env.VITE_KAKAO_APIKEY);
      }
      /* 카카오톡 링크 보내기 */
      kakao.Share.sendScrap({
        requestUrl: "http://localhost:3000",
        templateId: 101361,
      });
    }
  };

  /* 트위터 공유 */
  const handleShareResultTwitter = () => {
    const link = window.location.href;
    const twiiterIntent = `https://twitter.com/intent/tweet?text=custom%20text&url=${link}`;
    window.open(twiiterIntent, "_blank");
  };

  /* Copy 버튼 클릭 시 링크 복사 */
  const handleCopyURL = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      Swal.fire({
        title: "링크가 복사되었습니다",
        timer: 3000,
        confirmButtonText: "확인",
        confirmButtonColor: "#2563eb",
      });
    } catch (error) {
      return <NotFound />;
    }
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
        className={`${buttonTheme} border-none my-6 rounded-lg p-5 font-alice font-bold shadow-2xl`}>
        T력 테스트하러 가기!
      </Button>
      <div className="flex gap-3">
        <ShareButton iconType="kakao" onClick={handleShareResultKaKao} />
        <ShareButton iconType="twitter" onClick={handleShareResultTwitter} />
        <ShareButton iconType="copy" onClick={handleCopyURL} />
      </div>
    </>
  );
}

export default Home;
