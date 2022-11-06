import '../css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import CountriesApiService from './fetchCountries';
import createCountryMarkup from './countryMarkup';
import createCountriesListMarkup from './countriesListMarkup';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputRef: document.querySelector('#search-box'),
  countryInfoRef: document.querySelector('.country-info'),
  countryListRef: document.querySelector('.country-list'),
};

const countriesApiService = new CountriesApiService();

refs.inputRef.addEventListener(
  'input',
  debounce(onCountrySearch, DEBOUNCE_DELAY)
);

function onCountrySearch(evt) {
  evt.preventDefault();

  countriesApiService.query = evt.target.value.trim();

  if (!countriesApiService.query) {
    clearInput();
    return;
  }

  countriesApiService
    .fetchCountries()
    .then(data => appendCountryMarkup(data))
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

function appendCountryMarkup(data) {
  clearInput();
  if (data.length === 1) {
    refs.countryInfoRef.insertAdjacentHTML(
      'beforeend',
      createCountryMarkup(data)
    );
  }
  if (data.length >= 2 && data.length <= 10) {
    refs.countryListRef.insertAdjacentHTML(
      'beforeend',
      createCountriesListMarkup(data)
    );
  }
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}

function clearInput() {
  refs.countryInfoRef.innerHTML = '';
  refs.countryListRef.innerHTML = '';
}
