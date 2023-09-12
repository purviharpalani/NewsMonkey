import logo from './logo.svg';
import './App.css';

import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);

    return (
      <div>
        <BrowserRouter>
        <Navbar></Navbar>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        {/* <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='sports'></News> */}
      <Routes>
        <Route exact path = "/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='general'/>}/>
        <Route exact path = "/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='business'/>}/>
        <Route exact path = "/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='entertainment'/>}/>
        <Route exact path = "/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='health'/>}/>
        <Route exact path = "/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='science'/>}/>
        <Route exact path = "/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='sports'/>}/>
        <Route exact path = "/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='technology'/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    )
  }

export default App;
