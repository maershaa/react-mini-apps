import styled from '@emotion/styled';

const GalleryItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: flex-start;

  padding: 10px;
  max-width: 300px;
  height: auto;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: transform 0.3s ease;

  :hover {
    transform: scale(1.05);
  }

  img {
    width: 150px;
    height: 100px;
    object-fit: cover;
    box-shadow: ${({ theme }) => theme.shadows.card};
    border-radius: 4px;
    margin: 0 auto 10px auto;
  }

  p {
    font-weight: 700;
    text-align: left;
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: 5px 0;
    margin-left: 10px;
  }

  span {
    font-weight: 400;
  }
`;

export { GalleryItem };
