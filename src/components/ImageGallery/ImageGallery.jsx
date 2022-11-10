import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import '../../styles.css'

export const ImageGallery = ({ images, onClickShowModal }) => {
  return (
    <>
      <ul className="ImageGallery">
        {images.map(({ id, SUrl, LUrl, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              SUrl={SUrl}
              LUrl={LUrl}
              tags={tags}
              onClickShowModal={onClickShowModal}
            />
          );
        })}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  onClickShowModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      SUrl: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
