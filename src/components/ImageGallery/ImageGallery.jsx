import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => {
        console.log(photo);

        return (
          <li className={css.galleryItem} key={photo.id}>
            <ImageCard openModal={openModal} photo={photo} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
