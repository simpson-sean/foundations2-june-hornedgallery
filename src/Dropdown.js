import React, { Component } from 'react'

export default class Dropdown extends Component {

    options = ['narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon'];


    render() {
        return (
            <label>
                <select onChange={this.props.handleChange}>
                    <option value="">All</option>
                    {this.props.options.map(optionString =>
                        <option value={optionString}>{optionString}</option>)}
                </select>
            </label>
        )
    }
}
