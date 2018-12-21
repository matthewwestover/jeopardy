import React from 'react';
import CardForm from './CardForm';
import CardView from './CardView';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { Container, Header, Button, Card, Icon, } from 'semantic-ui-react';

class Cards extends React.Component {
  state = { showForm: false, };

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm };
    })
  }

  render() {
    const { showForm } = this.state;
    return(
      <Container>
        <Card.Group centered itemsPerRow={5}>
          { this.props.cards.map( c => (
            <Card>
              {c.points}
            </Card>
          ))}
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (store, props) => {
  return { cards: store.cards, };
}

export default connect(mapStateToProps)(Cards);
