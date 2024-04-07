import axios from "axios";

const urlTrending =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2JjNTk1NDdjZTJkMzJmZWE0ZWNkMGE0OTc3YmE0NyIsInN1YiI6IjY2MGM4YWUwOWM5N2JkMDE3Y2E1OTg2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2dPpTJ4dSZS6vFnv8kN7P3TsnDIg4KoGK0-WpcQ-52s",
  },
};
export const fetchTrendingMovies = async () => {
  const response = await axios.get(urlTrending, options);

  return response.data.results;
};

export const fetchMovie = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  return response.data.results;
};

export const fetchMovieDetailsById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );

  return response;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );

  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`,
    options
  );

  return response.data.results;
};
