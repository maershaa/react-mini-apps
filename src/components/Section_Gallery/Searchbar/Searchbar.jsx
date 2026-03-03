import React, { Component } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { SearchForm, InputWrapper } from './Searchbar.styled';
class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  onChange = evt => {
    console.log(evt.target.value);
    this.setState({
      searchValue: evt.target.value.toLowerCase(),
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { searchValue } = this.state;

    if (searchValue.trim() === '') {
      alert('Введите поисковой параметр');
      return;
    }

    this.props.onSubmit(searchValue);
    this.setState({
      searchValue: '',
    });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <SearchForm onSubmit={this.handleSubmit}>
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
            onChange={this.onChange}
            value={searchValue}
          />
        </InputWrapper>
      </SearchForm>
    );
  }
}

export { Searchbar };
