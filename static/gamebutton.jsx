"use strict";

var GameButton = React.createClass({

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
