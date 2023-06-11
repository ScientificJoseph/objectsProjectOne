const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn')

const movies = []

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list')
 
    if (movies.length === 0) {
        movieList.classList.remove('visible')
        return
    } else {
        movieList.classList.add('visible')

    }
    movieList.innerHTML = '';

    const filteredMovies = !filter 
    ? movies 
    : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie)=>{
        const list = document.createElement('li')
        let text = movie.info.title + ' - '
        for (const key in movie.info) {
            if (key !== 'title') {
                text = text + `${key}: ${movie.info[key]} `
            }
        }
        list.textContent = text
        movieList.appendChild(list)
    })
    
}

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (
        title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
     },
        id: Math.random()
    };

    movies.push(newMovie)
    console.log(newMovie)

    document.querySelectorAll('#user-input input').forEach((input)=>{
        return input.value = ""; 
    })
   
    renderMovies()
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
    document.getElementById('filter-title').value = '';
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler)

// Object Spread Operator.
const person = {
    name: 'Joseph',
    hobbies: ['Music','Coding']
};

const anotherPerson = person;