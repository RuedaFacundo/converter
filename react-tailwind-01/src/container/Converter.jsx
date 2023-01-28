import React from 'react'
import Date from '../components/Date';
import Impuestos from '../components/Impuestos';
import InputDolar from '../components/InputDolar';
import Total from '../components/Total';

const Converter = () => {
  return (
    <div class="mx-auto max-w-7xl px-6">
      <form id="form-calculate-tax-dollar" class="m-0">
        <div class="row mb-2">
          <div class="col-12 col-md-6">
            <div class="form-group">
            <InputDolar></InputDolar>
            </div>
          </div>
        </div>
          <div class="d-flex flex-column width-100 border-bottom pb-3 mb-3">
              <Impuestos
                impuesto='Sin impuestos'
                valor='-'
              ></Impuestos>
              <Impuestos
                impuesto='+ Impuesto PAÍS (30%)'
                valor='-'
              ></Impuestos>
              <Impuestos
                impuesto='+ Imp. a las ganancias (45%)'
                valor='-'
              ></Impuestos>
              <Total></Total>
          </div>
          <div class="d-flex flex-row align-items-center width-100">
            <div class="d-flex flex-column">
                <span class="text-xs uppercase weight-500">Cotización dolar oficial</span>
                <div class="d-inline-block text-l weight-500 mb-1">
                    <span>1 USD =</span>
                    <span id="usdOficialValue" class="text-success bold">193</span>
                    <span>ARS</span>
                </div>
                <Date></Date>
            </div>
          </div>
      </form>
    </div>
  )
}

export default Converter

//TODO este componente debe recibir el pais seleccionado y mostrar la conversion realizada