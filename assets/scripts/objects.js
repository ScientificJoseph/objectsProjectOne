const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn')

const movies = []

const renderMovies = () => {
    const movieList = document.getElementById('movie-list')
 
    if (movies.length === 0) {
        movieList.classList.remove('visible')
        return
    } else {
        movieList.classList.add('visible')

    }
    movieList.innerHTML = ''
    movies.forEach((movie)=>{
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
        return input.value = ""  
    })
    renderMovies()

}
addMovieBtn.addEventListener('click', addMovieHandler)

