import React from 'react';
import CardForm from './CardForm';
// import CardView from './CardView';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { Container, Header, Button, List, Icon, } from 'semantic-ui-react';

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
        <Header as='h2' textAlign="center">{this.props.category.name}'s Cards</Header>
        <Button as={Link} icon color="purple" fluid to="/categories">
          <Icon name='eye' />{' '}View All Categories
        </Button>
        <br />
        <br />
        <Button onClick={this.toggleForm}>
        { showForm ? 'Hide Form' : 'Show New Card Form' }
        </Button>
        <br />
        <br />
        {
          showForm ?
            <CardForm closeForm={this.toggleForm} />
          :
            <Card.Group centered itemsPerRow={4}>
              { this.props.cards.map( c => (
                <CardView {...c} />
              ))}
            </Card.Group>
        }
      </Container>
    )
  }
}

const mapStateToProps = (store, props) => {
  return { category: store.categories.find( c => c.id === parseInt(props.match.params.id, )), cards: store.cards, };
}

export default connect(mapStateToProps)(Cards);
