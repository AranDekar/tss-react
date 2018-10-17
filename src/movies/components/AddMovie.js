import React from 'react';
import { addMovie } from '../actions';
import { connect } from 'react-redux';

const AddMovie = ({ dispatch }) => {
    let input;
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addMovie({ id: (Math.random() * 1000000).toFixed(0), title: input.value }));
                    input.value = '';
                    input.focus();
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">
                    Add Movie
                </button>
            </form>
        </div>
    )
}

export default connect()(AddMovie);