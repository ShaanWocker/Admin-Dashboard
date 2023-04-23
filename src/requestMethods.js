import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// localStorage.getItem("persist:root").user;
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

const userPersist = localStorage.getItem("persist:root");
const currentUser = userPersist && JSON.parse(JSON.parse(userPersist).user).currentUser;
const TOKEN = currentUser && currentUser.accessToken;

console.log(TOKEN)

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});
