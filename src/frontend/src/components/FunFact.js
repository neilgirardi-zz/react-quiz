import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../css/source/Quiz.css';

class FunFact extends Component {

    render() {
        return (
            <p className="fun-fact">
                <span>Fun fact:</span>
                {this.props.text}
            </p>
        )
    }

}

FunFact.propTypes = {
    text: PropTypes.string
};

export default FunFact;