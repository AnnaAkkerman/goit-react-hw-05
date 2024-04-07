import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../api";
import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";
const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setCast(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (movieId) {
      fetchCast();
    }
  }, [movieId]);

  return (
    <ul className={css.cast}>
      {Array.isArray(cast) &&
        cast.map((actor) => {
          return (
            <li className={css.actor} key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={actor.name}
                width="250"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieCast;
