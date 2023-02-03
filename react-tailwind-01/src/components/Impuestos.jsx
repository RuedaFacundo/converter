import React, { useContext }  from 'react'
import { MyContext } from '../context/ContextProvider';

const Impuestos = (props) => {

  const { impuesto } = props;
  const { state } = useContext(MyContext);

  function percentaje(impuesto) {
    switch (impuesto) {
      case '+ Impuesto PAÍS (30%)':
        console.log('valor desde impuesto: ' +state) 
        return state * 0.30;
      case '+ Imp. a las ganancias (45%)':
        return state * 0.45;
      default:
        return state;
    } 
  }

  return (
    <div class="flex flex-row py-6 justify-between">
      <div class="col p-0">
          <span class="text-m weight-500">{impuesto}</span>
      </div>
      <div class="col-auto p-0">
          <span id="countryTax" class="text-m">{
          percentaje(impuesto) === 0 || isNaN(percentaje(impuesto)) ? '-' : percentaje(impuesto)}</span>
      </div>
    </div>
  )
}

export default Impuestos
