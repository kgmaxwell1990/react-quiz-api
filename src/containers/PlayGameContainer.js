import React, { Component } from 'react';
// import PlayGame from '../components/PlayGame';

class PlayGameContainer extends Component {
    state= {
        questionsAnswers: [],
        score: 0
        };
    
    componentWillReceiveProps() {
        this.formatDataAndUpdate()
    }

    componentDidMount() {
        this.formatDataAndUpdate()
    }
    
    formatDataAndUpdate = () => {
        const questionsAnswersPre = this.props.qaPre;
        
        // Format data
        for (let i = 0; i <= questionsAnswersPre.length - 1; i++) {
            let qa = questionsAnswersPre[i];

            // Each question needs an id
            qa['qid'] = "q" + i;

            // Create new key value pair of all_answers
            qa['all_answers'] = [qa['incorrect_answers']];
            qa['all_answers'].push([qa['correct_answer']]);
            qa['all_answers'] = [].concat(...qa['all_answers']);

            // Make all_answers into list of dictionaries with ids
            let answers_list = [];
            for (let j = 0; j <= qa['all_answers'].length - 1; j++) {
                let answers_dict = {};
                answers_dict["answer"] = qa['all_answers'][j];
                answers_dict["aid"] = "a" + j;
                answers_list.push(answers_dict);
            }
            qa['all_answers'] = answers_list.sort(function(a, b){return 0.5 - Math.random()});
        }


        let questionsAnswersPost = questionsAnswersPre.map(question => {
            return (
                <div key={question.qid}>
              <h4>{question.question}</h4>
              {question.all_answers.map(answer => {
              return (
                <div key={answer.aid} onClick={this.handleGuess.bind(this, question, answer)}>
                  <button >{answer.answer}</button>
                </div>
                  );
              })}
          </div>
            );
        });
        
        this.setState({ questionsAnswers: questionsAnswersPost });
    }
    
    handleGuess = (questionData, guess) => {
        if (questionData.correct_answer === guess.answer) {
            console.log("correct");
            this.setState({score: this.state.score + 1 });
        }else {
            console.log("wrong");
        }
        
    }

    render() {
        return (
            <div>
        <h1>Play Game </h1>
        
        {this.state.questionsAnswers}
        
        <button onClick={this.props.getData}>Next</button>
        <button onClick={this.props.endGame.bind(this, this.state.score)}>End Game</button>
      </div>
        );
    }
}

export default PlayGameContainer;