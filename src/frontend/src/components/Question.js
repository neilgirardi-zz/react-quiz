import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {

    render() {
        return (
            <p className="question">{this.props.number}. {this.props.text}</p>
        )
    }

}

Question.propTypes = {
    number: PropTypes.number,
    text: PropTypes.string
};

export default Question;
