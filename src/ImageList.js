import React, { Component } from 'react'
import ImageItem from './ImageItem';



export default class ImageList extends Component {
    render() {

        //console.log(this.props.pokedex);
        return (
            <div>
                This is the image list.
                <ImageItem animals={this.props.animalfilter} />
            </div>
        )
    }
}

