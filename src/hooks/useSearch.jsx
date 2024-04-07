import { useState } from "react";
import { fetchMovie } from "../api";
export const useSearch = () => {
  const [movies, setMovies] = useState([]);
  const [topic, setTopic] = useState("");

  const handleSearch = async (inputedTopic) => {
    try {
      setMovies([]);
      const response = await fetchMovie(inputedTopic);
      setMovies(response);
      setTopic(inputedTopic);
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    movies,
    setMovies,
    topic,
    handleSearch,
  };
};
