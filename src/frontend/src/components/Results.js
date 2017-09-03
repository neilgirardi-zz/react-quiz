import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../css/source/Quiz.css';

class Results extends Component {

    constructor(props) {
        super(props);
    }

    getData() {
        const results = this.props.results;
        const questions = this.props.questions;
        const arr = [];

        results.map( result => {
                let wrongAnswerStr = null;
                let correctAnswerStr;

                const question = questions
                    .filter( question => question.ID === result.id )
                    .pop();

                correctAnswerStr = question.multipleChoices
                    .filter( mc => mc.ID === question.correctAnswer)
                    .pop()
                    .answer;

                if (question.correctAnswer !== result.answer) {
                    wrongAnswerStr = question.multipleChoices
                        .filter( mc => mc.ID === result.answer)
                        .pop()
                        .answer
                }

                arr.push({
                    id: question.ID,
                    question: question.question,
                    correctAnswer: correctAnswerStr,
                    wrongAnswer: wrongAnswerStr
                });

            }
        );
        return arr;
    }

    getResultsHTML() {
        const data = this.getData();
        return data.map( (d => {
                return (
                    <div key={d.id}>
                        <p>{d.id + 1}. {d.question}</p>
                        { d.wrongAnswer &&
                            <p className="wrong-answer review-answer">{d.wrongAnswer}</p>
                        }
                        <p className="correct-answer review-answer">{d.correctAnswer}</p>
                    </div>
                )
        }) )
    }

    render(){
      return(
          <div>
              {this.getResultsHTML()}
          </div>
      )
    }

}

Results.propTypes = {
   results: PropTypes.object,
    questions: PropTypes.array
};

export default Results;