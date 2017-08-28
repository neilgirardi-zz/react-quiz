import React, { Component } from 'react';
import './Quiz.css';
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
        this.eventHandler = this.eventHandler.bind(this);
    }

    componentWillMount() {
        this.getQuestionsJSON()
    }

    getQuestionsJSON() {
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

    eventHandler(event) {
        const userAnswer = event.target.value;
        this.setState({
            selectedAnswer: userAnswer
        });
        const correctAnswer = this.state.questions[this.state.step].correctAnswer;
        const bool = (userAnswer === correctAnswer);

        this.setState({
            step: this.state.step + 1,
            selectedAnswer: null
        });

        if (bool) {
            this.setState({
                correctAnswers: this.state.correctAnswers + 1
            });
        } else {
            this.setState({
                incorrectAnswers: this.state.incorrectAnswers + 1
            });
        }
    }

    header() {
        return (
            <div className="quiz-header">
                <h1>Hacker Trivia Quiz</h1>
                <h2>Waiting for that build to finish? Step up and take the challenge!</h2>
            </div>
        )
    }

    choices() {
        return (
            this.state.questions[this.state.step].multipleChoices
                .map( (mc, index) =>
                    <label key={index}>
                        <input
                            type="radio"
                            key={mc.ID} value={mc.ID}
                            name="choices"
                            onChange={this.eventHandler}
                            checked={this.value === this.state.selectedAnswer}>
                        </input>
                        {mc.ID}. {mc.answer}
                    </label> )
        )
    }

    question() {
        return (
            <p>{this.state.step + 1}. {this.state.questions[this.state.step].question}</p>
        )
    }

    render() {
            if ( this.state.step >= this.state.questions.length ) {
                return (
                    <div className="quiz">
                        {this.header()}
                        <div className="main-content">
                            <p>You scored {this.state.correctAnswers} out of {this.state.questions.length} or {Math.floor(this.state.correctAnswers / this.state.questions.length * 100) }%</p>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="quiz">
                        {this.header()}
                        <div className="main-content">
                            {this.question()}
                            {this.choices()}
                        </div>
                    </div>
                );
            }
    }


}

export default Quiz;
