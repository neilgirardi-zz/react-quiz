import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Answer from './Answer';
import FunFact from './FunFact';

class Results extends Component {

    parseResults() {
        const results = this.props.results;

        return results.map(r => ({
                question: r.question,
                funFact: (typeof r.question.funFact !== 'undefined') ? r.question.funFact : null,
                correctAnswer: r.correctAnswer,
                wrongAnswer: ( r.selectedAnswer.ID === r.correctAnswer.ID) ?
                    null : r.selectedAnswer
            })
        )
    }

    getResultsHTML() {
        const data = this.parseResults();
        return data.map((d, index) => {
            return (
                <div className="results" key={d.question.ID}>
                    <Question
                        number={d.question.ID + 1}
                        text={d.question.question}
                        />
                    <ul className="answers">
                        { d.wrongAnswer !== null &&
                        <li>
                            <Answer key={index + '-' + d.wrongAnswer.ID}
                                    id={index + '-' + d.wrongAnswer.ID}
                                    letter={d.wrongAnswer.ID}
                                    className="wrong-answer"
                                    value={d.wrongAnswer.value}
                                    name={index + '-choices'}
                                    onSelectAnswer={function() {}}
                                    checked={true}
                                    text={d.wrongAnswer.answer}
                                />
                        </li>
                        }
                        <li>
                            <Answer key={index + '-' + d.correctAnswer.ID}
                                    id={index + '-' + d.correctAnswer.ID}
                                    letter={d.correctAnswer.ID}
                                    className="correct-answer"
                                    value={d.correctAnswer.value}
                                    name={index + '-choices'}
                                    onSelectAnswer={function() {}}
                                    checked={d.wrongAnswer === null}
                                    text={d.correctAnswer.answer}
                                />
                        </li>
                    </ul>
                    {d.funFact !== null &&
                    <FunFact text={d.funFact}/>
                    }
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.getResultsHTML()}
            </div>
        )
    }

}

Results.propTypes = {
    results: PropTypes.array
};

export default Results;
