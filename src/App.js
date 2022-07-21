import React, { useState } from 'react'
import NavBar from './components/NavBar';
import NewsItems from './components/NewsItems';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import NoteState from './context/NoteState';

export default function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<NewsItems setProgress={setProgress} apiKey={apiKey} key="general" category="general" pageSize="8" country="in" />}></Route>
            <Route exact path="/business" element={<NewsItems setProgress={setProgress} apiKey={apiKey} key="business" category="business" pageSize="8" country="in" />}></Route>
            <Route exact path="/entertainment" element={<NewsItems setProgress={setProgress} apiKey={apiKey} key="entertainment" category="entertainment" pageSize="8" country="in" />}></Route>
            <Route exact path="/general" element={<NewsItems setProgress={setProgress} apiKey={apiKey} key="general" category="general" pageSize="8" country="in" />}></Route>
            <Route exact path="/health" element={<NewsItems setProgress={setProgress} apiKey={apiKey} key="health" category="health" pageSize="8" country="in" />}></Route>
            <Route exact path="/science" element={<NewsItems setProgress={setProgress} apiKey={apiKey} key="science" category="science" pageSize="8" country="in" />}></Route>
            <Route exact path="/sports" element={<NewsItems setProgress={setProgress} apiKey={apiKey} key="sports" category="sports" pageSize="8" country="in" />}></Route>
            <Route exact path="/technology" element={<NewsItems setProgress={setProgress} apiKey={apiKey} key="technology" category="technology" pageSize="8" country="in" />}></Route>
          </Routes>
        </BrowserRouter>
      </NoteState>
    </div>
  )
}