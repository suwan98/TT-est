import {LuPlusSquare} from "react-icons/lu";
import {FaRegFaceSmile} from "react-icons/fa6";
import {HiOutlineHashtag} from "react-icons/hi2";
import {useNavigate} from "react-router-dom";
import {CONFIRM_MESSAGE} from "@/constants/constants";
import Swal from "sweetalert2";

function QuestionContainerFooter() {
  const iconColor = "#c4c4c6";

  /* 첫화면으로 이동 및 로컬스토리지 데이터 초기화 */
  const navigate = useNavigate();
  const handleMoveHome = () => {
    Swal.fire({
      title: "경고",
      text: CONFIRM_MESSAGE,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",

      cancelButtonColor: "#3085d6",
      confirmButtonText: "네 처음으로 돌아갈래요!",
      cancelButtonText: "그대로 진행할게요!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
        localStorage.removeItem("totalScore");
      }
    });
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
