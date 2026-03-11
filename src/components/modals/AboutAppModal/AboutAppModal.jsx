import React from 'react';
import PropTypes from 'prop-types';

const AboutAppModal = ({ closeModal }) => {
  return (
    <>
      <div className="modal-header">
        <h2>About the Applications</h2>
        <button
          type="button"
          className="modal-close-btn"
          aria-label="Close modal"
          onClick={closeModal}
        >
          ×
        </button>
      </div>
      <div className="modal-body">
        <section>
          <h3>Feedback Widget</h3>
          <p>
            The Feedback Widget allows users to leave feedback by selecting
            <strong>Good</strong>, <strong>Neutral</strong>, or
            <strong>Bad</strong>. The application calculates the total number of
            responses and the percentage of positive feedback in real time.
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
        <section>
          <h3>Gallery</h3>
          <p>
            The Gallery allows users to browse images and open them in a preview
            modal. Each image can be viewed in a larger format with additional
            details. This demonstrates working with image data, modal windows,
            and component interaction.
          </p>
        </section>

        <p>
          <em>
            These mini-applications demonstrate React state management,
            conditional rendering, reusable components, and working with modals.
          </em>
        </p>
      </div>
    </>
  );
};

AboutAppModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
export { AboutAppModal };
