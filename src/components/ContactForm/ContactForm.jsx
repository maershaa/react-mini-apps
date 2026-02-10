import PropTypes from 'prop-types';

const ContactForm = props => {
  return (
    <form action="" autoComplete="true">
      {/* <svg src="#" alt="name" /> */}
      <input
        type="text"
        name="first_name"
        placeholder="First name"
        minLength="3"
      />
      {/* <svg src="#" alt="surname" /> */}
      <input
        type="text"
        name="last_name"
        placeholder="Last name"
        minLength="3"
      />
      {/* <svg src="#" alt="tel" /> */}
      <input type="tel" name="phone_number" placeholder="Phone Number" />
      {/* подключить потом селект со списком стран intl-tel-input */}
      <input type="submit" value="Submit" />
    </form>
  );
};

ContactForm.propTypes = {};
export { ContactForm };
