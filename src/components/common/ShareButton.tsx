import KakaoIcon from "./KakaoIcon";
import TwitterIcon from "./TwitterIcon";
import CopyIcon from "./CopyIcon";

interface IShareButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconType: "kakao" | "twitter" | "copy";
}

function ShareButton({iconType, ...restProps}: IShareButton) {
  const icons = {
    kakao: <KakaoIcon />,
    twitter: <TwitterIcon />,
    copy: <CopyIcon />,
  };

  /* 아이콘 타입에 따른 배경색 매핑 */
  const shareButtonBackGroundColor = {
    kakao: "bg-yellow-400 active:bg-yellow-600 hover:bg-yellow-500",
    twitter: "bg-blue-400 active:bg-blue-600 hover:bg-blue-500",
    copy: "bg-blue-500 active:bg-blue-700 hover:bg-blue-600",
  };

  return (
    <>
      <button
        className={`inline-flex items-center justify-center border border-transparent focus:outline-none rounded-full p-3 ${shareButtonBackGroundColor[iconType]}`}
        {...restProps}>
        {icons[iconType]}
      </button>
    </>
  );
}

export default ShareButton;
