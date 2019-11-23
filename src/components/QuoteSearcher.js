import React, { Component } from "react";
import Quote from "./Quote.js"


export default class QuoteSearcher extends Component {
    
    state = {
        fetching: false,
        quotes: []
    }

    componentDidMount() {
        fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
        // insert conditional statement for fetching false/true
        .then(incomingData => incomingData.json())
        .then (incomingData => {
            console.log("data from quote API", incomingData)
            this.updateQuotes(incomingData)
            console.log("state updated with incomingData?", this.state.quotes)
           
        })
        .catch(console.error)
    }

    updateQuotes(incomingData) {
        this.setState({
            quotes: incomingData.results
        })
    }

    render () {
        return (
          <div className="quote-searcher">
            <h1>Quotes</h1>
            {this.state.fetching === true
            ? "Loading..."
            :   <ul>
                    {this.state.quotes.map(quote =>
                    <Quote 
                    text={quote.quoteText}
                    author={quote.quoteAuthor}
                    key={quote._id}/>)}
                </ul>
            }

          </div>
        );
      }
 }