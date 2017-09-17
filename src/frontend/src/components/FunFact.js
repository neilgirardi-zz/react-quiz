import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FunFact extends Component {

    render() {
        return (
            <div className="fun-fact">
                <p className="emphasis">Fun fact:</p>
                <p>{this.props.text}</p>
            </div>
        )
    }

}

FunFact.propTypes = {
    text: PropTypes.string
};

export default FunFact;
