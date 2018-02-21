import React from 'react';
import PropTypes from 'prop-types';

function Score( props ) {

    const numCorrectAnswers = props.numCorrectAnswers;
    const numQuestions = props.numQuestions;
    const score = props.score;

    return (
        <div className="score">
            <p>Score: {score}% <span>( {numCorrectAnswers} out of {numQuestions} )</span></p>
        </div>
    )

}

Score.propTypes = {
    numCorrectAnswers: PropTypes.number,
    numQuestions: PropTypes.number,
    score: PropTypes.number
};

export default Score;
