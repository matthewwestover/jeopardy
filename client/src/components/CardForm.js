import React from 'react';
import { connect, } from 'react-redux';
import { updateCard, addCard } from '../reducers/cards';
import { Form, TextArea, Icon, } from 'semantic-ui-react';

class CardForm extends React.Component {
  initialState = {
    question: '',
    points: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    correct_answer: '', 
  }

  state = { ...this.initialState};

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const card = { ...this.state, };
    const { closeForm, dispatch, } = this.props;
    const func = this.props.id ? updateCard : addCard;
    dispatch(func(card))
    closeForm();
  }

  render() {
    const { question, points, answer1, answer2, answer3, answer4, correct_answer } = this.props;

    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          name="question"
          label="Question"
          defaultValue={question}
          onChange={this.handleChange}
          required
        />
        <Form.Input 
          name="points"
          label="Points"
          defaultValue={points}
          onChange={this.handleChange}
          required
        />
        <Form.Group>
          <Form.Input 
            name="answer1"
            label="First Answer"
            defaultValue={answer1}
            onChange={this.handleChange}
            required
          />
          <Form.Input 
            name="answer2"
            label="Second Answer"
            defaultValue={answer2}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Input 
            name="answer3"
            label="Third Answer"
            defaultValue={answer3}
            onChange={this.handleChange}
            required
          />
          <Form.Input 
            name="answer4"
            label="Fourth Answer"
            defaultValue={answer4}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Input 
          name="correct_answer"
          label="Correct Option"
          defaultValue={correct_answer}
          onChange={this.handleChange}
          required
        />
        <br />
        <br />
        <Form.Button icon color="green"><Icon name="send" />Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(CardForm);