import React from 'react';

class BotaoGol extends React.Component {
    constructor() {
        super();
    }

    handleClick(event) {
        this.props.marcarGol();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Gol!</button>
        );
    }
}

export default BotaoGol;