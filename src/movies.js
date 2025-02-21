// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);
const movies = require('./data');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((film) => {
    return film.director;
  });

  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMovies = movies.filter((drama) => {
    // let count = 0;

    if (
      drama.director === 'Steven Spielberg' &&
      drama.genre.includes('Drama')
    ) {
      return true;
    }
  });

  return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const totalAvgOfMovies = movies.reduce((acc, eachElement) => {
    if (eachElement.score) return acc + eachElement.score;
    else {
      acc;
    }
  }, 0);
  let total = totalAvgOfMovies / movies.length;
  if (totalAvgOfMovies === 0) {
    return 0;
  }
  return Number(total.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((drama) => {
    return drama.genre.includes('Drama');
  });
  const AvgMovie = movies.reduce((acc, eachElement) => {
    return acc + eachElement.score;
  }, 0);
  if (dramaMovies === 0) return 0;
  let total = AvgMovie / dramaMovies.length;
  return Number(total.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let newArrayMovies = JSON.parse(JSON.stringify(movies));
  const growingOrderMovies = newArrayMovies.sort((first, second) => {
    if (first.year < second.year) {
      return -1;
    } else if (first.year > second.year) {
      return 1;
    } else {
      if (first.year === second.year) {
        if (first.title < second.title) {
          return -1;
        }
      }
    }
  });
  return growingOrderMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let newArrayMovies = JSON.parse(JSON.stringify(movies));
  const alphabeticOrder = newArrayMovies.sort((first, second) => {
    if (first.title < second.title) {
      return -1;
    } else if (first.title > second.title) {
      return 1;
    }
  });
  const onlyTitles = alphabeticOrder.map((element) => {
    return element.title;
  });

  return onlyTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
