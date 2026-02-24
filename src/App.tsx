import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Dashboard from './components/section/Layout'
import First from './components/section/First';

function App() {
  return (
    <>
    <Header/>
    <Dashboard/>
    {/* <First/> */}
    <Footer/>
    </>
  );
}

export default App;
