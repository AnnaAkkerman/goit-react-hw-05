import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleClick }) => {
  return (
    <button
      className={css.loadMoreBtn}
      id={"load"}
      onClick={handleClick}
      type="button"
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
