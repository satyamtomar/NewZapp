import React, { Component } from 'react'
import Newscard from './Newscard'
import Spin from './Spin'
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsArea extends Component {
  
    capitalizeFirstletter  =(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        console.log('Newscard');
        this.state ={
           articles: [],
           loading:false ,
           page:1,
           totalResults:0
        }
    document.title=`NewZapp-${this.capitalizeFirstletter(this.props.category)}`;
    }
    async updatednews(){
        this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        console.log(url)
        let data= await fetch(url);
        this.props.setProgress(40);
        let parsedData=await data.json();
        this.props.setProgress(70);
       console.log(parsedData);
        this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
       this.props.setProgress(100);
    }
   async componentDidMount()
    {
    this.updatednews();  
    }

    handleprevclick =async ()=>{
    this.setState({
        page:this.state.page-1,      
    })
    this.updatednews();
    }
    handlenextclick = async ()=>
   {
    this.setState({
        page:this.state.page+1,      
    })
    this.updatednews();
   }

    fetchMoreData = async() => {
    this.setState({page:this.state.page +1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
       console.log(url)
       let data= await fetch(url);
       let parsedData=await data.json();
      console.log(parsedData);
       this.setState({articles: this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults,loading:false})
   
  };

    render() {
        return (
            <>
                <h1 className="text-center">NewZapp- Top  {this.capitalizeFirstletter(this.props.category)} Headlines</h1>
                {this.state.loading&&<Spin/>}
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spin/>}
        >
        <div className="container my-3">
                <div className="row">
                {this.state.articles.map((ele)=>
                {
                   return <div className="col-md-4" key={ele.url}>
                <Newscard  title={ele.title} description={ele.description} sources={ele.source.name} imgurl={ele.urlToImage} newsurl={ele.url} author={ele.author} date={ele.publishedAt} />
                </div>
              
                })}
                 </div>
                 </div>
                 </InfiniteScroll>
                           {/* <div className="container d-flex justify-content-between">
                           <button  disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> Previous </button>
                           <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}> Next </button>
                           </div> */}
            </>
        )
    }
}

export default NewsArea

