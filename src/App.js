import React from 'react'
import NavBar from './components/NavBar';
import NewsItems from './components/NewsItems';
import {BrowserRouter,Routes,Route} from "react-router-dom";

export default function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
    return (
      <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<NewsItems apiKey={apiKey} key="general" category="general" pageSize="8" country="in"/>}></Route>
          <Route exact path="/business" element={<NewsItems apiKey={apiKey} key="business" category="business" pageSize="8" country="in"/>}></Route>
          <Route exact path="/entertainment" element={<NewsItems apiKey={apiKey} key="entertainment" category="entertainment" pageSize="8" country="in"/>}></Route>
          <Route exact path="/general" element={<NewsItems apiKey={apiKey} key="general" category="general" pageSize="8" country="in"/>}></Route>
          <Route exact path="/health" element={<NewsItems apiKey={apiKey} key="health" category="health" pageSize="8" country="in"/>}></Route>
          <Route exact path="/science" element={<NewsItems apiKey={apiKey} key="science" category="science" pageSize="8" country="in"/>}></Route>
          <Route exact path="/sports" element={<NewsItems apiKey={apiKey} key="sports" category="sports" pageSize="8" country="in"/>}></Route>
          <Route exact path="/technology" element={<NewsItems apiKey={apiKey} key="technology" category="technology" pageSize="8" country="in"/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    )
}