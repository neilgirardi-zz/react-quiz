import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Score extends Component {

    render() {
        const correctAnswers = this.props.correctAnswers;
        const numQuestions = this.props.numQuestions;
        const percent = this.props.percent;

        return (
            <div className="score">
                <p>Score: {percent}% <span>( {correctAnswers} out of {numQuestions} )</span></p>
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
