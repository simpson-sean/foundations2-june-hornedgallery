import React, { Component } from 'react'
import images from './data.js';



export default class ImageList extends Component {
    
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

        let filterImages = images;

        if (this.state.filterKeywords) {
            filterImages = filterImages.filter(image => image.keyword === this.state.filterKeywords)
        }

        if (this.state.filterHorns) {
            filterImages = filterImages.filter(image => image.horns === +this.state.filterHorns)
        }

        console.log(filterImages);

        return (
    
        <section className="boss-container">
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
        
            <div>
               {filterImages.map(image =>     
                <div className="animal-list">
                    <img src={image.url} alt={image.keyword} width='200px' height='200px' /><br></br>
                    <p>Title: {image.title}</p>
                    <p>Description: {image.description}</p>
                    <p>Horn Count:{image.horns}</p>
                </div>
                
                )}
            </div>
        </section>
        )
    }
}
