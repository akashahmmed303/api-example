const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountries(data));
};

const displayCountries = countries => {
  //   for (const country of countries) {
  //     console.log(country);
  //   }
  const countriesContainer = document.getElementById("countries-container");
  countries.forEach(country => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    console.log(country);
    countryDiv.innerHTML = `
      <h3>Name: ${country.name.common} </h3>
      <p>Capital:${country.capital ? country.capital[0] : "no capital"} </P>
      <button onclick="loadCountryDetail('${country.cca2}')">Details </button>
      `;
    countriesContainer.appendChild(countryDiv);
  });
};

const loadCountryDetail = code => {
  //restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  //   console.log("get country detail", code);

  console.log(url);
};

loadCountries();
