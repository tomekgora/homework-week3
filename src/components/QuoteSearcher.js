import React, { Component } from "react";
import Quote from "./Quote.js"


export default class QuoteSearcher extends Component {
    

    state = {
        quotes: [
            {
                "_id": "5d91b45d9980192a317c8acc",
                "quoteText": "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
                "quoteAuthor": "Bruce Lee"
              },
              {
                "_id": "5d91b45d9980192a317c8abe",
                "quoteText": "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
                "quoteAuthor": "Abraham Lincoln"
              },
              {
                "_id": "5d91b45d9980192a317c8955",
                "quoteText": "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
                "quoteAuthor": "J. Willard Marriott"
              },
        ]
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