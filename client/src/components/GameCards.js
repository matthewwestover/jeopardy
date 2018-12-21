import React from 'react';
import { connect, } from 'react-redux';
import { Container, Card, } from 'semantic-ui-react';
import GameCard from './GameCard'

class GameCards extends React.Component {

  render() {
    return(
      <Container>
        <Card.Group centered itemsPerRow={5}>
          { this.props.cards.map( c => {
           return(<GameCard key={c.id} {...c} />)
          })}
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (store,) => {
  return { cards: store.cards, };
}

export default connect(mapStateToProps)(GameCards);
