import React, { Component } from 'react';
import SearchForm from './searchForm/SearchForm'
import Filters from './filters/Filters';
import BookResults from './bookResults/BookResults';
import './App.css';

function formatQueryParams (params) {
  const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');    
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookResults: [],
      query: '',
      printType: 'all',
      filterType: 'ebooks',
    }
  }

  filterResults = (newState) => {
    this.setState(newState, this.handleSubmit);
  }

  handleSubmit = () => {
    const apiKey = 'AIzaSyCCCdaEJds6hQW2c-4A0cjdIvDrWUpIzVc';
    const baseURL = 'https://www.googleapis.com/books/v1/volumes';

    const params = {
      q: this.state.query,
      printType: this.state.printType,
      filter: this.state.filterType,
      key: apiKey,
    }

    const url = baseURL + '?' + formatQueryParams(params);

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookResults: data.items || [],
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        
        <SearchForm 
          query={this.state.query}
          handleChange={(e) => this.setState({query: e.target.value})}
          handleSubmit={this.handleSubmit} 
        />
       
        <Filters 
          printType={this.state.printType}
          handlePrintTypeChange={(e) => this.filterResults({printType: e.target.value})}
          filterType={this.state.filterType}
          handleFilterTypeChange={(e) => this.filterResults({filterType: e.target.value})}
        />

        <BookResults 
          bookResults={this.state.bookResults}
        />
      
      </div>
    )
  };
}



export default App;

