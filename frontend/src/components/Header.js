import React from 'react';
import PropTypes from 'prop-types';

function Header( props ) {
    const heading = props.mainHeading.split(' ');
    const tagLine = props.tagLine;
    return (
        <header className="header text-center quiz-header">
            <div className="container">
                <div className="branding">
                    <h1 className="logo">
                        <span className="text-highlight">{heading[0]} </span>{heading[1]}
                    </h1>
                </div>
                <div className="tagLine">
                    <p>{tagLine}</p>
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    mainHeading: PropTypes.string,
    tagLine: PropTypes.string
};

export default Header;
