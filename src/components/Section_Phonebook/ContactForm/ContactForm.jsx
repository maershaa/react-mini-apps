import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdPermIdentity } from 'react-icons/md';
import { HiOutlineIdentification } from 'react-icons/hi';
import {
  Form,
  GenderGroup,
  RadioOption,
} from '@/components/Section_Phonebook/ContactForm/ContactForm.styled';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { isPossiblePhoneNumber } from 'react-phone-number-input';

class ContactForm extends Component {
  initialState = {
    name: '',
    surname: '',
    phoneNumber: '',
    gender: '',
    phoneValid: false,
    phoneTouched: false, //коснулся ли пользователь поля телефона. Нужно, чтобы показывать ошибки или красную рамку только после того, как пользователь начал ввод.
  };

  state = {
    ...this.initialState,
  };

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

  // !на сколько оно надо и можно ли упростить?
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
      alert('Invalid phone');
      return;
    }

    if (!name || !surname || !phoneNumber || !gender) {
      alert('Fill all fields');
      return;
    }

    const nameRegex =
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

    if (!nameRegex.test(name.trim())) {
      //Метод .test() проверяет, соответствует ли строка этому шаблону. Возвращает true, если строка подходит, и false, если нет.
      alert(
        'Invalid name. Only letters, spaces, apostrophes and hyphens are allowed'
      );
      return;
    }

    if (!nameRegex.test(surname.trim())) {
      alert(
        'Invalid surname. Only letters, spaces, apostrophes and hyphens are allowed'
      );
      return;
    }

    const contactInfo = {
      id: crypto.randomUUID(),
      name: name.trim(),
      surname: surname.trim(),
      phoneNumber,
      gender,
    };

    this.props.addContact(contactInfo);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      ...this.initialState,
    });
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
            required
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
            required
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

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export { ContactForm };
