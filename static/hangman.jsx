"use strict";

var RadioButton = React.createClass({

    getInitialState: function() {
        return {selectedOption: 1
            };
    },

    handleOptionChange: function (evt) {
        this.setState({
            selectedOption: evt.target.value
        });

    },

    render: function () {
        return (
                <form onSubmit={this.handleFormSubmit} action="/" method="POST">
                <p className="guess">Word Difficulty Below:</p>
                    <div className="radio">
                      <label>
                        <input type="radio" name='level' value="1" 
                                      checked={this.state.selectedOption === "1"} 
                                      onChange={this.handleOptionChange} />
                         1
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name='level' value="2" 
                                      checked={this.state.selectedOption === "2"} 
                                      onChange={this.handleOptionChange} />
                         2
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name='level' value="3" 
                                      checked={this.state.selectedOption === "3"} 
                                      onChange={this.handleOptionChange} />
                         3
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name='level' value="4" 
                                      checked={this.state.selectedOption === "4"} 
                                      onChange={this.handleOptionChange} />
                         4
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name='level' value="5" 
                                      checked={this.state.selectedOption === "5"} 
                                      onChange={this.handleOptionChange} />
                         5
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name='level' value="6" 
                                      checked={this.state.selectedOption === "6"} 
                                      onChange={this.handleOptionChange} />
                         6
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name='level' value="7" 
                                      checked={this.state.selectedOption === "7"} 
                                      onChange={this.handleOptionChange} />
                         7
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name='level' value="8" 
                                      checked={this.state.selectedOption === "8"} 
                                      onChange={this.handleOptionChange} />
                         8
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name='level' value="9" 
                                      checked={this.state.selectedOption === "9"} 
                                      onChange={this.handleOptionChange} />
                         9
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name='level' value="10" 
                                      checked={this.state.selectedOption === "10"} 
                                      onChange={this.handleOptionChange} />
                         10
                      </label>
                    </div>
                    <button className="submit-button" type="submit" value="Submit">Set Level</button>
              </form>

            );
    },
});

var LetterButton = React.createClass({

    onClick: function (evt) {
        this.props.handleChoice(this.props.letter);
    },

    render: function () {
        return (
            <button onClick={ this.onClick }
                    disabled={ this.props.isDisabled }>
                { this.props.letter }
            </button>
        );
    },
});

var Alert = React.createClass({ // success warning info danger Bootstrap alerts

    render: function () {
        if (this.props.text)
            return (
                <div className={"alert alert-trim alert-" + this.props.type + " alert-dismissable center-block"}>
                 <a href="/" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    { this.props.text }
                </div>
            );
        else
            return null;   
    }
});

var Hangman = React.createClass({

    getInitialState: function () {
        return {numRemain: 6, allGuesses: new Set(), incorrect_guess: new Set(), statusText:'', statusType:'', isDisabled: false};
    },

    guessLetter: function () {  
        var currentWord = "";
        
        for (var ltr of this.props.secretWord)
            currentWord += this.state.allGuesses.has(ltr) ? ltr : "_";

        return currentWord;
    
    },

    handleGuess: function (letter) {
        this.state.allGuesses.add(letter);
        this.setState({allGuesses: this.state.allGuesses}, function(){
            if (this.props.secretWord.split('').every(letter => this.state.allGuesses.has(letter)))
            this.setState({statusText: "You Win! Click x to reload.", statusType: "success"})});

       if (this.props.secretWord.indexOf(letter) === -1)
            this.setState({'numRemain': this.state.numRemain - 1}, function(){
                if (this.state.numRemain === 0)
                this.setState({statusText: "Game Over! Click x to reload.", statusType: "danger"})});
      if (this.props.secretWord.indexOf(letter) === -1)
            this.state.incorrect_guess.add(letter);
            this.setState({incorrect_guess: this.state.incorrect_guess});
        
    },

    renderLetters: function () {
        var letters = [];

        for (var ltr of "abcdefghijklmnopqrstuvwxyz")
            letters.push(
                <LetterButton key={ ltr } letter={ ltr }
                        isDisabled={ this.state.allGuesses.has(ltr) 
                            || this.state.statusText === "Game Over! Click x to reload." 
                            || this.state.statusText === "You Win! Click x to reload."}
                        handleChoice={ this.handleGuess } />);

        return <div className="letters">{ letters }</div>;
    },


    render: function () {
        return (
            <div className="Hangman">
                <img src={ "../static/hangman"+this.state.numRemain+".jpg" }/>
                <p className="guess">
                    Guesses Remaining: { this.state.numRemain }
                </p>
                <p className="word">{ this.guessLetter() }</p>
                <p className="guess">Incorrect Guesses: { this.state.incorrect_guess }</p>
                <Alert type={ this.state.statusType } text={ this.state.statusText } />
                { this.renderLetters() }
                <RadioButton />
                
            </div>
        )
    },
});

// pass the level data set by user in the radio form
var level = $('#level').val(); 

// fetch json data 
fetch('http://localhost:5000/random_word.json/'+level)
  .then(function(response) {
    return response.json();
  }).then(function(j) { 
    // console.log("ARE WE HERE",j.random_word);
    var word = j.random_word;
    return word;
    }).then(function(word){  // pass random_word to React component Hangman and
    console.log("secretWord = " + word); // render it in the div #game
    ReactDOM.render( 
    <Hangman secretWord={word}/>,
    document.getElementById('game'));
});


