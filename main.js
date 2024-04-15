import fetchCurrencies from "./api"

async function start() {
  const { base_code, conversion_rates } = await fetchCurrencies('BRL')
  const ul = document.querySelector('ul')
  const ratesEntries = Object.entries(conversion_rates)
  ratesEntries.forEach((entry) => {
    const li = document.createElement('li')
    li.innerHTML = `${entry[0]}: ${entry[1]}`
    ul.appendChild(li)
  })
}

