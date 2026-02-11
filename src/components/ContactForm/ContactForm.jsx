import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdPermIdentity } from 'react-icons/md';
import { HiOutlineIdentification } from 'react-icons/hi';
import { GiRotaryPhone } from 'react-icons/gi';
import {
  Form,
  GenderGroup,
  RadioOption,
} from '@/components/ContactForm/ContactForm.styled';

import IntlTelInput from 'intl-tel-input/reactWithUtils';
import 'intl-tel-input/build/css/intlTelInput.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
      isValid: null,
    };
  }

  handleNumberChange = number => {
    this.setState({ number });
  };

  handleValidityChange = isValid => {
    this.setState({ isValid });
  };

  render() {
    return (
      <Form action="" autoComplete="true">
        <div className="input-wrapper">
          <MdPermIdentity />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            minLength="3"
          />
        </div>

        <div className="input-wrapper">
          <HiOutlineIdentification className="input-icon" />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            minLength="3"
          />
        </div>

        <div className="input-wrapper">
          <IntlTelInput
            value={this.state.number}
            onChangeNumber={this.handleNumberChange}
            onChangeValidity={this.handleValidityChange}
            initOptions={{
              initialCountry: 'ua',
              autoPlaceholder: 'aggressive',
              nationalMode: false,
              geoIpLookup: null,
              separateDialCode: true,
            }}
          />
        </div>

        <GenderGroup>
          <RadioOption>
            <input type="radio" name="gender" value="male" required />
            Male
          </RadioOption>

          <RadioOption>
            <input type="radio" name="gender" value="female" />
            Female
          </RadioOption>
        </GenderGroup>

        {/* подключить потом селект со списком стран intl-tel-input */}
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}

ContactForm.propTypes = {};
export { ContactForm };
