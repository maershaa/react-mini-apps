import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Wrapper, FilterInput } from '@/components/Filter/Filter.styled';
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
          minLength={3}
          placeholder="Search by name or number"
          type="search"
          value={value}
        ></FilterInput>
      </Wrapper>
    );
  }
}

Filter.propTypes = {};

export { Filter };
