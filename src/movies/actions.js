export const ADD_MOVIE = 'ADD_MOVIE';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';


export const addMovie = (movie) => ({
    type: ADD_MOVIE,
    movie
})

export const onMovieClick = (index) => ({
    type: SELECT_MOVIE,
    index,
})

export const onMoviesLoad = () => ({
    type: FETCH_MOVIES_REQUEST,
})
export const onFetchMoviesFailure = (err) => ({
    type: FETCH_MOVIES_FAILURE,
    err
})
export const onFetchMoviesSuccess = (movies) => ({
    type: FETCH_MOVIES_SUCCESS,
    movies
})