import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate replace to="/browser" />} />
        <Route path='browser/*' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
