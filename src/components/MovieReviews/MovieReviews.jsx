import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api";
import { useEffect, useState } from "react";
import css from "./MovieReviews.module.css";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (movieId) {
      fetchReviews();
    }
  }, [movieId]);

  return (
    <ul className={css.reviewsList}>
      {reviews?.length > 0 ? (
        reviews.map((review) => {
          return (
            <li key={review.id}>
              <h3 className={css.reviewsAuthor}>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })
      ) : (
        <p>We don&apos;t have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default MovieReviews;
