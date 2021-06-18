import React, { Component } from 'react';

export default class ImageItem extends Component {
    
    render() {
        //the cool zone
        //console.log(this.props.animals);

        return (
            <div>
              {this.props.animals.map(image =>     
                <div className="animal-list">
                    <img src={image.url} alt={image.keyword} width='200px' height='200px' />
                    {/* <p>Title: {image.title}</p>
                    <p>Description: {image.description}</p>
                    <p>Horn Count:{image.horns}</p> */}
                </div> 
              )}
            </div>
        )}
}
