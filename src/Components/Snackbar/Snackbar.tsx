// import { SnackBarProps } from "../../Types/Components/SnackbarTypes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const popUpHandle= ()=>{
        toast.success("Toast clicked",{
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            theme: "dark",
        }
        
        );
    }
    return ( 
    <>  
        <button onClick={popUpHandle}>Toast</button>
        <ToastContainer/>
    </> );
}
 
export default Toast;