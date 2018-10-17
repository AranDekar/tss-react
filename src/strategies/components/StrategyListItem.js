import React from 'react';
import PropTypes from 'prop-types';

const StrategyListItem = ({ id, onClick, text }) => (
    <li
        key={id}
        onClick={onClick}
    >
        {text}
    </li>
);

StrategyListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
}
export default StrategyListItem;