import React from 'react';
import CardForm from './CardForm';
import { deleteCard } from '../reducers/cards';
import { connect, } from 'react-redux';
import { Card, Icon, Button, } from 'semantic-ui-react';


class CardView extends React.Component {
  state = { showForm: false, }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm };
    })
  }

  handleDelete = () => {
    const { catId, id, dispatch, } = this.props;
    dispatch(deleteCard(catId, id));
  }

  render() {
    const { id, question, answer1, answer2, answer3, answer4, correct_answer, points } = this.props;
    const { showForm } = this.state;
    return(
        <Card key={id}>
          <Card.Content>
          {
            showForm ? 
            <Card.Content>
              <CardForm closeForm={this.toggleForm} { ...this.props } />
            </Card.Content>
            :
            <Card.Content>
              <Card.Header>{question}</Card.Header>
              <Card.Meta>Points: {points}</Card.Meta>
              <Card.Description>{answer1}</Card.Description>
              <Card.Description>{answer2}</Card.Description>
              <Card.Description>{answer3}</Card.Description>
              <Card.Description>{answer4}</Card.Description>
              <Card.Description>{correct_answer}</Card.Description>
            </Card.Content>
          }
          </Card.Content>
          <Card.Content extra>
            <Button.Group style={{ marginTop: "10px", position: "relative", zIndex: 999, }}>
              <Button  icon color="blue" onClick={this.toggleForm}>
                <Icon name="edit" />
                { showForm ? 'Cancel' : 'Edit' }
              </Button>
              <Button icon color="red" onClick={this.handleDelete}>
                <Icon name="trash" />
                Delete
              </Button>
            </Button.Group>
          </Card.Content>
        </Card>
    )
  }
}

export default connect()(CardView);