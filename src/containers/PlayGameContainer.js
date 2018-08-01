import React, { Component } from 'react';
import PlayGame from '../components/PlayGame';

class PlayGameContainer extends Component {
    state = {
        questionsAnswers: []
    }
    
    componentDidMount() {
    const questionsAnswersPre = [{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"What type of dog is &#039;Handsome Dan&#039;, the mascot of Yale University?","correct_answer":"Bulldog","incorrect_answers":["Yorkshire Terrier","Boxer","Pug"]},
        {"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What does a funambulist walk on?","correct_answer":"A Tight Rope","incorrect_answers":["Broken Glass","Balls","The Moon"]},
        {"category":"General Knowledge","type":"boolean","difficulty":"easy","question":"The Great Wall of China is visible from the moon.","correct_answer":"False","incorrect_answers":["True"]},
        {"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"Before the 19th Century, the &quot;Living Room&quot; was originally called the...","correct_answer":"Parlor","incorrect_answers":["Open Room","Sitting Room","Loft"]},
        {"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the French word for &quot;hat&quot;?","correct_answer":"Chapeau","incorrect_answers":["Bonnet"," &Eacute;charpe"," Casque"]}];    
        this.setState({questionsAnswers: questionsAnswersPre});
        
    let questionsAnswersPost = questionsAnswersPre.map(qa => {
      return (
          <div>
              <h4>{qa.question}</h4>
              <button>{qa.correct_answer}</button>
              {qa.incorrect_answers.map(ia => {
              return (
                  <button>{ia}</button>
                  );
                  
              })}
          </div>
        );
    });
    this.setState({ questionsAnswers: questionsAnswersPost });
    }
    
    
  render() {
    return (
      <div>
        <h1>Play Game </h1>
        <h2> Topic Selected: {this.props.selectedTopic} </h2>
        
        <PlayGame questionsAnswers={this.state.questionsAnswers}/>
        
        <button onClick={this.props.handleEndClick}>End Game</button>
      </div>
    );
  }
}

export default PlayGameContainer;