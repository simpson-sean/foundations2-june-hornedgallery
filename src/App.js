import React, { Component } from 'react'


import Header from './Header.js';
import ImageList from './ImageList.js';
import pokedex from './data.js';


export default class App extends Component {
  


  render() {
    return (
      <div className="App-header">
        <Header />
        <ImageList pokedex={pokedex} />
      </div>
    )
  }
}




