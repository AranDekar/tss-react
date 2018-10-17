import { connect } from 'react-redux'
import MovieList from './MovieList';
import { onMovieClick, onMoviesLoad } from '../actions'

const getMovies = (movies) => {
    return movies;
}
const mapStateToProps = state => ({
    movies: getMovies(state.movies),
})

const mapDispatchToProps = dispatch => ({
    onMovieClick: index => dispatch(onMovieClick(index)),
    onMoviesLoad: () => dispatch(onMoviesLoad()),
})

const MovieListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MovieList)

export default MovieListContainer;