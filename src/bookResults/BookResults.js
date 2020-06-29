import React, { Component } from 'react';
import BookResultItem from '../bookResultItem/BookResultItem';
import '../bookResultItem/BookResultItem.css';

class BookResults extends Component {
  render() {
    return (
      <div>
        {this.props.bookResults.map(bookResult => (
          <BookResultItem 
            bookResult={bookResult}
            key={bookResult.id} 
          />
        ))}  
      </div>
    )
  }
}

export default BookResults;