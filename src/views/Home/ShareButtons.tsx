import ShareButton from "@/components/common/ShareButton";

function ShareButtons() {
  return (
    <>
      <div className="flex gap-3">
        <ShareButton iconType="kakao" />
        <ShareButton iconType="twitter" />
        <ShareButton iconType="copy" />
      </div>
    </>
  );
}

export default ShareButtons;
