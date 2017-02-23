Game of Hangman

In writing this Game of Hangman, I used it as an opportunity to learn React.js.
It is my first attempt.

The basic rules of the game are:
* computer chooses a random word and the user tries to guess it one letter at a time
* computer chooses a word from LinkedIn Word Dictionary API, as a default the word difficuluty is set to 1 on a scale 1-10, 10 being the hardest
* user loses the game if they guess the letters incorrectly 6 times - there are 6 incorrect guesses allowed
* the user wins if they guess all letters without running out of incorrect guesses first


## Table of Contents📖

* [Tech Stack](#tech-stack)
* [Features](#features)
* [Setup/Installation](#installation)
* [To-Do](#future)
* [License](#license)

## <a name="tech-stack"></a>Tech Stack

__Frontend:__ React.js, Javascript, Bootstrap, CSS, HTML, jQuery <br/>
__Backend:__ Python, Flask,

## <a name="features"></a>Features




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