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
        .then( (incomingData) => {
            this.setState({fetching: true})
            console.log("fetching should change to true, value of fetching:", this.state.fetching)
            return incomingData.json()
        })
        .then(incomingData => {
            console.log("why does incomingData come up undefined here?", incomingData)
            const processedData = incomingData
                .results
                    .map(quote => {
                        return {...quote, likedStatus: null};
                    })
            return processedData
        })

        .then(incomingData => {
            console.log("is my likedStatus added?", incomingData)
            this.updateQuotes(incomingData)
            console.log("is the state updated?", this.state.quotes)
            this.setState({fetching:false})
            console.log("fetching should be changed to false once state updated, value of fetching:", this.state.fetching)
        })

        .catch(console.error)
    }
    
    // _proto_ of fetched data still comes up in the state.quotes, should it?
    updateQuotes(incomingData) {
        this.setState({
            quotes: incomingData
        })
    }

    // this might not be usable
    countLikeDislike () {
        this.state.quotes.likedStatus.reduce((acc,likedOrDisliked) => {
            if(likedOrDisliked === true) {
                acc.likes += 1
            } else if (likedOrDisliked === false) {
                acc.dislikes += 1
            } else {
                // do nothing?
            }
            return acc
        },{
            likes: 0,
            dislikes: 0
        }); // end of reduce 
    }; // end of method


    setLiked = (key, likedness) => {
        console.log("Hi there!", key, likedness);
        this.setState({
            
        })

    }




    render () {
  
        return (
          <div className="quote-searcher">
            <h1>Quotes</h1>
            <h2>Liked:{this.countLikeDislike.likes} Disliked: {this.countLikeDislike.dislikes} </h2>
            {this.state.fetching === true
            ? "Loading..."
            :   <ul>
                    {this.state.quotes.map(quote =>
                    <Quote
                    likedness={quote.likedStatus}
                    text={quote.quoteText}
                    author={quote.quoteAuthor}
                    key={quote._id}/>)}
                </ul>
            }

          </div>
        );
      }
 }