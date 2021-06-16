import React, { Component } from 'react'


import Header from './Header.js';
import ImageList from './ImageList.js';
import pokedex from './data.js';


export default class App extends Component {
  
  state = {
        filterKeywords: '',
        filterHorns: '',
    }

  handleClick = (e) => {
    console.log(e.target.value);
    this.setState({ filterKeywords: e.target.value })
    
  }

  hornClick = (e) => {
      console.log(e.target.value);
      this.setState({ filterHorns: e.target.value })
      
  }


  render() {

    let filterPokedex = pokedex;

    if (this.state.filterKeywords) {
        filterPokedex = filterPokedex.filter(image => image.keyword === this.state.filterKeywords)
    }

    if (this.state.filterHorns) {
        filterPokedex = filterPokedex.filter(image => image.horns === +this.state.filterHorns)
    }

    console.log(filterPokedex);

    return (
      <div className="App-header">
        <Header />
        <section className="poke-container">
            {/* this generates a drop down of options */}           
            <select name='Animal' onChange={this.handleClick}>
                <option value='narwhal'>Narwhal</option>
                <option value='rhino'>Rhino</option>
                <option value='unicorn'>Unicorn</option>
                <option value='unilego'>Unilego</option>
                <option value='triceratops'>Triceratops</option>
                <option value='markhor'>Markhor</option>
                <option value='mouflon'>Mouflon</option>
                <option value='addax'>Addax</option> 
                <option value='chameleon'>Chameleon</option>
                <option value='lizard'>Lizard</option>
                <option value='dragon'>Dragon</option>
            </select>   

            <select name='horn-count'onChange={this.hornClick}>
                <option value='1'>One Horn</option>
                <option value='2'>Two Horn</option>
                <option value='3'>Three Horn</option>
                <option value='100'>More Horn</option>
            </select> 
        </section>

        <ImageList pokedex={pokedex} pokefilter={filterPokedex} />
      </div>
    )
  }
}




