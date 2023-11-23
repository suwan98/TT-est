import {LuPlusSquare} from "react-icons/lu";
import {FaRegFaceSmile} from "react-icons/fa6";
import {HiOutlineHashtag} from "react-icons/hi2";
import {useNavigate} from "react-router-dom";
import {CONFIRM_MESSAGE} from "@/constants/constants";

function QuestionContainerFooter() {
  const iconColor = "#c4c4c6";

  /* 첫화면으로 이동 및 로컬스토리지 데이터 초기화 */
  const navigate = useNavigate();
  const handleMoveHome = () => {
    if (confirm(CONFIRM_MESSAGE)) {
      navigate("/");
      localStorage.removeItem("totalScore");
    }
  };

  return (
    <>
      <div
        className="bg-white w-full h-14 absolute bottom-0 py-6 px-8 cursor-pointer flex items-center justify-between"
        onClick={handleMoveHome}>
        <LuPlusSquare color={iconColor} size="1.5rem" />
        <div className="flex gap-2">
          <FaRegFaceSmile color={iconColor} size="1.375rem" />
          <HiOutlineHashtag color={iconColor} size="1.375rem" />
        </div>
      </div>
    </>
  );
}

export default QuestionContainerFooter;
