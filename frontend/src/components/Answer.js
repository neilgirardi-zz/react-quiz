import React, { Component }  from 'react';
import PropTypes from 'prop-types';

/**
 * Answer.js
 *
 * controlled component multiple choice answers
 */
class Answer extends Component {

    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this)
    }

    _handleChange(e) {
        this.props.onSelectAnswer(e.target.value)
    }

    render() {
        return (
            <label
                htmlFor={'answer-' + this.props.id.toLowerCase()}
                className={this.props.className}>
                <input
                    id={'answer-' + this.props.id.toLowerCase()}
                    type="radio"
                    value={this.props.id}
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
    onSelectAnswer: PropTypes.func,
    qID: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    text: PropTypes.string,
    className: PropTypes.string,
    letter: PropTypes.string
};

export default Answer;
