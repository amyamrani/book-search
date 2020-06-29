import React, { Component } from 'react';
import './BookResultItem';

class BookResultItem extends Component {
  render() {
    const bookResult = this.props.bookResult;
    return (
      <div className='book-results-container'>
        <h2 className='book-title'>
          <a 
            href={bookResult.volumeInfo.infoLink} 
            target='_blank' 
            rel='noopener noreferrer'
          >
            {bookResult.volumeInfo.title}
          </a>
        </h2>

        <div className='book-result-container'>
          <img 
            className='book-image'
            src={bookResult.volumeInfo.imageLinks.smallThumbnail} 
            alt={bookResult.volumeInfo.title} 
          />
          
          <div>
            {bookResult.volumeInfo.authors && (
              <p>Author: {bookResult.volumeInfo.authors[0]}</p>
            )}
            
            <p>Price: ${bookResult.saleInfo?.listPrice?.amount}</p>
            <p>{bookResult.volumeInfo.description}</p>
          </div>  
        </div>  
      </div>
    )
  }
}

export default BookResultItem;