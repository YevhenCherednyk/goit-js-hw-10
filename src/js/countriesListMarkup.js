export default function createCountriesListMarkup(country) {
  return country
    .map(
      ({ name, flags }) => `<li calss="country-item">
        <div class="country-card">
          <img
            class="country-flag"
            src="${flags.svg}"
            alt="${name} flag"
            width="100"
          />
          <h2 class="country-name">${name.official}</h2>
        </div>
      </li>`
    )
    .join('');
}
