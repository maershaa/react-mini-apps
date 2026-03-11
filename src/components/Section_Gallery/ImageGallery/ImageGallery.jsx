import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ImageGalleryItem } from '@/components/Section_Gallery/ImageGalleryItem';
import { getImages } from '@/api/api';
import { Loader, Notification } from '@/components';
import { Button } from '@/components/Section_Gallery';
import { GalleryList } from './ImageGallery.styled';

const photosPerPage = 20;

const ImageGallery = ({ queryPhoto, openGalleryModal }) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  async function fetchImages() {
    setIsLoading(true);

    try {
      const data = await getImages(queryPhoto, page);
      const pages = Math.ceil(data.totalHits / photosPerPage);
      setTotalPages(pages);
      console.log('Current page:', page, ', totalPages:', pages);

      if (data.hits.length === 0) {
        toast.info('No images found for your query');
      }

      if (page === 1) {
        toast.success('Images loaded successfully!');
        setPhotos(data.hits);
      } else {
        setPhotos(prev => [...prev, ...data.hits]);
      }
    } catch (e) {
      toast.error('Failed to fetch images');
      console.log(`Axios request failed: ${e}`);
    } finally {
      setIsLoading(false);
    }
  }

  // 1-й useEffect нужен чтобы при новом запросе не оставались старые картинки и пагинация начиналась заново
  // Срабатывает, когда меняется queryPhoto (новый поиск) и сбрасывает старые фото + возвращает страницу на 1
  useEffect(() => {
    if (!queryPhoto.trim()) return; //защита от пустого или пробельного запроса

    setPhotos([]);
    setPage(1);
  }, [queryPhoto]);

  // 2-й useEffect нужен чтобы при смене запроса или нажатии "Load more" подгружать данные
  // Срабатывает, когда меняется queryPhoto или page и загружает изображения с API в зависимости от текущей страницы
  useEffect(() => {
    if (!queryPhoto.trim()) return;
    fetchImages();
  }, [queryPhoto, page]);

  const handleLoadMoreBtnClick = () => {
    setPage(page => page + 1); //увеличиваем номер страницы для подгрузки следующей порции фото
  };
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
            <Button text="Load more" onClick={handleLoadMoreBtnClick} />
          )}
        </>
      ) : (
        <Notification message="Enter a search query to see photos" />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  queryPhoto: PropTypes.string.isRequired,
  openGalleryModal: PropTypes.func.isRequired,
};
export { ImageGallery };
