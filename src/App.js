import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoContainer from './components/TodoContainer';
import LandingPage from './LandingPage';
import { Link } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/TodoList" element={<TodoContainer />} />

      </Routes>
    </BrowserRouter>
  );
}





export default App;