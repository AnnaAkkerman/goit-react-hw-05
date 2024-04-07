import { useEffect, lazy, Suspense } from "react";
import { useSearch } from "../../hooks/useSearch";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
const MovieList = lazy(() => import("../../components/MovieList/MovieList"));
const SearchBox = lazy(() => import("../../components/SearchBox/SearchBox"));
const MoviesPage = () => {
  const { movies, handleSearch } = useSearch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  useEffect(() => {}, [movies]);

  return (
    <main>
      <Suspense fallback={<Loader />}>
        <SearchBox handleSearch={handleSearch} />
        <MovieList movies={movies} />
      </Suspense>
    </main>
  );
};

export default MoviesPage;
