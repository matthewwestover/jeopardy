import React from 'react';
import { connect, } from 'react-redux';
import { getCards, } from '../reducers/cards';
import GameCards from './GameCards';
import { Loader, Dimmer, Segment, } from 'semantic-ui-react';

class GameCardFetch extends React.Component {
  state = { loaded: false}

  componentDidMount() {
    this.props.dispatch(getCards(this.props.catId, this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true })
  }


  render() {
    const { loaded } = this.state;

    if (loaded) {
      return(
        <div>
          <GameCards />
        </div>
      )
    } else {
      return(
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(GameCardFetch);