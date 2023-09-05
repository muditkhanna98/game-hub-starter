import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a67e23bf1fd646c6804f7695e904908a",
  },
});
