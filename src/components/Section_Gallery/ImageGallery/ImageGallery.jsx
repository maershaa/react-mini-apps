import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '@/components/Section_Gallery/ImageGalleryItem';
import { getImages } from '@/api/api';
import { Loader } from '@/components';
import { GalleryList } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    photos: [],
    isLoading: false,
    // error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.queryPhoto;
    const nextSearch = this.props.queryPhoto;

    if (prevSearch !== nextSearch) {
      try {
        this.setState({ isLoading: true });

        const response = await getImages(nextSearch);
        console.log('👉 Returned data:', response);
        this.setState({
          photos: response.hits,
        });
        return response;
      } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  render() {
    const { photos, isLoading } = this.state;
    console.log('🚀 ~ ImageGallery ~ render ~ photos:', photos);

    return (
      <GalleryList>
        {isLoading && <Loader />}
        {photos &&
          photos.map(
            photo => <ImageGalleryItem key={photo.id} photo={photo} />

            // {
            // const {
            //   id,
            //   tags,
            //   previewURL,
            //   webformatURL,
            //   largeImageURL,
            //   views,
            //   downloads,
            //   likes,
            // } = photo;
            // return (
            //   <ImageGalleryItem
            //     key={id}
            //     id={id}
            //     tags={tags}
            //     previewURL={previewURL}
            //     webformatURL={webformatURL}
            //     largeImageURL={largeImageURL}
            //     views={views}
            //     downloads={downloads}
            //     likes={likes}
            //   ></ImageGalleryItem>
            // );
            // }
          )}
      </GalleryList>
    );
  }
}
export { ImageGallery };

// "id": 7666143,
// "pageURL": "https://pixabay.com/photos/photos-nostalgia-retro-photography-7666143/",
// "type": "photo",
// "tags": "photos, nostalgia, retro, photography, woman, man, memories, photo album, photos, photos, memories, memories, memories, photo album, photo album, photo album, photo album, photo album",
// "previewURL": "https://cdn.pixabay.com/photo/2022/12/19/17/18/photos-7666143_150.jpg",
// "previewWidth": 150,
// "previewHeight": 100,
// "webformatURL": "https://pixabay.com/get/g6edd0777157d842bbec845f6cc277126ea48995f0a9906b22621868978a2ea74c97c5956c6bb91d55720c25d284a363950e41e6ecf4b39788cb6e0e91a50af6d_640.jpg",
// "webformatWidth": 640,
// "webformatHeight": 426,
// "largeImageURL": "https://pixabay.com/get/gea0c44deb59982b4734c8ae2e6e2b915dc2a210601a63888d9631884acffc77fc5c67ecef4d96cdc3ded16a7b93c2f0ae960528e3c4b935ec4b1f59a3b7e2b9f_1280.jpg",
// "imageWidth": 6048,
// "imageHeight": 4024,
// "imageSize": 4472913,
// "views": 76807,
// "downloads": 62199,
// "collections": 145,
// "likes": 210,
// "comments": 63,
// "user_id": 87167,
// "user": "fotoblend",
// "userImageURL": "https://cdn.pixabay.com/user/2023/09/18/18-35-53-8_250x250.jpg",
// "noAiTraining": false,
// "isAiGenerated": false,
// "isGRated": true,
// "isLowQuality": false,
// "userURL": "https://pixabay.com/users/87167/"
