async function fetchCurrencies (moeda) {
  const API_KEY = 'c8da5cbb56eea923e8ddb645'
  const ENDPOINT = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${moeda}`
  const response = await fetch(ENDPOINT)
  const {base_code, conversion_rates} = await response.json()
  return {
    base_code,
    conversion_rates
  }

}

export default fetchCurrencies;