import React, { Component } from 'react'
import images from './data.js';



export default class ImageList extends Component {
    
    state = {
        filterHorns: '',
    }
   
    handleClick = (selection) => {
        this.setState({ filterHorns: selection.target.value })
        
    }

    render() {

        let filterImages = images;

        if (this.state.filterHorns) {
            filterImages = images.filter(image => image.keyword === this.state.filterHorns)
        }

        return (
    
        <section className="boss-container">
            <p>{console.log(this.state)}</p>
            <p>{console.log(filterImages)}</p>
            {/* this generates a drop down of options */}
            <select onChange={this.handleClick}>
                <option value='narwhal'>Narwhal</option>
                <option value='rhino'>Rhino</option>
                <option value='unicorn'>Unicorn</option>
                <option value='unilego'>Unilego</option>
            </select>   
        
            <div>
               {filterImages.map(image =>     
                <div className="animal-list">
                    <img src={image.url} alt={image.keyword} width='300px' height='300px' />
                    {image.title}
                    {image.description}
                    {image.keyword}
                    {image.horns}
                </div>
                
                )}
            </div>
        </section>
        )
    }
}
