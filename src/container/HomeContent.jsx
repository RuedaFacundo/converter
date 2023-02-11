import Sale from '../statics/images/sale.svg';

export default function Example() {
  return (
    <div className="bg-white py24 sm:py-22 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">App para convertir monedas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Convertir la moneda de un pais a pesos argentinos segun los diferentes tipos de dolar</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Seleccione una moneda extranjera para realizar el calculo!
          </p>
        </div>
        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none" style={ {display: 'flex', justifyContent: 'center'} }>
          <img src={Sale} alt={"Imagen principal"} style={{ maxWidth: 700 }}></img>
        </div>
      </div>
    </div>
  )
}
