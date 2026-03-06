import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '@/components/Section_Gallery/ImageGalleryItem';
import { getImages } from '@/api/api';
import { Loader, Notification } from '@/components';
import { Button } from '@/components/Section_Gallery';
import { GalleryList } from './ImageGallery.styled';

const photosPerPage = 20;

class ImageGallery extends Component {
  state = {
    photos: [],
    isLoading: false,
    page: 1,
    totalPages: 0,
    // error: null,
  };

  async componentDidUpdate(prevProps) {
    const { queryPhoto } = this.props;
    if (prevProps.queryPhoto !== queryPhoto && queryPhoto !== '') {
      try {
        this.setState({
          isLoading: true,
          page: 1,
          photos: [],
        });

        const data = await getImages(queryPhoto, 1);

        this.setState({
          photos: data.hits,
          totalPages: Math.ceil(data.totalHits / photosPerPage),
        });
      } catch (e) {
        console.log(`Axios request failed: ${e}`);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleLoadMoreBtnClick = async () => {
    const { queryPhoto } = this.props;
    const { page } = this.state;

    const nextPage = page + 1;

    try {
      this.setState({ isLoading: true });

      const data = await getImages(queryPhoto, nextPage);

      this.setState(prevState => ({
        photos: [...prevState.photos, ...data.hits],
        page: nextPage,
      }));
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { photos, isLoading, page, totalPages } = this.state;
    const { openGalleryModal } = this.props;

    return (
      <>
        {isLoading && <Loader />}

        {photos.length > 0 ? (
          <>
            <GalleryList>
              {photos.map(photo => (
                <ImageGalleryItem
                  key={photo.id}
                  photo={photo}
                  onClick={() => openGalleryModal(photo)}
                />
              ))}
            </GalleryList>
            {page < totalPages && (
              <Button text="Load more" onClick={this.handleLoadMoreBtnClick} />
            )}
          </>
        ) : (
          <Notification message="Enter a search query to see photos" />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  queryPhoto: PropTypes.string.isRequired,
  openGalleryModal: PropTypes.func.isRequired,
};
export { ImageGallery };
