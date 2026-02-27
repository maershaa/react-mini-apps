import React, { Component } from 'react';
import { Modal_Backdrop, Modal_Content } from '@/components/Modal/Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = evt => {
    console.log('🚀 ~ Modal ~ evt.target:', evt.target);
    console.log('🚀 ~ Modal ~ evt.currentTarget:', evt.currentTarget);
    if (evt.target === evt.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    return createPortal(
      <Modal_Backdrop onClick={this.handleBackdropClick}>
        <Modal_Content>{this.props.children}</Modal_Content>
      </Modal_Backdrop>,
      modalRoot
    );
  }
}

export { Modal };
