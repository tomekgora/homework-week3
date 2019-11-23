import React, { Component } from "react";
import { directive } from "@babel/types";

export default class SearchBar extends Component {
    state={
        value: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div className="search-bar">
                <form>
                    <label>
                        <input 
                        type="text" 
                        query="query"
                        onChange={this.handleChange}
                        value={this.state.name}
                        />
                    </label>
                    <input type="submit" value="Search"/>
                </form>
            </div>

        )
    } 
}