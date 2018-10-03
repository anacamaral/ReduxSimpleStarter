import React from 'react';
//import ReactDOM from 'react-dom';
let ReactDOM = require('react-dom');

// Create a new component
const App = function() {
  return <div>Ola!</div>;
}

// Put component's generated HTML on the page
ReactDOM.render(<App>);
