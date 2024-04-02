import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { fetchPhotosWithTopic } from "./photos-api";
import toast from "react-hot-toast";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [photo, setPhoto] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (error) toast.error("Oops, something went wrong...");
  }, [error]);

  function openModal(photo) {
    setIsOpen(true);
    setPhoto(photo);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSearch = async (inputedTopic) => {
    try {
      setError(false);
      setPhotos([]);
      setLoading(true);
      setPage(1);
      const response = await fetchPhotosWithTopic(inputedTopic, 1);
      setPhotos(response.data.results);
      setTopic(inputedTopic);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    try {
      setError(false);
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
      const loadingMore = await fetchPhotosWithTopic(topic, page + 1);
      const addedPhotos = loadingMore.data.results;
      setPhotos((prevPhotos) => [...prevPhotos, ...addedPhotos]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar
        onSearch={handleSearch}
        page={page}
        setPage={setPage}
        topic={topic}
      />
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          customStyles={customStyles}
          photo={photo}
        />
      )}
      {error ? (
        <ErrorMessage />
      ) : (
        photos.length > 0 && (
          <ImageGallery openModal={openModal} photos={photos} />
        )
      )}

      {loading && <Loader />}
      {photos.length > 0 && !loading && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
    </div>
  );
};

export default App;
