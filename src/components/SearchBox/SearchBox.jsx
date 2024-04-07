import { useSearchParams } from "react-router-dom";
import css from "./SearchBox.module.css";
const SearchBox = ({ handleSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchParams({ query: e.target.topic.value });
    if (query) handleSearch(query);
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.formInput}
        type="text"
        name="topic"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
