import React, { Component } from 'react';
// import PlayGame from '../components/PlayGame';

class PlayGameContainer extends Component {
    state = {
        questionsAnswers: []
    }

    componentDidMount() {

        const questionsAnswersPre = [{ "category": "General Knowledge", "type": "multiple", "difficulty": "hard", "question": "What type of dog is &#039;Handsome Dan&#039;, the mascot of Yale University?", "correct_answer": "Bulldog", "incorrect_answers": ["Yorkshire Terrier", "Boxer", "Pug"] },
            { "category": "General Knowledge", "type": "multiple", "difficulty": "easy", "question": "What does a funambulist walk on?", "correct_answer": "A Tight Rope", "incorrect_answers": ["Broken Glass", "Balls", "The Moon"] },
            { "category": "General Knowledge", "type": "boolean", "difficulty": "easy", "question": "The Great Wall of China is visible from the moon.", "correct_answer": "False", "incorrect_answers": ["True"] },
            { "category": "General Knowledge", "type": "multiple", "difficulty": "hard", "question": "Before the 19th Century, the &quot;Living Room&quot; was originally called the...", "correct_answer": "Parlor", "incorrect_answers": ["Open Room", "Sitting Room", "Loft"] },
            { "category": "General Knowledge", "type": "multiple", "difficulty": "easy", "question": "What is the French word for &quot;hat&quot;?", "correct_answer": "Chapeau", "incorrect_answers": ["Bonnet", " &Eacute;charpe", " Casque"] }
        ];


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
            console.log("Woo");
        }else {
            console.log("Boo");
        }
    }


    render() {
        return (
            <div>
        <h1>Play Game </h1>
        <h2> Topic Selected: {this.props.selectedTopic} </h2>
        
        {this.state.questionsAnswers}
        
        <button onClick={this.props.handleEndClick}>End Game</button>
      </div>
        );
    }
}

export default PlayGameContainer;