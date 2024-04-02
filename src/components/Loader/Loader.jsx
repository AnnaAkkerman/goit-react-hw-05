import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => (
  <div className={css.loader}>
    <RotatingLines
      visible={true}
      height="96"
      width="96"
      color="grey"
      strokeWidth="5"
      animationDuration="10.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);

export default Loader;
