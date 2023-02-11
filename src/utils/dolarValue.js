import axios from 'axios';

const GetCurrencyCountries = () => {
  return axios.get('https://api.apilayer.com/exchangerates_data/latest?base=USD&symbols=EUR,ARS,BRL,MXN', {
  headers: {
  'apikey': '7ZJrB87CrQDuegMiN9cKTHcilomdDzcQ'
  }
  })
  .then(response => response.data)
  .catch(error => {
  console.log('Error al obtener el valor de las cotizaciones actuales');
  return null;
  });
  };

export default GetCurrencyCountries;

