import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 3af32b83b91c57ba297082acac5f7a36d68d3a373fc0a6ebf398810951a50318"
  }
});
