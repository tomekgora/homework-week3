import React, { Component } from "react";
import Quote from "./Quote.js"


export default class QuoteSearcher extends Component {
    
    state = {
        fetching: true,
        quotes: []
    }

    componentDidMount() {
        fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
        .then(incomingData => incomingData.json())
        .then (incomingData => {
            console.group("data from quote API", incomingData)
            this.updateQuotes(incomingData)
            console.log("state updated with incomingData?", this.state.quotes)
           
        })
        .catch(console.error)
    }

    updateQuotes(incomingData) {
        this.setState({
            quotes: incomingData
        })
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