import PropTypes from 'prop-types';
import '../../styles.css';

export const ImageGalleryItem = ({ SUrl, LUrl, tags, onClickShowModal }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => onClickShowModal({ LUrl, tags })}
    >
      <img src={SUrl} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  SUrl: PropTypes.string.isRequired,
  LUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClickShowModal: PropTypes.func.isRequired,
};
