import React, { Component } from "react";
import "./Quote.css"

export default class Quote extends Component {
    state = {
        liked: null
    }

    liked = () => {
      this.setState({
        liked: true
      })
      console.log("the LIKE button was clicked, new LIKED value is", this.state.liked)
    }

    disliked = () => {
      this.setState({
        liked: false
      })
      console.log("the DISLIKE button was clicked, new LIKED value is", this.state.liked)
    }

    render () {
        return (
          <div className="quote">
            <p>{this.props.text}</p>
            <p className="author">By: {this.props.author}</p>
            <button className="buttons" onClick={this.liked}>:)</button>
            <button className="buttons" onClick={this.disliked}>:(</button>
          </div>
        )
      }
}