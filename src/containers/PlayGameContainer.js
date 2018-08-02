import React, { Component } from 'react';

class PlayGameContainer extends Component {
    state= {
        qa: [],
        score: 0
        };
    
    componentWillReceiveProps() {
        
        document.getElementById('c_answer').classList.remove('btn_green')
        let w_ans_off = document.getElementsByClassName('w_answer')
        for (let i = 0; i <= w_ans_off.length -1; i++) {
            w_ans_off[i].classList.remove('btn_red');
        }
        let ab_on = document.getElementsByClassName('answer_btn')
        for (let i = 0; i <= ab_on.length -1; i++) {
            ab_on[i].disabled = false
        }
        
        this.formatDataAndUpdate();
    }

    componentDidMount() {
        this.formatDataAndUpdate();
    }
    
    formatDataAndUpdate = () => {
        const qaPre = this.props.qaPre;

        // Format the data
            let qa = qaPre[0];
        
            // Needs an id
            qa['qid'] = "q101";
            
            // Decode questions and correct answer
            qa['question'] = decodeURIComponent(qa['question']);
            qa['correct_answer'] = decodeURIComponent(qa['correct_answer']);
            
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
                  {a.answer === q.correct_answer ? <button class="answer_btn" id="c_answer">{a.answer}</button>:<button className="answer_btn w_answer">{a.answer}</button>}
                </div>
                  );
              })}
          </div>
            );
        });
        
        this.setState({ qa: qaPost });
    }
    
    handleGuess = (questionData, guess) => {
        document.getElementById('c_answer').classList.add('btn_green');
        let w_ans_on = document.getElementsByClassName('w_answer');
        for (let i = 0; i <= w_ans_on.length -1; i++) {
            w_ans_on[i].classList.add('btn_red');
        }
        let ab_off = document.getElementsByClassName('answer_btn');
        for (let i = 0; i <= ab_off.length -1; i++) {
            ab_off[i].disabled = true;
        }

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
                <h4>Question {this.props.timesPlayed}/10</h4>
                
                {this.state.qa}
                
                <button id="next_button" onClick={this.props.getData}>Next</button>
                <button id="cancel_game_button" onClick={this.props.home}>Cancel Game</button>
                <button id="finish_game_button" class="display_none" onClick={this.props.endGame.bind(this, this.state.score)}>Go To ScoreBoard</button>
            </div>
        );
    }
}

export default PlayGameContainer;