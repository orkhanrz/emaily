import axios from "axios";
import { FETCH_USER } from "./types";

export function fetchUser() {
  axios
    .get("/api/current_user")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
