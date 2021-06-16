import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        //the cool zone
        console.log(this.props.pokedex)

        return (
            <div>
                This is image Item.
            </div>
        )
    }
}
