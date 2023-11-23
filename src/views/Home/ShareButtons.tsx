import ShareButton from "@/components/common/ShareButton";
import NotFound from "../404/NotFound";
import {toast} from "react-toastify";

function ShareButtons() {
  /* Copy 버튼 클릭 시 링크 복사 */
  const handleCopyURL = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      toast.success("현재 링크가 복사되었습니다 📝", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      return <NotFound error={error} />;
    }
  };

  return (
    <>
      <div className="flex gap-3">
        <ShareButton iconType="kakao" />
        <ShareButton iconType="twitter" />
        <ShareButton iconType="copy" onClick={handleCopyURL} />
      </div>
    </>
  );
}

export default ShareButtons;
