import React from 'react';
import { connect } from 'react-redux';
import { Route, } from 'react-router-dom';
import Categories from './Categories';
import { Loader, Dimmer, Segment, } from 'semantic-ui-react';
import { getCats } from '../reducers/categories';

class FetchCategories extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getCats(this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true})
  }

  render() {
    const { loaded, } = this.state;

    if(loaded) {
      return(
        <div>
          <Route exact path='/categories' component={Categories} />
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

export default connect()(FetchCategories);