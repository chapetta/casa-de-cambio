import fetchCurrencies from "./api"


function renderRAte(currencies, rate) {
  const ul = document.querySelector('ul')
  const li = document.createElement('li')
    li.innerText = `${currencies}: ${rate}`
    ul.appendChild(li)
}

function handleRates(rates) {
  const ratesEntries = Object.entries(rates)
  ratesEntries.forEach((entry) => {
    renderRAte(entry[0], entry[1])
  })
}
import Swal from "sweetalert2"

function handleBase(base) {
  const baseElement = document.querySelector('#base')
  baseElement.innerText = `Valores referentes a 1 ${base}:`
}

function getCurrencies() {
  const searchInput = document.querySelector('#currency-input')
  const searchButton = document.querySelector('#search-button')

  searchButton.addEventListener('click', async () => {
    try {
      const ul = document.querySelector('ul')
      ul.innerHTML= ''
      const currencie = searchInput.value
      const { base_code, conversion_rates } = await fetchCurrencies(currencie)
      handleRates(conversion_rates)
      handleBase(base_code)
      
      searchInput.value = ''
    } catch(error) {
      Swal.fire({
        title: 'Ops',
        text: 'Moeda incorreta! Tente novamente',
        icon: 'error'
    })
    searchInput.value = ''
    }
  })
}

async function start() {
  getCurrencies()
}

start()

