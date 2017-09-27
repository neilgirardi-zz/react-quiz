import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Score extends Component {

    render() {
        const numCorrectAnswers = this.props.numCorrectAnswers;
        const numQuestions = this.props.numQuestions;
        const score = this.props.score;

        return (
            <div className="score">
                <p>Score: {score}% <span>( {numCorrectAnswers} out of {numQuestions} )</span></p>
            </div>
        )
    }

}

Score.propTypes = {
    numCorrectAnswers: PropTypes.number,
    numQuestions: PropTypes.number,
    score: PropTypes.number
};

export default Score;
