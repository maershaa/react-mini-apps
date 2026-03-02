import styled from '@emotion/styled';

const GalleryItem = styled.li`
  display: flex;
  flex-direction: column;

  max-width: 300px;
  height: auto;
  overflow: hidden;

  img {
    width: 150px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
    transition: transform 0.3s ease;
  }

  :hover img {
    transform: scale(1.05);
  }

  p {
    margin-bottom: 10px;
    font-weight: 700;
  }

  span {
    font-weight: 400;
  }
`;
export { GalleryItem };
