import React, { Component } from 'react'


import Header from './Header.js';
import ImageList from './ImageList.js';
import animals from './data.js';
import Dropdown from './Dropdown.js';


export default class App extends Component {
  
  state = {
        filterKeyword: '',
        filterHorns: '',

    }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ filterKeyword: e.target.value })
    
  }

  handleHorn = (e) => {
      console.log(e.target.value);
      this.setState({ filterHorns: e.target.value })
      
  }

 
  render() {

    let filterAnimals = animals;

    if (this.state.filterKeyword) {
        filterAnimals = filterAnimals.filter(animal => animal.keyword === this.state.filterKeyword)
    }

    if (this.state.filterHorns) {
        filterAnimals = filterAnimals.filter(animal => animal.horns === +this.state.filterHorns)
    }

    const keywordDuplicates = animals.map(animal => animal.keyword);
    const setOfKeywords = new Set(keywordDuplicates);
    const animalOptions = Array.from(setOfKeywords);

    const hornDuplicates = animals.map(animal => animal.horns);
    const setOfHorns = new Set(hornDuplicates);
    const hornOptions = Array.from(setOfHorns);
    
    
    //const hornOptions = Array.from(new Set(animals.map(animal => animal.horns)));


    return (
      <div className="App-header">
        <Header />
 
        <Dropdown 
          options={animalOptions}
          handleChange={this.handleChange} />
        <Dropdown 
          options={hornOptions}
          handleChange={this.handleHorn} />
        <ImageList animals={animals} animalfilter={filterAnimals} />
      </div>
    )
  }
}




