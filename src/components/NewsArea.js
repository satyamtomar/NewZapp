import React, { Component } from 'react'
import Newscard from './Newscard'
import Spin from './Spin'

export class NewsArea extends Component {

    constructor(){
        super();
        console.log('Newscard');
        this.state ={
           articles: [],
           loading:false ,
           page:1,
        }

    }
   async componentDidMount()
    {
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a07b6096c54c41fe897870ee1d69e63e&page=1&pagesize=${this.props.pagesize}`;
     //   let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3763c7b0d1eb4337af63b64c2782d64a`;
        this.setState({loading:true})
        console.log(url)
        let data= await fetch(url);
        console.log(data);
        let parsedData=await data.json();
       console.log(parsedData);
        this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    }

    handleprevclick =async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a07b6096c54c41fe897870ee1d69e63e&page=${this.state.page -1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data= await fetch(url);
    let parsedData=await data.json();
    // console.log(parsedData);
       
    this.setState({
        page:this.state.page-1,
        articles: parsedData.articles,
        loading:false
    })
    }
    handlenextclick = async ()=>
   {
       if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize))
       {}
       else{

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a07b6096c54c41fe897870ee1d69e63e&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
    
    let data= await fetch(url);
    let parsedData=await data.json();
    console.log("nextttttt")
             
    this.setState({
        page:this.state.page+1
        ,articles: parsedData.articles,
        loading:false
    })
}
   }
    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewZapp- Top Headlines of the day</h1>
                {this.state.loading&&<Spin/>}
                <div className="row">
                {!this.state.loading&&this.state.articles.map((ele)=>
                {
                   return <div className="col-md-4" key={ele.url}>
                <Newscard  title={ele.title} description={ele.description} sources={ele.source.name} imgurl={ele.urlToImage} newsurl={ele.url} author={ele.author} date={ele.publishedAt} />
                </div>
              
                })}
                           </div>
                           <div className="container d-flex justify-content-between">
                           <button  disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> Previous </button>
                           <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}> Next </button>
                           </div>
            </div>
        )
    }
}

export default NewsArea

