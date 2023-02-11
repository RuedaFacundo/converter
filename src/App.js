import './App.css';
import Home from './container/Home';
import React, { useState, useEffect, useRef } from 'react';
import { ContextProvider } from './context/ContextProvider';
import { DataContext } from './context/DataContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from './container/Error404';
import Converter from './container/Converter';
import Header from './container/Header';
import GetCurrencyCountries from './utils/dolarValue';

function App() {

  const [cotizaciones, setCotizaciones] = useState(null);
  const flagRef = useRef(true);

  useEffect(() => {
    if(flagRef.current === true) {
      GetCurrencyCountries().then(data => {
      setCotizaciones(data);
      flagRef.current = false;
      });
    }
  }, []);

  return (
    <DataContext.Provider value={cotizaciones}>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path='/converter/:country' element={<Converter />}></Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </DataContext.Provider>
  );
}

export default App;
