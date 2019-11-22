import React, { Component } from "react";
import Quote from "./Quote.js"


export default class QuoteSearcher extends Component {
    
    state = {
        quotes: []
    }

    componentDidMount() {
        fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
        .catch(console.error)
    }

    render () {
        return (
          <div className="quote-searcher">
            <h1>Quotes</h1>
            <ul>
                {this.state.quotes.map(quote =>
                    <Quote 
                    text={quote.quoteText}
                    author={quote.quoteAuthor}
                    key={quote._id}/>)}
            </ul>
          </div>
        );
      }
 }