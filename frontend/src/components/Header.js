import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

    render() {
        const heading = this.props.mainHeading.split(' ');
        const tagline = this.props.tagline;
        return (
            <header className="header text-center quiz-header">
                <div className="container">
                    <div className="branding">
                        <h1 className="logo">
                            <span className="text-highlight">{heading[0]} </span>{heading[1]}
                        </h1>
                    </div>
                    <div className="tagline">
                        <p>{tagline}</p>
                    </div>
                </div>
            </header>
        );
    }

}

Header.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
};

export default Header;