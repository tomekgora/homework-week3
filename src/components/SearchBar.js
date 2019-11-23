import React, { Component } from "react";
// import { directive } from "@babel/types";
import PropTypes from "prop-types"

export default class SearchBar extends Component {
    
    // eslint-disable-next-line react/no-typos
    static propTypes = { 
        search: PropTypes.func.isRequired
    }
    
    state={
        searchQuery: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.search(this.state.searchQuery)
        this.setState({
            searchQuery: " "
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                        type="text" 
                        name="searchQuery"
                        onChange={this.handleChange}
                        value={this.state.searchQuery}
                        />
                    </label>
                    <input type="submit" value="Search"/>
                </form>
            </div>

        )
    } 
}