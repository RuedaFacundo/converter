import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Date from '../components/Date';
import Impuestos from '../components/Impuestos';
import InputDolar from '../components/InputDolar';
import Total from '../components/Total';
import { DataContext } from '../context/DataContext';

const Converter = () => {

  var dolarOficial = useContext(DataContext);
  const { country } = useParams();

  return (
    <div className="mx-auto max-w-7xl px-6">
      <form id="form-calculate-tax-dollar" className="m-0">
        <div className="row mb-2">
          <div className="col-12 col-md-6">
            <div className="form-group">
            <InputDolar
              country={country}>
            </InputDolar>
            </div>
          </div>
        </div>
          <div className="d-flex flex-column width-100 border-bottom pb-3 mb-3">
              <Impuestos
                impuesto='Sin impuestos'
                valor={dolarOficial}
              ></Impuestos>
              <Impuestos
                impuesto='+ Impuesto PAÍS (30%)'
                valor={dolarOficial}
              ></Impuestos>
              <Impuestos
                impuesto='+ Imp. a las ganancias (45%)'
                valor={dolarOficial}
              ></Impuestos>
              <Total></Total>
          </div>
          <div className="d-flex flex-row align-items-center width-100">
            <div className="d-flex flex-column">
                <span className="text-xs uppercase weight-500">Cotización dolar oficial</span>
                <div className="d-inline-block text-l weight-500 mb-1">
                    <span>1 USD = </span>
                    <span id="usdOficialValue" className="text-success bold">{dolarOficial}</span>
                    <span> ARS</span>
                </div>
                <Date></Date>
            </div>
          </div>
      </form>
    </div>
  )
}

export default Converter