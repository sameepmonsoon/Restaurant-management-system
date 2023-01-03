import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useNavigationAfterTokenCheck(){
    const navigate=useNavigate()
    return function redirect(){
        useEffect(()=>{
            if(localStorage.getItem("token")){
                   navigate("/home")     
            }
            else{
                navigate("/")   
            }   
        },[])
    }

}
