import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import { Link } from "react-router-dom";
import TodoContainer from "./components/TodoContainer";
import style from './App.module.css';
import Contact from './Contact';

const App = () => {

  return (
    <BrowserRouter className={style.container}>
      <nav >
        <h1>
          <ul className={style.appList}>
            <li className={style.header}><Link to="/" >Home</Link></li>
            <li className={style.header}><Link to="/new" >Contact</Link></li>
            <li className={style.header} > <Link to="/TodoList"> View tasks </Link></li>
          </ul>
        </h1>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/TodoList" element={<TodoContainer />} />
        <Route path="/new" element={< Contact />} />
      </Routes>
    </BrowserRouter>


  );
};




export default App;