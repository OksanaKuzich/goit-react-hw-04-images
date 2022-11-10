import PropTypes from 'prop-types';
import '../../styles.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';


export default function Searchbar({ onSubmit }) {
const [searchName, setSearchName] = useState('')

  const handleNameChange = e => {
   setSearchName(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchName.trim() === '') {
      alert('Please enter the name for search!');
      return;
    }
    onSubmit(searchName);
    setSearchName('');
  };

    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <AiOutlineSearch className="svgSearch" />
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={searchName}
              onChange={handleNameChange}
            />
          </form>
        </header>
      </>
    );
  }

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}