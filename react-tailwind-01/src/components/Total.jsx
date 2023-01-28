import React from 'react'

const Total = () => {
  return (
    <div class="flex flex-row py-3 justify-between text-white rounded-lg" style={{ backgroundColor: '#377DFF' }}>
      <div class="col p-0">
          <span class="text-m weight-500">Total con imp. incluídos</span>
      </div>
      <div class="col-auto p-0">
          <span id="totalWithTaxes" class="text-m">-</span>
      </div>
    </div>
  )
}

export default Total