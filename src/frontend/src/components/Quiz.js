import React, { Component } from 'react';
import './../css/source/Quiz.css';
import './../css/vendor/google-fonts.css';
import Header from './Header';
import Question  from './Question';
import Answer from './Answer';
import Score from './Score';
import Results from './Results';
const axios = require('axios');

class Quiz extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            step: 0,
            selectedAnswer: '',
            correctAnswers: 0,
            incorrectAnswers: 0,
            results: []
        };
        this._radioButtonEventHandler = this._radioButtonEventHandler.bind(this);
    }


    componentWillMount() {
        this._getQuestionsJSON()
    }


    _content() {
        if (this.state.step < this.state.questions.length) {
            return (
                <div className="main-content container">
                    <Question
                        number={this.state.step + 1}
                        text={this.state.questions[this.state.step].question}
                        />
                    {this._multipleChoices()}
                </div>
            )
        } else {
            return (
                <div className="main-content container">
                    <Score
                        correctAnswers={this.state.correctAnswers}
                        numQuestions={this.state.questions.length}
                        percent={Math.floor(this.state.correctAnswers / this.state.questions.length * 100) }
                        />
                    <Results
                        results={this.state.results}
                        questions={this.state.questions}
                        />
                </div>
            )
        }
    }


    _getQuestionsJSON() {
        const url = '/questions';

        axios.get(url)
            .then((response) => {
                const data = response.data;
                this.setState({
                    questions: data
                });
            })
            .catch((error) => {
                console.log(error)
            });
    }


    _multipleChoices() {
        return (
            <ul className="answers">
                {this.state.questions[this.state.step].multipleChoices
                    .map((mc, index) =>
                        <li key={index}>
                            <Answer key={mc.ID}
                                id={mc.ID}
                                letter={mc.ID}
                                className=""
                                value={mc.ID}
                                name="choices"
                                onSelectAnswer={this._radioButtonEventHandler}
                                checked={this.value === this.state.selectedAnswer}
                                text={mc.answer}
                            />
                        </li>)
                }
            </ul>

        )
    }


    _radioButtonEventHandler(val) {
        const questionObj = this.state.questions[this.state.step];
        const correctAnswerValue = questionObj.correctAnswer;
        const isCorrectAnswer = (val === correctAnswerValue);

        const correctAnswer = questionObj.multipleChoices
            .filter(mc => mc.ID === correctAnswerValue)
            .pop();

        const selectedAnswer = questionObj.multipleChoices
            .filter(mc => mc.ID === val)
            .pop();

        this.setState({
            selectedAnswer: val,
            results: this.state.results.concat(
                {
                    question: questionObj,
                    selectedAnswer: selectedAnswer,
                    correctAnswer: correctAnswer
                }
            )
        });

        this.setState({
            step: this.state.step + 1,
            selectedAnswer: null
        });

        if (isCorrectAnswer) {
            this.setState({
                correctAnswers: this.state.correctAnswers + 1
            });
        } else {
            this.setState({
                incorrectAnswers: this.state.incorrectAnswers + 1
            });
        }
    }


    render() {
        return (
            <div className="quiz">
                <Header
                    heading="Hacker History"
                    subHeading="Covfefe break? Let's play trivia!"
                />
                {this._content()}
            </div>
        );
    }


}

export default Quiz;
