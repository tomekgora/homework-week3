import React, { Component } from "react";
import "./Quote.css"
import PropTypes from "prop-types"

export default class Quote extends Component {
    
  static propTypes = {
    id: PropTypes.string.isRequired,
    likedStatus: PropTypes.any.isRequired,
    setLiked: PropTypes.func.isRequired,
    setDisliked: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }

  state = {
        // // likedStatus: null,
        // textColor: "black",
    }
//Old methods managing internal state
    // liked = () => {
    //   this.setState({
    //     likedStatus: true,
    //     textColor: "green"
    //   })
    //   console.log("the LIKE button was clicked, new likedStatus value is", this.state.likedStatus)
    // }

    // disliked = () => {
    //   this.setState({
    //     likedStatus: false,
    //     textColor: "red"
    //   })
    //   console.log("the DISLIKE button was clicked, new likedStatus value is", this.state.likedStatus)
    // }

    toggleQuoteTextFormat = () => {
      this.setState({
        
        textColor: "green"
      })
    }

    toggleQuoteDisliked = () => {}

    likedClick = () => {
      console.log("likedClick")
      this.props.setLiked(this.props.id)
      console.log("Does the liked callback work?", this.props.likedStatus)
    }
    
    dislikedClick = () => {
      console.log("dislikedClick")
      this.props.setDisliked(this.props.id)
      console.log("Does the disliked callback work?", this.props.likedStatus)

    }


    render () {
      console.log("Liked status of quote on render", this.state.likedStatus)
        return (
          <div className="quote">
            <div 
                className="quote-text"
                style = {{
                  color: this.state.textColor
                }}
            >

                <p>{this.props.text}</p>
            </div>
            <p className="author">By: {this.props.author}</p>
            <button className="buttons" onClick={this.likedClick}>:)</button>
            <button className="buttons" onClick={this.dislikedClick}>:(</button>
          </div>
        )
      }
}