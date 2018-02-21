import React from 'react';
import PropTypes from 'prop-types';

function Question( props ) {
    return (
        <p className="question">{props.number}. {props.text}</p>
    )
}

Question.propTypes = {
    number: PropTypes.number,
    text: PropTypes.string
};

export default Question;
