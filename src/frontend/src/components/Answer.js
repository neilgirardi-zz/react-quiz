import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import './../css/source/Quiz.css';

class Answer extends Component {

    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this)
    }

    _handleChange(e) {
        this.props.onSelectAnswer( e.target.value )
    }

    render() {
        return (
            <label
                htmlFor={'answer-' + this.props.aID.toLowerCase()}
                className={this.props.className}>
                <input
                    id={'answer-' + this.props.aID.toLowerCase()}
                    type="radio"
                    value={this.props.aID}
                    name={this.props.name}
                    onChange={this._handleChange}
                    checked={this.props.checked}>
                </input>
                {this.props.letter}. {this.props.text}
            </label>
        )
    }

}

Answer.propTypes = {
   qID: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    text: PropTypes.string,
    className: PropTypes.string
};

export default Answer;