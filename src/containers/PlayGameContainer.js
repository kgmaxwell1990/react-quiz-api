import React, { Component } from 'react';
import {answersOn, answersOff} from '../utils/answerStyling';
import {shuffle} from '../utils/shuffle';

class PlayGameContainer extends Component {
    state= {
        score: 0,
        timesPlayed: 0,
        };

    componentDidMount() {
        this.gameLoop();
    }
    
    gameLoop = () => {
        
        //------ Styling ------ //
        document.getElementById('next_button').disabled = true;
        
        if (this.state.timesPlayed >= 1) {
        answersOff();
        }
        //------------ //
        
        const qa = this.props.qa;
        const i = this.state.timesPlayed;

        // Push all answers into new array and randomise
        const all_answers_array = [];
        all_answers_array.push(qa[i]['correct_answer']);
        all_answers_array.push(qa[i]['wrong_answer1']);
        all_answers_array.push(qa[i]['wrong_answer2']);
        all_answers_array.push(qa[i]['wrong_answer3']);
        qa[i]['all_answers'] = shuffle(all_answers_array);

        // Create React Element
        let qa_element =  <div className="row" key={qa[i]['id']}>
                            <h5 className="question_text">{qa[i]['question']}</h5>
                            {qa[i]['all_answers'].map(a => {
                                return(
                                <div className="col s6 answer_box_outer" onClick={this.handleGuess.bind(this, qa[i]['correct_answer'], a)}>
                                {a === qa[i]['correct_answer'] ? 
                                    <button className="answer_btn answer_box_inner hover" id="c_answer"><h6 className="answers_text">{a}<i className="material-icons right" id="icon_correct"></i></h6></button>
                                    : <button className="answer_btn answer_box_inner hover w_answer"><h6 className="answers_text">{a}<i className="material-icons right icon_wrong"></i></h6></button>}
                                </div>
                                );
                            })}
                          </div>
        
        this.setState({ qa: qa_element, timesPlayed: this.state.timesPlayed + 1});
    }
    
    handleGuess = (correctAnswer, guess) => {
        
        // ------ Styling ------ //
        if(this.props.qa.length === this.state.timesPlayed) {
            document.getElementById('get_score_button').style.display = "inline-block";
        } else{
            document.getElementById('next_button').disabled = false;
        }
        
        answersOn();
        // ------------ //

        if (correctAnswer === guess) {
            this.setState({score: this.state.score + 1 });
        }
    }


    render() {
        return (
            <div>
                <h4>Question {this.state.timesPlayed}/5</h4>
                
                {this.state.qa}
                
                { this.props.qa.length === this.state.timesPlayed ? 
                <button className="waves-effect waves-light btn btn-small display_none" id="get_score_button" onClick={this.props.endScreen.bind(this, this.state.score)}><i className="material-icons right">send</i>Check Score</button>
                :
                <div>
                    <button className="waves-effect waves-light btn btn-small btn_red" onClick={this.props.startScreen}><i className="material-icons right">highlight_off</i>Cancel</button>
                    <button className="waves-effect waves-light btn btn-small" id="next_button" onClick={this.gameLoop}><i className="material-icons right">send</i>Next Question</button>
                </div>
                }
                
            </div>
        );
    }
}

export default PlayGameContainer;