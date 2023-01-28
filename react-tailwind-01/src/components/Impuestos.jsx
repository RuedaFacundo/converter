import React from 'react'

const Impuestos = (props) => {

  const { impuesto, valor } = props;

  return (
    <div class="flex flex-row py-6 justify-between">
      <div class="col p-0">
          <span class="text-m weight-500">{impuesto}</span>
      </div>
      <div class="col-auto p-0">
          <span id="countryTax" class="text-m">{valor}</span>
      </div>
    </div>
  )
}

export default Impuestos
