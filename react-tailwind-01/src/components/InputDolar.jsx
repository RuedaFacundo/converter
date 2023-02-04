import React, { useContext } from 'react'
import { MyContext } from '../context/ContextProvider';

const InputDolar = () => {
  const { setState } = useContext(MyContext);
  const handleValueChange = e => {
    e.preventDefault();
    setState(e.target.value * 193);
  }

  return (
    <div>
      <label htmlFor="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad de dolares (USD)</label>
      <div class="flex">
        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
        <img src="https://tiempofinanciero.com.ar/wp-content/plugins/calculadoras-rino-media//flags/usd.png?ezimgfmt=rs:26x17/rscb1/ngcb1/notWebP" width="32" alt="USD" height="32">
        </img>
        </span>
        <input 
          type="tel" 
          id="dolar" 
          class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Ingrese cantidad de USD"
          onChange={handleValueChange}
        ></input>
      </div>
    </div>
  )
}

export default InputDolar
