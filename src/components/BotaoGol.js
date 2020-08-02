import React from 'react';

class BotaoGol extends React.Component {

    handleClick(event) {
        this.props.marcarGol();
    }

    render() {
        return (
            <button className="btn btn-success" onClick={this.handleClick.bind(this)}>Gol!</button>
        );
    }
}

export default BotaoGol;