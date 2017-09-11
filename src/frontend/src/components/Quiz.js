import React, { Component } from 'react';
import './../css/source/Quiz.css';
import './../css/vendor/google-fonts.css';
import Header from './Header';
import Question  from './Question';
import MultipleChoice from './MultipleChoice'
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
            const question = this.state.questions[this.state.step];
            const number = this.state.step + 1;
            return (
                <div className="main-content container">
                    <Question
                        number={number}
                        text={question.question}
                        />
                    <MultipleChoice
                        eventHandler={this._radioButtonEventHandler}
                        choices= {question.multipleChoices}
                        selectedAnswer={this.state.selectedAnswer}
                    />
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
                    mainHeading="Hacker History"
                    tagline="A quiz for your coffee break"
                />
                {this._content()}
            </div>
        );
    }


}

export default Quiz;
