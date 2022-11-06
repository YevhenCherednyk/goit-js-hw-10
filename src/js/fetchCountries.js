const BASE_URL = 'https://restcountries.com/v3.1';

export default class CountriesApiService {
  constructor() {
    this.name = '';
  }

  fetchCountries() {
    const url = `${BASE_URL}/name/${this.name}?fields=name,capital,population,flags,languages`;

    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  get query() {
    return this.name;
  }

  set query(newName) {
    this.name = newName;
  }
}
