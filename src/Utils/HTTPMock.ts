import axios from "axios";
import { BASE_URL, BASE_URL_Menu } from "./Credentials";

function getToken() {
  return localStorage.getItem("token");
}

function get(url: string) {
  if (!url) {
    throw new Error("Url not provided");
  }
  return axios.get(BASE_URL + url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "Application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

function post(url: string, data: any) {
  if (!url) {
    throw new Error("Url not provided");
  }

  return axios.post(BASE_URL + url, data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "Application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

function put(url: string, data: any) {
  if (!url) {
    throw new Error("Url not provided");
  }
  return axios.put(BASE_URL + url, data);
}

function deleteMethod(url: string, data: any) {
  if (!url) {
    throw new Error("Url not provided");
  }
  return axios.delete(BASE_URL + url, data);
}

function getMenu(url: string) {
  if (!url) {
    throw new Error("Url Not Provided");
  }
  return axios.get(BASE_URL_Menu + url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "Application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

function postMenu(url: string, data: any) {
  if (!url) {
    throw new Error("Url Not Provided");
  }
  return axios.post(BASE_URL_Menu + url, data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      // "Access-Control-Request-Method": "",
      "Content-type": "",
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

function deleteMenu(url: string, data: any) {
  if (!url) {
    throw new Error("Error not provided");
  }
  return axios.delete(BASE_URL_Menu + url, data);
}
export const HTTPMethods = {
  get,
  post,
  put,
  deleteMethod,
  getMenu,
  postMenu,
  deleteMenu,
};
