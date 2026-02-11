import PropTypes from 'prop-types';

const ContactItem = () =>
  // { name, surname, tel, gender }
  {
    return (
      <li>
        <div className="contact-info">
          <span className="contact-avatar" aria-hidden="true">
            <svg className="contact-icon" />
          </span>

          <div className="contact-text">
            <p className="contact-name">{/* {name} {surname} */}</p>

            <a
              className="contact-phone"
              // href={`tel:${tel}`}
              // aria-label={`Call ${name} ${surname}`}
            >
              {/* {tel} */}
            </a>
          </div>
        </div>
      </li>
    );
  };

ContactItem.propTypes = {};
export { ContactItem };
