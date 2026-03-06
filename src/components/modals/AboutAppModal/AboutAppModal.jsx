import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AboutAppModal extends Component {
  render() {
    return (
      <>
        <div className="modal-header">
          <h2>About the Applications</h2>
          <button
            type="button"
            className="modal-close-btn"
            aria-label="Close modal"
            onClick={this.props.closeModal}
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          <section>
            <h3>Feedback Widget</h3>
            <p>
              The Feedback Widget allows users to leave feedback by selecting
              <strong>Good</strong>, <strong>Neutral</strong>, or{' '}
              <strong>Bad</strong>. The application calculates the total number
              of responses and the percentage of positive feedback in real time.
            </p>
          </section>

          <section>
            <h3>Phonebook</h3>
            <p>
              The Phonebook enables users to add, filter, and manage contacts.
              Duplicate entries are prevented, and phone numbers are validated
              before saving. Contacts can be deleted or marked as favorites.
            </p>
          </section>

          <p>
            Both applications demonstrate React state management, conditional
            rendering, and component-based architecture.
          </p>
        </div>
      </>
    );
  }
}

export { AboutAppModal };
