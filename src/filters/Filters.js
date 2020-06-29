import React, {Component} from 'react';
import './Filters.css';

class Filters extends Component {
  render() {
    return (
      <div>
        <form className='filter-form'>
          <label htmlFor='print-type'>Print Type: </label>
          <select 
            className='print-type'
            name='print-type' 
            id='print-type'
            value={this.props.printType}
            onChange={this.props.handlePrintTypeChange}
          >
            <option value='all'>All</option>
            <option value='books'>Books</option>
            <option value='magazines'>Magazines</option>
          </select>  
        
          <label htmlFor='filter-type'>Book Type: </label>
          <select 
            className='print-type'
            name='filter-type' 
            id='filter-type'
            value={this.props.filterType}
            onChange={this.props.handleFilterTypeChange}
          >
            <option value='ebooks'>No Filter</option>
            <option value='free-ebooks'>Free ebook</option>
            <option value='paid-ebooks'>Paid ebook</option>
          </select>  
        </form>
      </div>
    )
  }
}

export default Filters;