import { useEffect, useState, useRef } from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetailsById } from "../../api";
import Loader from "../../components/Loader/Loader";
import { Suspense } from "react";
import { HiArrowLeft } from "react-icons/hi";
import css from "./MovieDetailsPage.module.css";
const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const { data } = await fetchMovieDetailsById(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  const genres = movieDetails?.genres.map((genre) => genre.name).join(", ");
  const year = new Date(movieDetails?.release_date).getFullYear();
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <main>
      <button className={css.movieBtn} type="button">
        <Link to={backLink.current} className={css.movieLink}>
          <HiArrowLeft size="14" />
          Go Back
        </Link>
      </button>
      {loading && <Loader />}
      {movieDetails !== null && (
        <div className={css.movie}>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`
                : defaultImg
            }
            alt={movieDetails.title}
            width={250}
          />
          <div className={css.movieContainer}>
            <h1>
              {movieDetails.title} ({year})
            </h1>
            <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h3>Genre</h3>
            <p>{genres}</p>
          </div>
        </div>
      )}
      <div className={css.movieInformation}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetailsPage;
