import React from 'react';
import { Card, Button, Icon} from 'semantic-ui-react'

class GameCard extends React.Component {

  state = {...this.props, userAnswer: "",}

  toggleBack = () => {
    this.setState( state => {
      return {show_back: !state.show_back};
      })
  }

  setUserAnswer = (answer) => {
    this.setState( state => {
      return{answered: !state.answered, userAnswer: answer}
    })
  }

  CardFront = () => (
    <Card>
      <Card.Content style={{ fontSize: '20px', textAlign: 'center',}}>Points 
      <br/>
      {this.state.points}</Card.Content>
      <Card.Content extra>
        <Button icon color="green" fluid onClick={() => this.toggleBack()}><Icon name='redo' />{' '}Select</Button>
      </Card.Content>
    </Card>
  )

  CardAnswer = () => (
    <Card>
      <Card.Content style={{ fontSize: '20px', textAlign: 'center',}}>{this.state.question}</Card.Content>
      <Button fluid color="teal" onClick={() => this.setUserAnswer(this.state.answer1)}>{this.state.answer1}</Button>
      <Button fluid color="blue" onClick={() => this.setUserAnswer(this.state.answer2)}>{this.state.answer2}</Button>
      <Button fluid color="violet" onClick={() => this.setUserAnswer(this.state.answer3)}>{this.state.answer3}</Button>
      <Button fluid color="purple" onClick={() => this.setUserAnswer(this.state.answer4)}>{this.state.answer4}</Button>
    </Card>
  )

  CardResultWin = () => {
    this.props.scoreUp(this.state.points)
    return <Card>
      <Card.Content style={{ fontSize: '20px', textAlign: 'center',}}>Correct!</Card.Content>
      <Card.Content style={{ fontSize: '14px', textAlign: 'center',}}>You win {this.state.points} points!</Card.Content>
    </Card>
  }
  
  CardResultLose = () => (
    <Card>
    <Card.Content style={{ fontSize: '20px', textAlign: 'center',}}>Wrong!</Card.Content>
    </Card>
  )
  
  render() {
    const { show_back, answered, correct_answer, userAnswer, } = this.state;
    if (show_back === false && answered === false) {
      return(this.CardFront())
    } else if (show_back === true && answered === false) {
      return(this.CardAnswer())
    } else if (answered === true && correct_answer === userAnswer) {
      return(this.CardResultWin())
    } else {
      return(this.CardResultLose())
    }
  }
}

export default GameCard;