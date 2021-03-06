import React from 'react';
import GameCatFetch from './GameCatFetch';
import { connect } from 'react-redux';
import { Container, Header, } from 'semantic-ui-react';

class Game extends React.Component {
  state = { score: 0, };

  scoreUp = (points) => {
    this.setState( state => {
      return { score: state.score + points, }
    })
  }

  render() {
    const { score } = this.state;
    return(
      <Container>
        <Header as='h1' textAlign="center">Jeoparody!</Header>
        <Header as='h2' textAlign="center">Score: {score}</Header>
        <hr />
        <br />
        <GameCatFetch scoreUp={this.scoreUp} />
      </Container>
    )
  }
}

export default connect()(Game);