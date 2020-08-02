import React from 'react';
import Time from './Time';
import Partida from './Partida';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class PlacarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            gols_casa: 0,
            gols_visitante: 0,
        };
    }

    marcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1
        });
    }

    marcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1
        });
    }

    render() {
        const { partida, casa, visitante } = this.props;
        return (
            <div>

                <Container className="p-3">
                    <Jumbotron>
                        <Row>
                            <h1 className="col-12 mb-3 text-center">Placar do Jogo</h1>

                            <div className="col-4 text-center">
                                <h3>Casa</h3>
                                <Time 
                                    nome={casa.nome} 
                                    gols={this.state.gols_casa}
                                    marcarGol={this.marcarGolCasa.bind(this)}
                                />
                            </div>  

                            <div className="col-4 text-center">
                                <Partida {...partida}/>
                            </div>  

                            <div className="col-4 text-center">
                                <h3>Visitante</h3>
                                <Time 
                                    nome={visitante.nome} 
                                    gols={this.state.gols_visitante}
                                    marcarGol={this.marcarGolVisitante.bind(this)}
                                />
                            </div>
                        </Row>
                    </Jumbotron>
                </Container>

            </div>
        );
    }
}

export default PlacarContainer;