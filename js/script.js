"use strict";

 const numberOfFilms = prompt(`Скільки фільмів ви вже переглянули?`, '');

 const lastSeingFilm = prompt(`Один з останніх переглянутих фільмів?`, '');
 const filmGrade = prompt(`На скільки ви оціните його?`, '');
 console.log(lastSeingFilm);

 const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false
 };


 
 personalMovieDB.movies[lastSeingFilm] = filmGrade;
 console.log(personalMovieDB);
