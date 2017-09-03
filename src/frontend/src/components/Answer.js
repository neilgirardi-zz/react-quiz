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
            <label htmlFor="_{this.props.qID}">
                <input
                    id="_{this.props.qID}"
                    type="radio"
                    value={this.props.qID}
                    name="choices"
                    onChange={this._handleChange}
                    checked={this.props.checked}>
                </input>
                {this.props.qID}. {this.props.text}
            </label>
        )
    }

}

Answer.propTypes = {
   qID: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    text: PropTypes.string
};

export default Answer;