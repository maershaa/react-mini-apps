import React, { Component } from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const {
      tags,
      previewURL,
      previewWidth,
      previewHeight,
      views,
      downloads,
      likes,
    } = this.props.photo;
    return (
      <GalleryItem onClick={this.props.onClick}>
        <img
          src={previewURL}
          width={previewWidth}
          height={previewHeight}
          alt={tags}
          loading="lazy"
        />
        <p>
          Views: <span>{views}</span>
        </p>
        <p>
          Downloads: <span>{downloads}</span>
        </p>{' '}
        <p>
          Likes: <span>{likes}</span>
        </p>
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  photo: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    previewURL: PropTypes.string.isRequired,
    previewWidth: PropTypes.number.isRequired,
    previewHeight: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export { ImageGalleryItem };
