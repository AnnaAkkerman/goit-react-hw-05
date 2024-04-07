import imageNotFound from "../../assets/image.jpg";
import css from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <div>
      <img className={css.imageNotFound} src={imageNotFound} alt="Not found" />
    </div>
  );
};

export default NotFoundPage;
