// require the library xhr2
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    //Get all continents from Asia region
    let asianContinents = data.filter(continent => continent.region === 'Asia') 
    let asianCountries = asianContinents.map(value => value.name.common) 
    console.log(`Name of countries from Asian Region: `,asianCountries);

    //Get all the countries with a population of less than 2 lakhs
    let countryPop = data.filter(value => value.population < 200000);
    let popcountries = countryPop.map(value => value.name.common);
    console.log(`Name of Countries population less than two lakhs: `,popcountries);

    //Print the name, capital, flag using forEach function
    let dataArray = Object.entries(data);
    let countryDetails = (dataArray) =>{
        let countryName = dataArray[1].name.common;
        console.log(countryName);
        console.log(`${countryName}:`,dataArray[1].capital);
        console.log(`${countryName}:`,dataArray[1].flags.png);
    }
   dataArray.forEach(countryDetails);

      //Print the total population of countries using reduce function   
    let totalPopulation = data.reduce((totalpop, country) => 
        totalpop + country.population ,0);
    console.log(`Total population of countries`,totalPopulation);

    //Print the country which uses US Dollars as currency.
    let result = data.filter(value => value.currencies && value.currencies.USD);
    let usDollarCountries = result.map(value => value.name.common)
    console.log(`Countries using USD:`,usDollarCountries);




};

// send the http request
xhr.send();