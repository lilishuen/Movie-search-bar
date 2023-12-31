const button = document.querySelector("#button")

const BASE_URL = "https://www.omdbapi.com/"

async function getData (movieName) {
  const response = await fetch(`${BASE_URL}/?t=${movieName}&apikey=ffcdabad`)
  const data = await response.json();
  return data;
}

  function displayMovieDetails(movie) {
  const movieDetails = document.querySelector(".movie_details")
  movieDetails.innerHTML = ''

  if (movie.Response === 'True') {
    movieDetails.innerHTML = `
    <h2>${movie.Title}</h2>
    <h2>${movie.Plot}</h2>
    <h2>${movie.Awards}</h2>
    <h2>
      ${defineRating(movie.Ratings)}
    </h2>
    <img src=${movie.Poster}/>
   `
  } else {
    movieDetails.innerHTML = `<h1>No such movie title! Please try again</h1>`
 }
}

function defineRating(ratings) {
  let ratingList = ''
  for (const rating of ratings) {
    ratingList += `${rating.Source} : ${rating.Value}`
  }

return ratingList
}

button.addEventListener("click", async function(){
  const movieName= document.querySelector('#moviename').value;
  const data = await getData(movieName);
  displayMovieDetails(data);
});

