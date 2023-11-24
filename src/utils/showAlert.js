import Swal from "sweetalert2";

const showAlert = (icon, title) => {
  Swal.fire({
    icon: icon,
    title: title,
    customClass: {
      confirmButton: "bg-[#759cbe]",
    },
  }).then((result) => {
    if (result.isConfirmed) return;
  });
};

export default showAlert;
