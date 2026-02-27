import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '@/components/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <div>
        <p> Єлементи в ImageGallery</p> <ImageGalleryItem></ImageGalleryItem>
      </div>
    );
  }
}

export { ImageGallery };
