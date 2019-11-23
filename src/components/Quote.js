import React, { Component } from "react";
import "./Quote.css"

export default class Quote extends Component {
    state = {
        liked: null
    }

    render () {
        return (
          <div className="quote">
            <p>{this.props.text}</p>
            <p className="author-and-buttons">By: {this.props.author}</p>
            <button className="author-and-buttons">:)</button>
            <button className="author-and-buttons">:(</button>
              
          </div>
        )
      }
}