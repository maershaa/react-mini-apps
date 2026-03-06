import React, { Component } from 'react';
import { Modal_Backdrop, Modal_Content } from '@/components/Modal/Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

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

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { Modal };
