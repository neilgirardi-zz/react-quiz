import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <header className="header text-center quiz-header">
                <div className="container">
                    <div className="branding">
                        <h1 className="logo">
                            <span className="text-highlight">Hacker </span>History
                        </h1>
                    </div>
                    <div className="tagline">
                        <p>A quiz for your coffee break</p>
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
