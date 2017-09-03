import React, { Component } from 'react';
import './../css/source/Quiz.css'
import PropTypes from 'prop-types';

class Question extends Component {

    render() {
        return (
            <p>{this.props.number}. {this.props.text}</p>
        )
    }

}

Question.propTypes = {
    number: PropTypes.number,
    text: PropTypes.string
};

export default Question;