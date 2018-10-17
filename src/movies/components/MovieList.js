import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem';
import AddMovie from './AddMovie';

class MovieList extends React.Component {
    render() {
        return (
            <div>
                <AddMovie></AddMovie>
                <ul>
                    {this.props.movies.map((a, index) => (
                        <MovieListItem key={a.id} {...a} onClick={() => this.props.onMovieClick(index)} />
                    ))}
                </ul>
            </div>
        )
    }

    componentDidMount = () => {
        this.props.onMoviesLoad();
    }
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })).isRequired,
    onMovieClick: PropTypes.func.isRequired,
    onMoviesLoad: PropTypes.func.isRequired,
}
export default MovieList;