import React, { Component } from 'react';
import './../css/source/Quiz.css';
import PropTypes from 'prop-types';

class Header extends Component {

    render(){
        return (
            <div className="quiz-header">
                <h1>{this.props.heading}</h1>
                <h2>{this.props.subHeading}</h2>
            </div>
        );
    }

}

Header.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
};

export default Header;