//Question 1
const getRemainder = (a,b) => a % b;

//Question 2
const URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=57e0d1680a184b218635d79c78dea433";

async function APIkey(){
        const response = await fetch(URL);
        const results = await response.json();
        console.log(results.length)

    for (let i = 0; i < final.length; i++)
    console.log (final [i].rating);
}

APIkey()

