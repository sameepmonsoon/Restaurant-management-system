import axios from "axios"
import { BASE_URL } from "./Credentials"

function get(url:string){
    if(!url){
        throw new Error("Url not provided")
    }
    return axios.get(BASE_URL+url)
}

function post(url:string,data:any){
    if(!url){
        throw new Error("Url not provided")
    }

    return  axios.post(BASE_URL+url,data)
}

function put(url:string,data:any){
    if(!url){
        throw new Error("Url not provided")
    }
    return axios.put(BASE_URL+url,data)
}

function deleteMethod(url:string,data:any){
    if(!url){
        throw new Error("Url not provided")
    }
    return axios.delete(BASE_URL+url,data)
}

export const HTTPMethods={
    get,
    post,
    put,
    deleteMethod
}