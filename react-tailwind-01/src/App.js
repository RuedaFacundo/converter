import './App.css';
import Home from './container/Home';
import React, { useState } from 'react';
import axios from 'axios';
import { ContextProvider } from './context/ContextProvider';
import { DataContext } from './context/DataContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from './container/Error404';
import Converter from './container/Converter';
import Header from './container/Header';

function App() {
  const [data, setData] = useState([]);

  var config = {
    method: 'get',
    url: 'https://cors-anywhere.herokuapp.com/https://api.estadisticasbcra.com/usd_of',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDcwNzQ2MzEsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJmYWN1bmRvcnVlZGExNEBnbWFpbC5jb20ifQ.owAtmU5VNLcor7RbMWS_Yg9-Rv1AkXLowch7-_S6SOmX4yiYQP6pfJeB1sttSS7gIDmuKTHdmSLv38Jz1TXn2Q'
    }
  };
  
  axios(config)
  .then(function (response) {
    var json = response.data;
    const lastObject = json.slice(-1)[0];
    setData(lastObject.v);
  })
  .catch(function (error) {
    console.log('Error al obtener el valor del dolar actual');
  });

  return (
    <DataContext.Provider value={data}>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/converter/:country' element={<Converter />}></Route>
            <Route path='' element={<Error404 />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </DataContext.Provider>
  );
}

export default App;
