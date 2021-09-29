import React, { useEffect,useState } from 'react'
import Newscard from './Newscard'
import Spin from './Spin'
import InfiniteScroll from "react-infinite-scroll-component";

const NewsArea =(props)=> {
     const [articles,setArticles]=useState([]);
     const [loading,setLoading]=useState(true);
     const [page,setPage]=useState(1);
     const [totalResults,setTotalResults]=useState(0);
     

const capitalizeFirstletter  =(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // constructor(props){
    //     super(props);
    //     console.log('Newscard');
    //     state ={
    //        articles: [],
    //        loading:false ,
    //        page:1,
    //        totalResults:0
    //     }
    // }

    
    
    const  updatednews = async () => {
        props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
        setLoading(true);
    //    setState({loading:true})
        // console.log(url)
        let data= await fetch(url);
        props.setProgress(40);
        let parsedData=await data.json();
        props.setProgress(70);
    //    console.log(parsedData);
        setArticles(parsedData.articles);
       setTotalResults(parsedData.totalResults);
       setLoading(false);

        //setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
       props.setProgress(100);
    }
   useEffect(() => {
    document.title=`NewZapp-${capitalizeFirstletter(props.category)}`;
       updatednews();
       // eslint-disable-next-line
   }, [])
//    async componentDidMount()
//     {
//     updatednews();  
//     }

//  const   handleprevclick =async ()=>{
//     setState({
//         page:page-1,      
//     })
//     updatednews();
//     }
//   const  handlenextclick = async ()=>
//    {
//     // setState({
//     //     page:page+1,      
//     // })
//     updatednews();
//    }

   const fetchMoreData = async () => {
    //setState({page:page +1})
   
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
    //    console.log(url)
    setPage(page+1);
       let data= await fetch(url);
       let parsedData=await data.json();
      //console.log(parsedData);
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      
  };

           return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewZapp- Top  {capitalizeFirstletter(props.category)} Headlines</h1>
                {loading&&<Spin/>}
                <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spin/>}
        >
        <div className="container my-3">
                <div className="row">
                {articles.map((ele)=>
                {
                   return <div className="col-md-4" key={ele.url}>
                <Newscard  title={ele.title} description={ele.description} sources={ele.source.name} imgurl={ele.urlToImage} newsurl={ele.url} author={ele.author} date={ele.publishedAt} />
                </div>
              
                })}
                 </div>
                 </div>
                 </InfiniteScroll>
                           {/* <div className="container d-flex justify-content-between">
                           <button  disabled={page <=1} type="button" className="btn btn-dark" onClick={handleprevclick}> Previous </button>
                           <button disabled={page+1>Math.ceil(totalResults/props.pagesize)} type="button" className="btn btn-dark" onClick={handlenextclick}> Next </button>
                           </div> */}
            </>
        )
    }


export default NewsArea

