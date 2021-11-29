import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
import {Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header/>
      <Courses/>
    </div>
  );
}

export default App;