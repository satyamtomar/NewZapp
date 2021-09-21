import React, { Component } from 'react'
import Newscard from './Newscard'

export class NewsArea extends Component {

    constructor(){
        super();
        console.log('Newscard');
        this.state ={
           articles: [],
           loading:false ,
           page:1
        }

    }
   async componentDidMount()
    {
        let url="https://newsapi.org/v2/top-headlines?country=US&apiKey=a07b6096c54c41fe897870ee1d69e63e";
        let data= await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }
   
    render() {
        return (
            <div className="container my-3">
                <h1>NewZapp- Top Headlines of the day</h1>
                <div className="row">
                {this.state.articles.map((ele)=>{
                   return <div className="col-md-4" key={ele.url}>
                <Newscard  title={ele.title} description={ele.description} imgurl={ele.urlToImage} newsurl={ele.url}   />
                </div>
              
                })}
                           </div>
                           <div className="container d-flex justify-content-between">
                           <button type="button" class="btn btn-dark">Previous</button>
                           <button type="button" class="btn btn-dark">Next</button>
                           </div>
            </div>
        )
    }
}

export default NewsArea
