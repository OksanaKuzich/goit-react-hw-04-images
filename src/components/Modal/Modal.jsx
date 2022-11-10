import PropTypes from 'prop-types';
import '../../styles.css';
import { useEffect } from 'react';

export default function Modal({ onCloseModal, currentItem }) {

  useEffect(() => {
    const onCloseByEscape = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', onCloseByEscape);
    return () => window.removeEventListener('keydown', onCloseByEscape);
  }, [onCloseModal]);

  const onCloseByBackdrop = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return (
    <div className="Overlay" onClick={onCloseByBackdrop}>
      <div className="Modal">
        <img src={currentItem.LUrl} alt={currentItem.tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  currentItem: PropTypes.objectOf({
    LUrl: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
