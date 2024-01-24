
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newsbar from './components/Newsbar';
import { Routes,Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
         <>
         <Navbar/>
         <Routes>
            <Route path = "/" element={<Newsbar pageSize={6} country="in" category="general" />}/>
            <Route path = "/business" element={<Newsbar pageSize={6} country="in" category="business" />}/>
            <Route path = "/entertainment" element={<Newsbar pageSize={6} country="in" category="entertainment" />}/>
            <Route path = "/general" element={<Newsbar pageSize={6} country="in" category="general" />}/>
            <Route path = "/health" element={<Newsbar pageSize={6} country="in" category="health" />}/>
            <Route path = "/science" element={<Newsbar pageSize={6} country="in" category="science" />}/>
            <Route path = "/sports" element={<Newsbar pageSize={6} country="in" category="sports" />}/>
            <Route path = "/technology" element={<Newsbar pageSize={6} country="in" category="technology" />}/>
         </Routes>
       
         </>
    )
  }
}

