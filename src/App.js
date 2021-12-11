import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsArea from './components/NewsArea';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> 
{
  //apikey=process.env.REACT_APP_NEWS_API;
const  apikey="3763c7b0d1eb4337af63b64c2782d64a";
  const [progress,setProgress]=useState(0)
  
  // const SetProgress=(progress)=>
  // {
  //   setState({progress:progress});
  // }
  const pagesize=9;
  
    return (
      <div>
      <Router>
        <Navbar/>
        <LoadingBar
        height={3}
       color='#ffffff'
        progress={progress}
      />
        <Switch>
          <Route exact path="/"><NewsArea setProgress={setProgress} apikey={apikey} key="general" pagesize={pagesize} country="us" category="general"/></Route>
          <Route exact path="/business"><NewsArea setProgress={setProgress} apikey={apikey} key="business" pagesize={pagesize} country="US" category="business"/></Route>
          <Route exact path="/entertainment"><NewsArea setProgress={setProgress} apikey={apikey} key="entertainment" pagesize={pagesize} country="US" category="entertainment"/></Route>
          <Route exact path="/health"><NewsArea setProgress={setProgress} apikey={apikey}  key="health" pagesize={pagesize} country="US" category="health"/></Route>
          <Route exact path="/science"><NewsArea setProgress={setProgress} apikey={apikey} key="science" pagesize={pagesize} country="US" category="science"/></Route>
          <Route exact path="/sports"><NewsArea setProgress={setProgress} apikey={apikey} key="sports" pagesize={pagesize} country="US" category="sports"/></Route>
          <Route exact path="/technology"><NewsArea setProgress={setProgress} apikey={apikey} key="technology" pagesize={pagesize} country="US" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }

export default App;