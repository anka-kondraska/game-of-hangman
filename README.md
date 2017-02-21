Game of Hangman



## Table of Contents📖

* [Tech Stack](#tech-stack)
* [Features](#features)
* [Setup/Installation](#installation)
* [Demo](#demo)
* [To-Do](#future)
* [License](#license)

## <a name="tech-stack"></a>Tech Stack

__Frontend:__ D3, Chart.js, Jinja2, Javascript, jQuery, Bootstrap <br/>
__Backend:__ Python, NetworkX, Flask, PostgreSQL, SQLAlchemy, bcrypt, faker, pandas, 

## <a name="features"></a>Features



## <a name="installation"></a>Setup/Installation

####Requirements:

- React.js
- Python 2.7

To have this app running on your local computer, please follow the below steps:

Clone repository:
```
$ git clone https://github.com/skakanka/game-of-hangman.git
```
Create a virtual environment:
```
$ virtualenv env
```
Activate the virtual environment:
```
$ source env/bin/activate
```
Install dependencies:
```
$ pip install -r requirements.txt
```
Get your own Google Maps API key and save it to a file `secrets.py`.

Create database 'barternet'.
```
$ createdb -E UTF8 -T template0 --locale=en_US.utf8 barternet
```
Create your database tables and seed example data.
```
$ python barter_network/seed.py
```
Run the app from the command line.
```
$ python runserver.py
```
If you want to use SQLAlchemy to query the database, run in interactive mode
```
$ python -i model.py
```
## <a name="demo"></a>Demo

## <a name="future"></a>TODO
* Multiuser functionality



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