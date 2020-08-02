import React from 'react';

class Partida extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>Estádio</h2>
                <div>
                    <span>{this.props.data}</span>
                    <span> - </span>
                    <span>{this.props.horario}</span>
                </div>
            </div>
        );
    }
}

export default Partida;