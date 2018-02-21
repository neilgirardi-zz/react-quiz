import React from 'react';
import PropTypes from 'prop-types';

function FunFact( props ) {
    return (
        <div className="fun-fact">
            <p className="emphasis">Fun fact:</p>
            <p>{props.text}</p>
        </div>
    )
}

FunFact.propTypes = {
    text: PropTypes.string
};

export default FunFact;
