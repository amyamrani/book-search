import React, { Component } from 'react';
import './SearchForm.css'

class SearchForm extends Component {
  render() {
    return (
      <form className='search-form'>
        <label htmlFor='search'>Search: </label>
        <input 
          type='text' 
          name='search' 
          id='search' 
          value={this.props.query}
          onChange={this.props.handleChange}
          required
        />
        <button 
          className='search-button' 
          onClick={this.props.handleSubmit} type='button'
        >
          Search
        </button>
    </form>  
    )
  }
}

export default SearchForm;