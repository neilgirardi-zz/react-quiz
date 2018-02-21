import React, { Component } from 'react';
import Answer from './Answer';
import PropTypes from 'prop-types';

class MultipleChoice extends Component {

    constructor(props) {
        super(props);
        this._radioButtonEventHandler = this._radioButtonEventHandler.bind(this)

    }

    _radioButtonEventHandler(e) {
        this.props.eventHandler(e)
    }

    render() {
        const choices = this.props.choices;
        return (
            <ul className="answers">
                {choices.map((c, index) =>
                        <li key={index}>
                            <Answer key={c.ID}
                                    id={c.ID}
                                    letter={c.ID}
                                    className=""
                                    value={c.ID}
                                    name="choices"
                                    onSelectAnswer={this._radioButtonEventHandler}
                                    checked={this.value === this.props.selectedAnswer}
                                    text={c.answer}
                                />
                        </li>)
                }
            </ul>

        )
    }

}

MultipleChoice.propTypes = {
    choices: PropTypes.array,
    eventHandler: PropTypes.func
};


export default MultipleChoice;
