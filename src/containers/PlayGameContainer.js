import React, { Component } from 'react';

class PlayGameContainer extends Component {
    state= {
        qa: [],
        score: 0
        };
    
    componentWillReceiveProps() {
        this.formatDataAndUpdate()
    }

    componentDidMount() {
        this.formatDataAndUpdate()
    }
    
    formatDataAndUpdate = () => {
        const qaPre = this.props.qaPre;

        // Format the data
            let qa = qaPre[0];
        
            // Needs an id
            qa['qid'] = "q101";
            
            // Decode questions
            qa['question'] = decodeURIComponent(qa['question']);
            
            // Create new array in the question dict for all answers
            qa['all_answers'] = [qa['incorrect_answers']];
            qa['all_answers'].push([qa['correct_answer']]);
            qa['all_answers'] = [].concat(...qa['all_answers']);
            
            // Make all_answers into list of dictionaries with ids
            let answers_list = [];
            for (let j = 0; j <= qa['all_answers'].length - 1; j++) {
                let answers_dict = {};
                
                answers_dict["answer"] = decodeURIComponent(qa['all_answers'][j]);
                answers_dict["aid"] = "a" + j;
                answers_list.push(answers_dict);
            }
            
            // Randomise the order of the possible answers
            qa['all_answers'] = answers_list.sort(function(a, b){return 0.5 - Math.random()});

        let qaPost = qaPre.map(q => {
            return (
                <div key={q.qid}>
              <h4>{q.question}</h4>
              {q.all_answers.map(a => {
              return (
                <div key={a.aid} onClick={this.handleGuess.bind(this, q, a)}>
                  <button >{a.answer}</button>
                </div>
                  );
              })}
          </div>
            );
        });
        
        this.setState({ qa: qaPost });
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
        
        {this.state.qa}
        
        <button onClick={this.props.getData}>Next</button>
        <button onClick={this.props.endGame.bind(this, this.state.score)}>End Game</button>
      </div>
        );
    }
}

export default PlayGameContainer;