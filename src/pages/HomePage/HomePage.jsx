import MovieList from "../../components/MovieList/MovieList";
import { useSearch } from "../../hooks/useSearch";
import { fetchTrendingMovies } from "../../api";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

// import { useState } from "react";
const HomePage = () => {
  const { movies, setMovies } = useSearch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchTrendingMovies();
        setMovies(response);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, [setMovies]);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
      {loading && <Loader />}
    </div>
  );
};

export default HomePage;
