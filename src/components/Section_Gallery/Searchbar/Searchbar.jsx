import React, { Component } from 'react';
import { IoIosSearch } from 'react-icons/io';

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
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
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
        </form>
      </header>
    );
  }
}

export { Searchbar };
