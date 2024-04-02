import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast("To search for images you must enter text...", {
    icon: "🚩",
  });

const SearchBar = ({ onSearch }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const inputedTopic = form.elements.topic.value;
    inputedTopic ? onSearch(inputedTopic) : notify();

    form.reset();
  };

  return (
    <header>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
