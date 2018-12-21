import React from 'react';
import { connect, } from 'react-redux';
import { Route, } from 'react-router-dom';
import Cards from './Cards';
import { getCards } from '../reducers/cards';
import { Loader, Dimmer, Segment, } from 'semantic-ui-react';

class FetchCards extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getCards(this.props.match.params.id, this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true })
  }

  render() {
    const { loaded, } = this.state;

    if(loaded) {
      return(
        <div>
          <Route exact path='/categories/:id' component={Cards} />
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

export default connect()(FetchCards);