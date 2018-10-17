import React from 'react';
import PropTypes from 'prop-types';

const MovieListItem = ({ id, title, onClick }) => (
    <li key={id}
        onClick={onClick}>
        {title}
    </li>
)
MovieListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default MovieListItem;