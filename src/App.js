import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NewsItems from './components/NewsItems';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY

  render() {
    return (
      <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<NewsItems apiKey={this.apiKey} key="general" category="general" pageSize="8" country="in"/>}></Route>
          <Route exact path="/business" element={<NewsItems apiKey={this.apiKey} key="business" category="business" pageSize="8" country="in"/>}></Route>
          <Route exact path="/entertainment" element={<NewsItems apiKey={this.apiKey} key="entertainment" category="entertainment" pageSize="8" country="in"/>}></Route>
          <Route exact path="/general" element={<NewsItems apiKey={this.apiKey} key="general" category="general" pageSize="8" country="in"/>}></Route>
          <Route exact path="/health" element={<NewsItems apiKey={this.apiKey} key="health" category="health" pageSize="8" country="in"/>}></Route>
          <Route exact path="/science" element={<NewsItems apiKey={this.apiKey} key="science" category="science" pageSize="8" country="in"/>}></Route>
          <Route exact path="/sports" element={<NewsItems apiKey={this.apiKey} key="sports" category="sports" pageSize="8" country="in"/>}></Route>
          <Route exact path="/technology" element={<NewsItems apiKey={this.apiKey} key="technology" category="technology" pageSize="8" country="in"/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    )
  }
}

