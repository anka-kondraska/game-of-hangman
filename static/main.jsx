"use strict";

/* App
 *
 * This is the wrapper for the whole app --- you can think of it like
 * base.html in Jinja. The different sub-pages will appear where the
 * {this.props.children} line is.
 *
 * Since we have no state and no other functionality needed besides
 * rendering, we can write this as a simple function -- it doesn't
 * need to be created with React.createClass(). (This is mostly to
 * show off this capability; we could have written it with
 * React.createClass, instead)
 */

function Game(props) {
    return (
        <div>
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <ReactRouter.IndexLink className="navbar-brand" to="/">
                            GAME
                        </ReactRouter.IndexLink>
                    </div>
                    <ul className="nav navbar-nav">
                        // <li>
                        //     <ReactRouter.Link to="/hangman">
                        //         Hangman
                        //     </ReactRouter.Link>
                        // </li>
                        // <li>
                        //     <ReactRouter.Link to="/comment">
                        //         Comment
                        //     </ReactRouter.Link>
                        // </li>
                    </ul>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        { /* this is where sub-pages of router will go */ }
                        { props.children }
                    </div>
                </div>
            </div>
        </div>
    );
}

/* React-Router.ReactRouter makes this into a single-page-application,
 * choosing which component to show based on the URL #/path.
 *
 * Basically, React-Router takes the different "page-level components"
 * for our app (HomePage, PricesPage, StockPage, and CommentPage,
 * swaps which one is visible, given the URL, while always wrapping
 * this all in UberMelonSite.
 */

ReactDOM.render(
    <ReactRouter.Router history={ ReactRouter.hashHistory }>
        <ReactRouter.Route path="/" component={ Game }>
            <ReactRouter.IndexRoute component={ Hangman }/>
            // <ReactRouter.Route path="/hangman" component={ Hangman }/>
        </ReactRouter.Route>
    </ReactRouter.Router>,

    document.getElementById('main')
);

