import { Route, Routes } from 'react-router-dom';
import ProductAllPage from './page/ProductAllPage';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const[authenticate,setAuthenticate]=useState(false)
  return (
    <div>

      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>

      <Routes>
       <Route path='/' element={<ProductAllPage authenticate={authenticate} setAuthenticate={setAuthenticate}/>}/>
       <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
       <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
