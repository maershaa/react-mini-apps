import React, { useEffect } from 'react';

import { Modal_Backdrop, Modal_Content } from '@/components/Modal/Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

const Modal = props => {
  const { closeModal, children } = props;

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    // Очистка после размонтирования (Для этого, возвращаем из useEffect функцию очистки. Это аналог componentWillUnmount.
    // Здесь можно снимать обработчики событий, останавливать таймеры и отменять HTTP-запросы.)
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Modal_Backdrop onClick={handleBackdropClick}>
      <Modal_Content>{children}</Modal_Content>
    </Modal_Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { Modal };
