import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = '';

// Create a new component
const App = () => {
  return <div><SearchBar /></div>;
}

// Put component's generated HTML on the page
ReactDOM.render(<App />, document.querySelector('.container'));
