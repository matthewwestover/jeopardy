import React from 'react';
import { connect, } from 'react-redux';
import GameCat from './GameCat'
import { Route, } from 'react-router-dom';
import { getCats, } from '../reducers/categories';
import { Loader, Dimmer, Segment, } from 'semantic-ui-react';

class GameCatFetch extends React.Component {
  state = { loaded: false}

componentDidMount() {
  this.props.dispatch(getCats(this.setLoaded))
}

setLoaded = () => {
  this.setState({ loaded: true })
}


render() {
  const { loaded } = this.state;

  if (loaded) {
    return(
      <div>
        <GameCat />
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

export default connect()(GameCatFetch);