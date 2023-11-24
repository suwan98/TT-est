import Swal from "sweetalert2";

const showAlert = (icon, title, text) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    customClass: {
      confirmButton: "bg-[#759cbe]",
    },
  }).then((result) => {
    if (result.isConfirmed) return;
  });
};

export default showAlert;
