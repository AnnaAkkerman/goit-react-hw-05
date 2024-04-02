import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotosWithTopic = async (topic, page) => {
  const response = axios.get(
    `/search/photos?client_id=DQJPNRnR63DeOVQPqBKcOn0pz9BRaEy0qyue2b3e7G0&&page=${page}&per_page=12&query='${topic}'`
  );
  return response;
};
