import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ImagePreviewModal extends Component {
  render() {
    const { closeModal, modalGalleryData } = this.props;
    return (
      <>
        <div className="modal-header">
          <button
            type="button"
            className="modal-close-btn"
            aria-label="Close modal"
            onClick={closeModal}
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          <img
            src={modalGalleryData.webformatURL}
            width={modalGalleryData.webformatWidth}
            height={modalGalleryData.webformatHeight}
            alt={modalGalleryData.tags}
            loading="lazy"
          />
        </div>
      </>
    );
  }
}

ImagePreviewModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalGalleryData: PropTypes.oneOfType([
    PropTypes.shape({
      collections: PropTypes.number,
      comments: PropTypes.number,
      downloads: PropTypes.number,
      id: PropTypes.number,
      imageHeight: PropTypes.number,
      imageSize: PropTypes.number,
      imageWidth: PropTypes.number,
      isAiGenerated: PropTypes.bool,
      isGRated: PropTypes.bool,
      isLowQuality: PropTypes.bool,
      largeImageURL: PropTypes.string,
      likes: PropTypes.number,
      noAiTraining: PropTypes.bool,
      pageURL: PropTypes.string,
      previewHeight: PropTypes.number,
      previewURL: PropTypes.string,
      previewWidth: PropTypes.number,
      tags: PropTypes.string.isRequired,
      type: PropTypes.string,
      user: PropTypes.string,
      userImageURL: PropTypes.string,
      userURL: PropTypes.string,
      user_id: PropTypes.number,
      views: PropTypes.number,
      webformatHeight: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      webformatWidth: PropTypes.number.isRequired,
    }),
    PropTypes.oneOf([null]),
  ]),
};
export { ImagePreviewModal };
