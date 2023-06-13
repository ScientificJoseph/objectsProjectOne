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
        const { info, ...otherProps } = movie;
        console.log('others ',otherProps);
        // const { title: movieTitle } = info;
        let { getFormattedTitle } = movie;
        // getFormattedTitle = getFormattedTitle.bind(movie) // prepares for function use
        let text = getFormattedTitle.call(movie) + ' - '
        for (const key in info) {
            if (key !== 'title' && key !== '_title') {
                text = text + `${key}: ${info[key]} `
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
        // title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return;
    }

    const newMovie = {
        info: {
            // title,
            set title(val) {
                if (val.trim() === '') {
                    this._title = 'DEFAULT'
                    return
                }
                this._title = val
            },
            get title() {
                return this._title;
            },
            [extraName]: extraValue
     },
        id: Math.random(),
        getFormattedTitle() {
            console.log(this)
            return this.info.title.toUpperCase();
        }
    };

    newMovie.info.title = title;
    console.log(newMovie.info.title)

    movies.push(newMovie)
    document.querySelectorAll('#user-input input').forEach((input)=>{
        return input.value = ""; 
    })

    renderMovies()
};

const searchMovieHandler = () => {
    console.log(this)
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
person.age = 48;

const person2 = { ...person };
person.age = 51;
person.hobbies.push('Fitness')

const person3 = { ...person, age: 49, hobbies:[...person.hobbies]}//tek to overwrite original valu
const last = person.hobbies.pop()

// console.log(person)
// console.log(anotherPerson)
// console.log(person2)
// console.log(person3)
// console.log(last)

// Object.assign

const user = {
    name: 'Joseph'
}

// const user2 = Object.assign({}, user)
// user.name = 'Joe'
// console.log(user)
// console.log(user2)

// Object Destructuring

// this and arrow functions

const members = {
    teamName: 'Blue Rockets',
    people: ['Max', 'Joseph'],
    getTemMembers(){
        this.people.forEach(p =>{
            console.log(p + ' - ' + this.teamName)
        })
    }
};

members.getTemMembers()
