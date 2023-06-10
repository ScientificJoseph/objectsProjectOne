const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn')

const movies = []

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
    console.log(movies)
    console.log(movies)
    document.querySelectorAll('#user-input input').forEach((input)=>{
        return input.value = ""  
    })

}
addMovieBtn.addEventListener('click', addMovieHandler)

