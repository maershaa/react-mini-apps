import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { SearchForm, InputWrapper } from './Searchbar.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = evt => {
    setSearchValue(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchValue.trim() === '') {
      toast.info('Введите поисковой параметр');
      return;
    }

    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <button type="submit" disabled={!searchValue}>
        Search
      </button>
      <InputWrapper>
        <IoIosSearch />
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          aria-label="Search images and photos"
          onChange={handleChange}
          value={searchValue}
        />
      </InputWrapper>
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
