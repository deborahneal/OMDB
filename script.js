console.log('hit');
const title = document.querySelector('h1');
const container = document.querySelector('.container');
const poster = document.querySelector('.poster')
//const error = document.querySelector('.error');



//http://www.omdbapi.com/?i=tt3896198&apikey=91089252

//let getData = () => {} and put the fetch function inside.

fetch('http://www.omdbapi.com/?i=tt3896198&apikey=91089252').then(response =>{
    return response.json();
})

.then(response => {
    console.log(response);
    console.log(response.Title);
    console.log(response.Writer);
    console.log(response.Poster);
    console.log(response.Actors);
    title.innerHTML = response.Title;
    poster.setAttribute('src', response.Poster );
})

// .catch(error => {
//     console.log(error);
// error.innerHTML = err.Error;
// })
