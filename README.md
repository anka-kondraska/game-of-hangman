Game of Hangman

In writing this Game of Hangman, I used it as an opportunity to learn React.js.
This is my first attempt.

The basic rules of the game are:
* computer chooses a random word and the user tries to guess it one letter at a time
* computer chooses a word from LinkedIn Word Dictionary API, as a default the word difficulty is set to 1 on a scale 1-10, 10 being the hardest
* user loses the game if they guess the letters incorrectly 6 times - there are 6 incorrect guesses allowed
* the user wins if they guess all letters without running out of incorrect guesses first

####Requirements:
The main requirements for this game are met: words are accessed from LinkedIn Word Dictionary API, the length of the secret word is displayed in the middle of the page, as the user guesses letters correct occurrences of the letter are displayed in the word, unknown remain hidden, number of guesses remaining is displayed as well, as is a list of incorrect guesses.

The extensions implemented are: the changing hangman images on the right hand side as user makes incorrect guesses, as well as adjusting level of word difficulty based on user input, closing the winning/losing alert reloads the page so the user can continue playing.

####Thought Process:
Since I am familiar with flask, I used it on the back-end. There are two flask routes. One serving the homepage where the game is played and the other serving the secret word as json randomly chosen from the API call response. The difficulty level parameter is captured in flask's session from the user radio buttons form input on the homepage. If the user has not adjusted the difficulty level it is set to 1 as default, the easiest, to initially boost morale.

Since this is a game, there is a significant amount of user interaction and changes to the DOM. I wanted to try a framework that captured the state easily and allowed for more flexibility in what different types of features where implemented and not focusing on how they were implemented. Maintaining state was crucial as it is a game. I chose React.js as it is friendly to beginners, declarative, flexible and highly efficient.

There are separate React components for the radio buttons, letters of the alphabet, winning/losing alerts and the game itself. The radio buttons are part of a form so that the user chosen level of difficulty can be captured in a session and an API call with the user input can be made, then fetched allowing all components to be re-rendered based on the new secret word. I chose radio buttons because I was trying out different user input methods and how they functioned in React.js. The letter buttons - once clicked become disabled. I was considering a text area for this but buttons seemed a better choice without the need to verify user input.The hangman images are re-rendered with each incorrect guess. Once the user loses/wins an alert appears and all buttons are disabled. Closing the alert box reloads the page defaulting the level of difficulty to 1.


## Table of Contents📖

* [Tech Stack](#tech-stack)
* [Features](#features)
* [Setup/Installation](#installation)
* [To-Do](#future)
* [License](#license)

## <a name="tech-stack"></a>Tech Stack

__Frontend:__ React.js, Javascript, Bootstrap, CSS, HTML, jQuery <br/>
__Backend:__ Python, Flask

## <a name="features"></a>Features

The game currently accesses words from LinkedIn Word Dictionary API.

In the middle of the page, there are _ for each letter in the secret word. 

On the right handside of the homepage, you will see letter buttons for each letter of the alphabet. These become disabled after a click. The images on the right hand side change depending whether the guess was incorrect, same holds true for the _ . The images progress to the ultimate end of the game image. 

On the left hand side there is a counter with the number of guesses remaining, a list of incorrect guesses, and radio buttons 1-10 corresponding to the level of word difficulty. The default level is 1, the easiest. 

After the winning or losing alert appears, the page will be reloaded after closing the alert.

Secret escape. If you are feeling frustrated playing the game, each secret word is printed to the console - if you know how to get there.


## <a name="installation"></a>Setup/Installation

####Requirements:

- Python 2.7

To have this app running on your local computer, please follow the steps below:

Clone repository from Github into your directory:
```
$ git clone https://github.com/skakanka/game-of-hangman.git
```
Go to game-of-hangman directory:
```
$ cd game-of-hangman
```
Create a virtual environment:
```
$ virtualenv venv
```
Activate the virtual environment:
```
$ source venv/bin/activate
```
Install dependencies:
```
$ pip install -r requirements.txt
```
Run the run_server.py file.
```
$ python run_server.py
```
Open your web browser, preferably Chrome and proceed to http://0.0.0.0:5000/

Now, You too have your own Game of Hangman running in your browser.
Default word difficulty is set to 1, on a scale from 1 to 10 - being the hardest.

To remove, first we need to remove the local repo. 
Make sure you are still in the game-of-hangman directory when doing this:
```
rm -rf .git
```
Then move one directory above:
```
cd ..
```
And remove the game-of-hangman dir:
```
rm -r game-of-hangman/
```

## <a name="future"></a>TODO
* Testing
* Currently transpiling JSX in browser via Babel, need to convert JSX to JavaScript via command line
* Add user input for word length
* Multi-user functionality
* Leaderboard
* Extend guessing beyond letters to words, sentences, numbers


## <a name="license"></a>License

The MIT License (MIT)
Copyright (c) 2017 Anka Kondraska 

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.