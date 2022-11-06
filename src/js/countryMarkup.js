export default function createCountryMarkup(country) {
  return country
    .map(
      ({
        name,
        capital,
        population,
        flags,
        languages,
      }) => `<div class="country-card">
        <img class="country-flag" src="${
          flags.svg
        }" alt="${name} flag" width="100"/>
        <h2 class="country-name">${name.official}</h2>
      </div>
      <p class="country-capital">
      <span class="county-info-tittle">Capital:</span> ${capital}
      </p>
      <p class="country-population">
      <span class="county-info-tittle">Population:</span> ${population}
      </p>
      <p clas="country-languages">
      <span class="county-info-tittle">Languages:</span> ${Object.values(
        languages
      ).join(', ')}
      </p>`
    )
    .join('');
}
