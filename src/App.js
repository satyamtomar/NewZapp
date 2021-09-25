import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsArea from './components/NewsArea';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component 
{
  state={
    progress:0
  }
  SetProgress=(progress)=>
  {
    this.setState({progress:progress});
  }
  pagesize=9;
  render() {
    return (
      <div>
      <Router>
        <Navbar/>
        <LoadingBar
        height={3}
       // color='#f11946'
       color='#ffffff'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Switch>
          <Route exact path="/"><NewsArea setProgress={this.SetProgress} key="general" pagesize={this.pagesize} country="us" category="general"/></Route>
          <Route exact path="/business"><NewsArea setProgress={this.SetProgress} key="business" pagesize={this.pagesize} country="US" category="business"/></Route>
          <Route exact path="/entertainment"><NewsArea setProgress={this.SetProgress} key="entertainment" pagesize={this.pagesize} country="US" category="entertainment"/></Route>
          <Route exact path="/health"><NewsArea setProgress={this.SetProgress}  key="health" pagesize={this.pagesize} country="US" category="health"/></Route>
          <Route exact path="/science"><NewsArea setProgress={this.SetProgress} key="science" pagesize={this.pagesize} country="US" category="science"/></Route>
          <Route exact path="/sports"><NewsArea setProgress={this.SetProgress} key="sports" pagesize={this.pagesize} country="US" category="sports"/></Route>
          <Route exact path="/technology"><NewsArea setProgress={this.SetProgress} key="technology" pagesize={this.pagesize} country="US" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
