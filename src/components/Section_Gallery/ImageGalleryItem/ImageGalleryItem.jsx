import React, { Component } from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';
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

export { ImageGalleryItem };
