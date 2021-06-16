import React, { Component } from 'react'


export default class ImageList extends Component {
    render() {
        console.log(this.props.pokedex);
        return (
            <div>
                This is the image list.
            </div>
        )
    }
}

