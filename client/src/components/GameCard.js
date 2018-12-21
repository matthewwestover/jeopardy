import React from 'react';
import { Card, Button, Icon} from 'semantic-ui-react'

class GameCard extends React.Component {

  state = {...this.props}

  toggleBack = () => {
    this.setState( state => {
      return {show_back: !state.show_back};
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
      <Button fluid color="teal">{this.state.answer1}</Button>
      <Button fluid color="blue">{this.state.answer2}</Button>
      <Button fluid color="violet">{this.state.answer3}</Button>
      <Button fluid color="purple">{this.state.answer4}</Button>
    </Card>
  )
  
  render() {
    const { show_back, answered, } = this.state;
    if (show_back === false && answered === false) {
      return(this.CardFront())
    } else if (show_back === true && answered === false) {
      return(this.CardAnswer())
    } else {
      return(this.CardFront())
    }
  }
}

export default GameCard;