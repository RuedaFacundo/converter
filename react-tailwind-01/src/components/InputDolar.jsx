import React, { useContext } from 'react'
import { MyContext } from '../context/ContextProvider';
import { DataContext } from '../context/DataContext';
import { useParams } from 'react-router-dom';

const InputDolar = () => {
  const { setState } = useContext(MyContext);
  var dolarOficial = useContext(DataContext);
  let { country } = useParams();


  const handleValueChange = e => {
    e.preventDefault();
    setState(e.target.value * dolarOficial);
  }

  const countries = [
    {
      country: 'Mexico',
      img: "https://tiempofinanciero.com.ar/wp-content/plugins/calculadoras-rino-media//flags/usd.png?ezimgfmt=rs:26x17/rscb1/ngcb1/notWebP",
      description: 'Cantidad de Pesos Mexicanos (MX)'
    },
    {
      country: 'EEUU',
      img: 'https://tiempofinanciero.com.ar/wp-content/plugins/calculadoras-rino-media//flags/usd.png?ezimgfmt=rs:26x17/rscb1/ngcb1/notWebP',
      description: 'Cantidad de dolares (USD)'
    },
    {
      country: 'Europa',
      img: 'https://tiempofinanciero.com.ar/wp-content/plugins/calculadoras-rino-media//flags/usd.png?ezimgfmt=rs:26x17/rscb1/ngcb1/notWebP',
      description: 'Cantidad de Euros (€)'
    },
    {
      country: 'Brasil',
      img: 'https://tiempofinanciero.com.ar/wp-content/plugins/calculadoras-rino-media//flags/usd.png?ezimgfmt=rs:26x17/rscb1/ngcb1/notWebP',
      description: 'Cantidad de Reales (R)'
    },
  ]

  const result = countries.filter(item => item.country === country);

  return (
    <div>
      <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{result[0].description}</label>
      <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
        <img src={result[0].img} width="32" alt="currency" height="32">
        </img>
        </span>
        <input 
          type="tel" 
          id="currency" 
          className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Ingrese cantidad de dinero"
          onChange={handleValueChange}
        ></input>
      </div>
    </div>
  )
}

export default InputDolar
