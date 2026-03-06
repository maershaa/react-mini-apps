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
            alt={modalGalleryData.tagImg}
            loading="lazy"
          />
        </div>
      </>
    );
  }
}

export { ImagePreviewModal };
