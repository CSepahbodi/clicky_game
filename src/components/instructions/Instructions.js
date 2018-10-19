import React, { Component } from 'react';

class Instructions extends Component {
    constructor(props) {
        super(props);

        this.state = { stepCounter: 0 };
    }

    startDialog = event => {
        event.preventDefault();

        this.setState({ stepCounter: this.state.stepCounter + 1});
    }

    render() {
        const dialog1 = (
            <div className="arrow_box justify-content-md-center text-center">
                <p className="m-4">You have arrived at..... CLICKY GAME!!! :^{")"}</p>
                <button className="btn btn-primary mb-3" onClick={this.startDialog}>How do I play?!</button>
            </div>
        );

        const dialog2 = (
            <div className="arrow_box justify-content-md-center text-center">
                <p className="m-4">Click a picture. Try to remember which image you clicked. If you click the same picture after they are scrambled... you lose. If you click a different picture you gain a point. The game goes on forever... unlike life... {")"}.</p>
                <button className="btn btn-primary mb-3" onClick={this.props.endInstructions}>I get it, lets begin!</button>
            </div>
        );


        return this.state.stepCounter === 0 ? dialog1 : dialog2;
    }
}

export default Instructions;