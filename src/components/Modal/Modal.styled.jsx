import styled from '@emotion/styled';

const Modal_Backdrop = styled.div`
  position: fixed;
  inset: 0; // тоже самое что   top: 0; left: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal_Content = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: auto;
  max-width: 80%;
  min-height: 300px;

  padding: 40px;

  border-radius: 8px;
  background-color: white;

  text-align: center;

  h2 {
    margin-bottom: 20px;

    font-size: 1.2rem;
    font-weight: 700;

    text-align: center;
  }

  h3 {
    margin: 0 0 20px 0;
    padding: 8px 16px;

    display: inline-block;

    font-size: 1rem;
    font-weight: 500;
    font-style: italic;
    text-align: center;

    color: #fff;
    background-color: ${({ theme }) => theme.colors.text.secondary};

    border-radius: 6px;
    letter-spacing: 0.5px;

    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  p {
    margin-bottom: 20px;

    text-align: left;
    color: #2e026f;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;
  }

  .modal-close-btn {
    width: 36px;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: auto;

    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1;

    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};

    border: 2px solid ${({ theme }) => theme.colors.text.primary};
    border-radius: 50%;

    cursor: pointer;

    transition:
      opacity 0.2s ease,
      transform 0.15s ease,
      background-color 0.2s ease,
      color 0.2s ease;
  }

  .modal-close-btn:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  .modal-close-btn:active {
    transform: scale(0.95);
  }

  .modal-close-btn:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.15);
  }
`;
export { Modal_Backdrop, Modal_Content };
