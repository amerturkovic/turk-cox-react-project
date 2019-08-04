import React, { Component } from 'react';
import Catalog from './components/Catalog'
import './App.css';
// https://github.com/ahfarmer/emoji-search/tree/master/src
// https://github.com/jeffersonRibeiro/react-shopping-cart
// https://www.npmjs.com/package/react-select
// https://github.com/ahfarmer/calculator/tree/master/src/component
// https://codesandbox.io/s/l29rokm9rm
// https://www.npmjs.com/package/react-js-pagination
// https://redux.js.org/basics/usage-with-react

class App extends Component {
  render() {
    return (
      <div className="App">
        <Catalog />
      </div>
    );
  }
}

export default App;
