import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsArea from './components/NewsArea';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component 
{
  pagesize=9;
  render() {
    return (
      <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><NewsArea key="general" pagesize={this.pagesize} country="us" category="general"/></Route>
          <Route exact path="/business"><NewsArea key="business" pagesize={this.pagesize} country="US" category="business"/></Route>
          <Route exact path="/entertainment"><NewsArea key="entertainment" pagesize={this.pagesize} country="US" category="entertainment"/></Route>
          <Route exact path="/health"><NewsArea  key="health" pagesize={this.pagesize} country="US" category="health"/></Route>
          <Route exact path="/science"><NewsArea key="science" pagesize={this.pagesize} country="US" category="science"/></Route>
          <Route exact path="/sports"><NewsArea key="sports" pagesize={this.pagesize} country="US" category="sports"/></Route>
          <Route exact path="/technology"><NewsArea key="technology" pagesize={this.pagesize} country="US" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
