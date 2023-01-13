// import { SnackBarProps } from "../../Types/Components/SnackbarTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  toast.error("Toast clicked", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    theme: "dark",
  });
};

export default Toast;
