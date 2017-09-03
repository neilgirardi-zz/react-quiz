import React, { Component } from 'react';
import './../css/source/Quiz.css';
import PropTypes from 'prop-types';

class Score extends Component {

    render() {
        const correctAnswers = this.props.correctAnswers;
        const numQuestions = this.props.numQuestions;
        const percent = this.props.percent;

        return (
            <div>
                <p>You got {correctAnswers} out of {numQuestions} correct</p>
                <p>Score: {percent}%</p>
            </div>
        )
    }

}

Score.propTypes = {
    correctAnswers: PropTypes.number,
    numQuestions: PropTypes.number,
    percent: PropTypes.number
};

export default Score;