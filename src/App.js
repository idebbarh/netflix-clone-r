import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import GetStartedPage from './pages/get started/GetStartedPage';
import LoginPage from './pages/login/LoginPage';

function App() {
  return (
    <div className="app">
      {/* <Routes>
        <Route path="/" element={<Navigate replace to="/browser" />} />
        <Route path='browser/*' element={<HomePage/>}/>
      </Routes> */}


      <Routes>
              <Route path="/" element={<GetStartedPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              {/* <Route path="/signup" element={<SignupPage/>}/> */}
          </Routes>
    </div>
  );
}

export default App;
