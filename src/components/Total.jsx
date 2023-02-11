import React, { useContext } from 'react'
import { MyContext } from '../context/ContextProvider';

const Total = () => {

  const { state } = useContext(MyContext);

  return (
    <div className="flex flex-row py-3 justify-between text-white rounded-lg" style={{ backgroundColor: '#377DFF' }}>
      <div className="col p-0">
          <span className="text-m weight-500">Total con imp. incluídos</span>
      </div>
      <div className="col-auto p-0">
          <span id="totalWithTaxes" className="text-m">${isNaN(state) ? '-' : Math.round((state * 1.75) * 100) / 100  }</span>
      </div>
    </div>
  )
}

export default Total