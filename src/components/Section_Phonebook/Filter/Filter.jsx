import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Wrapper,
  FilterInput,
} from '@/components/Section_Phonebook/Filter/Filter.styled';
import { IoIosSearch } from 'react-icons/io';
class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <Wrapper>
        <IoIosSearch />
        <FilterInput
          name="filter"
          onChange={onChange}
          placeholder="Search by name or number"
          type="search"
          value={value}
          aria-label="Search contacts"
        ></FilterInput>
      </Wrapper>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { Filter };
