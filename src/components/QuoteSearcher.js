import React, { Component } from "react";
import Quote from "./Quote.js"
import SearchBar from "./SearchBar.js"

export default class QuoteSearcher extends Component {
    
    state = {
        fetching: false,
        // searchQuery: "", don't need to store it in local state
        quotes: []
    }

    componentDidMount() {
        this.setState({fetching: true})
        // console.log("fetching should change to true, value of fetching:", this.state.fetching)
        this.search()
        this.setState({fetching: false})
        // console.log("fetching should be changed to false once state updated, value of fetching:", this.state.fetching)

    };
    
    // _proto_ of fetched data still comes up in the state.quotes, should it?
    updateQuotes(incomingData) {
        this.setState({
            quotes: incomingData
        })
    };

    // this might not be usable
    countLikeDislike = () => {
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



    search = (searchQuery) => {
        console.log("search is running")
        const newQuery = "https://quote-garden.herokuapp.com/quotes/search/" + searchQuery
        fetch(newQuery)
        .then( (incomingData) => {
            return incomingData.json()
        })
        .then(incomingData => {
            // console.log("why does incomingData come up undefined here?", incomingData)
            const processedData = incomingData
                .results
                    .map(quote => {
                        return {...quote, likedStatus: null};
                    })
            return processedData
        })
        .then(incomingData => {
            // console.log("is my likedStatus added?", incomingData)
            this.updateQuotes(incomingData)
            // console.log("is the state updated?", this.state.quotes)
        })
        .catch(console.error)


    };

    setLiked = (id) => {
        // console.log("Hi there! Like callback!", id);
        const updatedQuotes = this.state.quotes.map(quote => {
            if (quote._id === id) {
                // console.log("this is the quote ID", quote._id)
                // console.log("this is the quote you liked", quote)
                return {...quote, likedStatus: true};
            } else {
                return quote;
            }
        });
        this.setState({quotes: updatedQuotes});
        // console.log("check if the likeStatus of the quote changed", this.state.quotes)

        
    }; // setLiked ends

    setDisliked = (id) => {
        // console.log("Hi there! Dislike callback!", id);
        const updatedQuotes = this.state.quotes.map(quote => {
            if (quote._id === id) {
                // console.log("How does the quote look like",{...quote, likedStatus: false})
                return {...quote, likedStatus: false};
            } else {
                return quote;
            }
        });
        this.setState({quotes: updatedQuotes});
        // console.log("Lets see if the likedStatus changed", this.state.quotes)
    }; // setDisliked ends

    render () {
        // console.log("countLikeDislike values ", this.countLikeDislike, this.countLikeDislike.likes)

        return (
          <div className="quote-searcher">
            <h1>Quotes</h1>
            <SearchBar
            search = {this.search}
            />
            <h2>Liked:{this.countLikeDislike.likes} Disliked: {this.countLikeDislike.dislikes} </h2>
            {this.state.fetching === true
            ? "Loading..."
            :   <ul>
                    {this.state.quotes.map(quote =>
                    <Quote
                    likedStatus={quote.likedStatus}
                    text={quote.quoteText}
                    author={quote.quoteAuthor}
                    id={quote._id}
                    key={quote._id}
                    setLiked={this.setLiked}
                    setDisliked={this.setDisliked}
                    />)}
                </ul>
            }

          </div>
        );
      }
 }