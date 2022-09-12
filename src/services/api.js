import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

// export const api = axios.create({
//   baseURL: "link deploy",
// });
// https://drivenpass-app.herokuapp.com/
