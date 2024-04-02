import css from "./ImageCard.module.css";

const ImageCard = ({ photo, openModal }) => {
  const handleClick = () => {
    openModal(photo);
  };
  return (
    <div className={css.itemPhotoContainer}>
      <img
        className={css.itemPhoto}
        onClick={handleClick}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
    </div>
  );
};

export default ImageCard;
