import React, { Component } from 'react';
import './../css/source/Quiz.css';
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
            hasData: false,
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
                <div className="main-content">
                    <Question
                        number={this.state.step + 1}
                        text= {this.state.questions[this.state.step].question}
                        />
                    {this._multipleChoices()}
                </div>
            )
        } else {
            return (
                <div className="main-content">
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
            .then( (response) => {
                const data = response.data;
                this.setState({
                    questions: data,
                    hasData: true
                });
            })
            .catch( (error) => {
                console.log(error)
            });
    }


    _multipleChoices() {
        return (
            this.state.questions[this.state.step].multipleChoices
                .map( (mc, index) =>
                    <Answer key={mc.ID}
                       qID={mc.ID}
                        value={mc.ID}
                        name="choices"
                        onSelectAnswer={this._radioButtonEventHandler}
                        checked={this.value === this.state.selectedAnswer}
                        text={mc.answer}
                    />
            )
        )
    }


    _radioButtonEventHandler(val) {
        this.setState({
            selectedAnswer: val,
            results: this.state.results.concat(
                {
                    id: this.state.step,
                    answer: val
                }
            )
        });

        const correctAnswer = this.state.questions[this.state.step].correctAnswer;
        const isCorrectAnswer = (val === correctAnswer);

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
                        subHeading="how many can you answer?"
                    />
                    {this._content()}
                </div>
            );
    }


}

export default Quiz;
