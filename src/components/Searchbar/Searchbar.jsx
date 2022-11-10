import { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles.css';
import { AiOutlineSearch } from 'react-icons/ai';


export default class Searchbar extends Component {
  state = {
    searchName: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleNameChange = e => {
    this.setState({ searchName: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchName.trim() === '') {
      alert('Please enter the name for search!');
      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <AiOutlineSearch className='svgSearch'/>
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.searchName}
              onChange={this.handleNameChange}
            />
          </form>
        </header>
      </>
    );
  }
}