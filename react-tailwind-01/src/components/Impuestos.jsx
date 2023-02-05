import React, { useContext }  from 'react'
import { MyContext } from '../context/ContextProvider';

const Impuestos = (props) => {

  const { impuesto } = props;
  const { state } = useContext(MyContext);

  function percentaje(impuesto) {
    switch (impuesto) {
      case '+ Impuesto PAÍS (30%)':
        return Math.round((state * 0.30) * 100) / 100;
      case '+ Imp. a las ganancias (45%)':
        return Math.round((state * 0.45) * 100) / 100;
      default:
        return Math.round(state * 100) / 100;
    } 
  }

  return (
    <div className="flex flex-row py-6 justify-between">
      <div className="col p-0">
        <span className="text-m weight-500">{impuesto}</span>
      </div>
      <div className="col-auto p-0">
        <span id="countryTax" className="text-m">${
        percentaje(impuesto) === 0 || isNaN(percentaje(impuesto)) ? '-' : percentaje(impuesto)}</span>
      </div>
    </div>
  )
}

export default Impuestos
