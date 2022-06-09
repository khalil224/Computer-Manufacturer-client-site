import axios from "axios";

const fetcher = axios.create({
    baseURL: "https://pacific-tor-22531.herokuapp.com",
})

export default fetcher;