import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import ApiKey from './apiKey';


// Create a new Component and it should produce some HTML
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  )
}
//Insert the Component on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
