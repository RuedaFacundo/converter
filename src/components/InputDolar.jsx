import React, { useContext } from 'react'
import { MyContext } from '../context/ContextProvider';
import { DataContext } from '../context/DataContext';
import { useParams } from 'react-router-dom';
import Country from './Country';
import data from '../statics/data/countries.json';

const InputDolar = () => {
  const { setState } = useContext(MyContext);
  const cotizaciones = useContext(DataContext);
  const ratesClean = {
    "ARS": 0,
    "EUR": 0,
    "MXN": 0,
    "BRL": 0
  };
  const rates = cotizaciones === null ? ratesClean : cotizaciones.rates;
  let { country } = useParams();
  const countries = data.countries;

  const handleValueChange = e => {
    e.preventDefault();
    switch (country) {
      case 'Mexico':
        setState(e.target.value / rates.MXN * rates.ARS);
        break;
      case 'EEUU':
        setState(e.target.value * rates.ARS);
        break;
      case 'Europa':
        setState(e.target.value / rates.EUR * rates.ARS);
        break;
      case 'Brasil':
        setState(e.target.value / rates.BRL * rates.ARS);
        break;
      default:
        return setState(e.target.value * rates.ARS);
    } 

  }

  const result = countries.filter(item => item.country === country);

  return (
    <div>
      <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 ">{result[0].title}</label>
      <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md ">
          <Country country={result[0].country} />
        </span>
        <input 
          type="tel" 
          id="currency" 
          className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5      " 
          placeholder="Ingrese cantidad de dinero"
          onChange={handleValueChange}
        ></input>
      </div>
    </div>
  )
}

export default InputDolar
