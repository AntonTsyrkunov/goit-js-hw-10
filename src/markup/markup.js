const stringifyLanguages = (languages) => (
    Object.values(languages)
);

const createCountriesMarkup = ({ src, name }) => (`
  <li class = "listItem">
    <img src="${src}" height="40px" width="60px"/>
    <span>${name}</span>
  </li>
`);

const crateCountryCard = ({ src,capital,population,flags,languages }) => (
    `
  <ul class="card">
    <li><img src="${src}" height="40px" width=60px"/>
    <h1>${name}</h1></li>
    <li><h2>Capital:${capital}</h2></li> 
    <li><h2>Population:${population}</h2></li>
    <li><h2>Languages:${stringifyLanguages(languages)}</h2></li>
  </ul>
`
)

export const markup = {
  generaCountryCard: (data) => (
    data.reduce((acc, el) => acc + crateCountryCard({
      src: el.flags.svg,
      name: el.name.official,
      capital: el.capital,
      population: el.population,
      languages: el.languages
    }), '')
  ),
  generateCountriesList: (data) => (
    data.reduce((acc, el) => (
      acc + createCountriesMarkup({ src: el.flags.svg, name: el.name.official })
    ), '')
  )
};