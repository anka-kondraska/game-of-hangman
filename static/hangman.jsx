"use strict";

var Hangman = React.createClass({

    getInitialState: function () {
        return {numWrong: 0, guessed: new Set()}
    },

    guessedWord: function () {  // "app_e" for "apple"
        var word = "";

        for (var ltr of this.props.answer)
            word += this.state.guessed.has(ltr) ? ltr : "_";

        return word;
    },

    handleGuess: function (letter) {
        this.state.guessed.add(letter);
        this.setState({guessed: this.state.guessed});

        if (this.props.answer.indexOf(letter) === -1)
            this.setState({'numWrong': this.state.numWrong + 1});
    },

    renderButtons: function () {
        var buttons = [];

        for (var ltr of "abcdefghijklmnopqrstuvwxyz")
            buttons.push(
                <GameButton key={ ltr } letter={ ltr }
                        isDisabled={ this.state.guessed.has(ltr) }
                        handleChoice={ this.handleGuess } />);

        return <div className="letters">{ buttons }</div>;
    },

    render: function () {
        return (
            <div className="Hangman">
                <h1>Hangman!</h1>
                <img src={ "../static/hangman" + this.state.numWrong + ".JPG" }/>
                <p className="guessed">
                    Wrong guesses: { this.state.numWrong }
                </p>
                <p className="word">{ this.guessedWord() }</p>

                
            </div>
        )
    },
});

fetch('http://localhost:5000/random_word.json')
  .then(function(response) {
    return response.json();
  }).then(function(j) { 
  
    console.log("HERE",j.word);
    return j.word
    
  });
/* start-main */
var word = j.word;
console.log("answer = " + word);

ReactDOM.render(
    <Hangman answer={word}/>,
    document.getElementById('root'));
/* end-main */