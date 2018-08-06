# Overview
The challenge for this app was to build a quiz game.
The web application was built with a front-end framework (Reactjs)
Connecting to an API (https://opentdb.com/api_config.php) to retreive questions

# Live Link
Play the game at http://katie-udemy-quiz.s3-website-eu-west-1.amazonaws.com/

# Technical choices and Tradeoffs
### Choices
I chose to use Reactjs as I have just began teaching myself and saw it as a good learning opportunity. I am comfortable doing API calls and dealing with the data in the response so wanted to use this method to retreive the questions. Materialize was used for layout and button styling.
I learned a lot with this challenge and enjoyed it but I believe the code quality could be better. If I was given the challenge again I would choose the Django framework as I am more familiar with it. 
### Main Challenges
+ Lack of experience with Reactjs
+ Formatting the data coming back from the API to align with Reactjs
+ Working out which part of the application to do the API calls
+ Issues with components re-rendering on state/props change

### Tradeoffs
+ Would have liked to:
   Store the leaderboard in a file/database to keep track across machines 
   Have topics so users can choose type of questions
+ Should possibly have used Redux / MobX (might have eased some of the challenges outlined above)


# Details of the Application
+ index.js renders the **App Component** in *App.js*
+ App.js displays the header and renders the **MainGameContainer Component** in *containers/MainGameContainer.js*
+ *ComponentDidMount()* runs once to get a session token from the API and stores it in the state (This prevents getting duplicate questions)
+ startGame is set to true so when the render function runs for the first time the *StartGame Component* is rendered
+ **StartGame Component** displays a form which saves the users name to the state, when submitted it uses the getUsername function to store it in the MainGameContainer's state
+ It also displays the PLAY button which uses the *getData* function in the **MainGameContainer** to begin playing
+ The *getData* function makes a call to the API to get one question and stores the response as a list in the state (qaPre), calls the *startGame* function and increments the timesPlayed state by one
+ The *startGame* function switches the startGame state to false, and the playGame state to true
+ This triggers a re-render and now the **PlayGameContainer Component** is rendered
+ The **PlayGameContainer** takes the data from the API call and formats it

   1. Gives the object and id
   2. Decodes the questions and answers
   3. Add the correct answer and the three wrong answers to a new key:value pair within the item
   4. Change the array to an object with ids and decode
   5. Randomise the order so correct question does not appear in the same place each time
   6. Maps over newly formatted object with JXS to create a React element

+ Question and 4 possible answers are displayed to the user
+ When clicked the *handleGuess* function is called which applies styling and increments the score if the answer matched the correct answer
+ When Next is clicked, getData is called again and this flow is repeated until 10 questions have been asked
+ A 'Go To ScoreBoard' button is made available after the 10 questions have been asked which calls the *endGame* function in the **MainGameContainer**
+ *endGame* updates the score & leaderboard, and sets the endGame state to true which calls the **EndGame Component**
+ **EndGame Component** displays the final score & leaderboard and gives the user the option to play again or return to the home screen