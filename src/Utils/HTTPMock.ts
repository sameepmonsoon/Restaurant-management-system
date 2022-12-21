import axios from "axios"
import React from "react";

// const baseURL = ""

function get(url:string){
    if(!url){
        throw new Error("Url not provided")
    }
    return axios.get(url)
}

function post(url:string,data:any){
    if(!url){
        throw new Error("Url not provided")
    }
    return axios.post(url,data)
}

function put(url:string,data:any){
    if(!url){
        throw new Error("Url not provided")
    }
    return axios.put(url,data)
}

function deleteMethod(url:string,data:any){
    if(!url){
        throw new Error("Url not provided")
    }
    return axios.delete(url,data)
}

export const HTTPMethods={
    get,
    post,
    put,
    deleteMethod
}