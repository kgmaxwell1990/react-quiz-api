import React, { Component } from 'react';

class PlayGameContainer extends Component {
    state= {
        qa: [],
        score: 0
        };
    
    componentWillReceiveProps() {
        
        // ------ Styling ------ //
        document.getElementById('c_answer').classList.remove('btn_green');
        document.getElementById('c_answer').classList.add('hover');
        document.getElementById('icon_correct').innerHTML="";
        
        let wrong_answers = document.getElementsByClassName('w_answer');
        for (let i = 0; i <= wrong_answers.length -1; i++) {
            wrong_answers[i].classList.remove('btn_red');
            wrong_answers[i].classList.add('hover');
        }
        let all_answers = document.getElementsByClassName('answer_btn');
        for (let i = 0; i <= all_answers.length -1; i++) {
            all_answers[i].disabled = false;
            all_answers[i].classList.add('hover');
        }
        
        let answers_text = document.getElementsByClassName('answers_text');
        for (let i = 0; i <= answers_text.length -1; i++) {
            answers_text[i].classList.remove('color_white');
        }
        
        let answers_icon = document.getElementsByClassName('icon_wrong');
        for (let i = 0; i <= answers_icon.length -1; i++) {
            answers_icon[i].innerHTML="";
        }
        // ------------ //
        
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
                <div className="row" key={q.qid}>
              <h5 className="question_text">{q.question}</h5>
              {q.all_answers.map(a => {
              return (
                <div className="col s6 answer_box_outer" key={a.aid} onClick={this.handleGuess.bind(this, q, a)}>
                  {a.answer === q.correct_answer ? 
                    <button className="answer_btn answer_box_inner hover" id="c_answer"><h6 className="answers_text">{a.answer}<i class="material-icons right" id="icon_correct"></i></h6></button>:
                    <button className="answer_btn answer_box_inner hover w_answer"><h6 className="answers_text">{a.answer}<i class="material-icons right icon_wrong"></i></h6></button>}
                </div>
                  );
              })}
          </div>
            );
        });
        
        this.setState({ qa: qaPost });
    }
    
    handleGuess = (questionData, guess) => {
        
        // ------ Styling ------ //
        document.getElementById('c_answer').classList.add('btn_green');
        document.getElementById('c_answer').classList.remove('hover');
        document.getElementById('icon_correct').innerHTML="check";
        
        let wrong_answers = document.getElementsByClassName('w_answer');
        for (let i = 0; i <= wrong_answers.length -1; i++) {
            wrong_answers[i].classList.add('btn_red');
            wrong_answers[i].classList.remove('hover');
        }
        let all_answers = document.getElementsByClassName('answer_btn');
        for (let i = 0; i <= all_answers.length -1; i++) {
            all_answers[i].disabled = true;
            all_answers[i].classList.remove('hover');
        }
        
        let answers_text = document.getElementsByClassName('answers_text');
        for (let i = 0; i <= answers_text.length -1; i++) {
            answers_text[i].classList.add('color_white');
        }
        
        let answers_icon = document.getElementsByClassName('icon_wrong');
        for (let i = 0; i <= answers_icon.length -1; i++) {
            answers_icon[i].innerHTML="clear";
        }
        // ------------ //
        

        if (questionData.correct_answer === guess.answer) {
            this.setState({score: this.state.score + 1 });
        }
        
    }

    render() {
        return (
            <div>
                <h4>Question {this.props.timesPlayed}/10</h4>
                
                {this.state.qa}
                
                <button className="waves-effect waves-light btn btn-small red" id="cancel_game_button" onClick={this.props.home}><i class="material-icons right">highlight_off</i>Cancel Game</button>
                <button className="waves-effect waves-light btn btn-small" id="next_button" onClick={this.props.getData}><i class="material-icons right">send</i>Next Question</button>
                <button id="finish_game_button" className="waves-effect waves-light btn btn-small display_none" onClick={this.props.endGame.bind(this, this.state.score)}>Go To ScoreBoard</button>
            </div>
        );
    }
}

export default PlayGameContainer;