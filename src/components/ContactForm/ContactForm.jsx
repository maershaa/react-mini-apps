import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdPermIdentity } from 'react-icons/md';
import { HiOutlineIdentification } from 'react-icons/hi';
import {
  Form,
  GenderGroup,
  RadioOption,
} from '@/components/ContactForm/ContactForm.styled';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { isPossiblePhoneNumber } from 'react-phone-number-input';

const initialState = {
  name: '',
  surname: '',
  phoneNumber: '',
  gender: '',
  phoneValid: false,
  phoneTouched: false, //коснулся ли пользователь поля телефона. Нужно, чтобы показывать ошибки или красную рамку только после того, как пользователь начал ввод.
};
class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleFormChange = e => {
    //это универсальная функция может обновлять любое поле формы, не нужно писать отдельный обработчик для каждого <input>
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    // В state есть объект с полями: { name: '', surname: '', ... }
    //[name] — это имя поля, которое мы берём из input.
    //value — текущее введённое значение (например, "Лера").
    //Благодаря [name] функция работает для всех полей сразу, не нужно писать отдельный обработчик для каждого <input>.
  };

  handlePhoneChange = phone => {
    const valid = phone ? isPossiblePhoneNumber(phone) : false;
    //isPossiblePhoneNumber - Проверяет, может ли введённый номер существовать реально, учитывая код страны, минимальную и максимальную длину.
    this.setState({
      phoneNumber: phone,
      phoneValid: valid,
      phoneTouched: true,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { name, surname, phoneNumber, gender, phoneValid } = this.state;

    if (!phoneValid) {
      console.error('Invalid phone');
      return;
    }

    if (!name || !surname || !phoneNumber || !gender) {
      console.error('Fill all fields');
      return;
    }

    const contactInfo = {
      id: crypto.randomUUID(),
      name: name.trim(),
      surname: surname.trim(),
      phoneNumber,
      gender,
    };

    console.log(contactInfo);

    this.resetForm();
  };

  resetForm = () => {
    this.setState(initialState);
  };

  render() {
    const { name, surname, phoneNumber, gender, phoneValid, phoneTouched } =
      this.state;

    const isFormValid =
      name.trim() !== '' &&
      surname.trim() !== '' &&
      gender !== '' &&
      phoneValid;

    return (
      <Form autoComplete="on" onSubmit={this.handleFormSubmit}>
        <div className="input-wrapper">
          <MdPermIdentity />

          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            minLength="3"
            onChange={this.handleFormChange}
            autoComplete="given-name" //Подсказывает браузеру, что это имя пользователя, чтобы он мог подставлять сохранённые данные
          />
        </div>

        <div className="input-wrapper">
          <HiOutlineIdentification className="input-icon" />
          <input
            type="text"
            name="surname"
            value={surname}
            placeholder="Surname"
            minLength="3"
            onChange={this.handleFormChange}
            autoComplete="family-name" //Подсказывает браузеру, что это фамилия пользователя, чтобы он мог подставлять сохранённые данные
          />
        </div>

        <div
          className={`input-wrapper ${phoneTouched ? (phoneValid ? 'valid' : 'invalid') : ''}`}
        >
          <PhoneInput
            placeholder="Enter phone number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handlePhoneChange}
            defaultCountry="UA"
            international //Включает международный формат номера, добавляет выбор страны и отображает +ко
            autoComplete="tel"
            maxLength="18"
          />
        </div>

        <GenderGroup>
          <RadioOption>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleFormChange}
              checked={gender === 'male'} //Определяет, выбрана ли эта опция, сравнивая текущее значение gender со значением радио
            />
            Male
          </RadioOption>

          <RadioOption>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleFormChange}
              checked={gender === 'female'} //Определяет, выбрана ли эта опция, сравнивая текущее значение gender со значением радио
            />
            Female
          </RadioOption>
        </GenderGroup>

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </Form>
    );
  }
}

ContactForm.propTypes = {};
export { ContactForm };
