import React, { Component } from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';
class ImageGalleryItem extends Component {
  render() {
    const {
      tags,
      previewURL,
      webformatURL,
      largeImageURL,
      views,
      downloads,
      likes,
    } = this.props.photo;
    return (
      <GalleryItem>
        <img src={previewURL} alt={tags} loading="lazy" />
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
