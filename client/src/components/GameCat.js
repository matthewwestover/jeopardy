import React from 'react';
import { connect, } from 'react-redux';
import { Container, Header, Segment, } from 'semantic-ui-react';
import GameCardFetch from './GameCardFetch';


class GameCat extends React.Component {
  render() {
    const { id, name, description } = this.props.categories;
    return(
      <Container>
        {
          this.props.categories.map( c => (
            <Segment>
              <Header as="h2" textAlign="center">
              <Header.Content>{c.name}</Header.Content>
              <Header.Subheader textAlign="center">{c.description}</Header.Subheader>
              </Header>
              <GameCardFetch catId={c.id}  /> 
            </Segment>
          ))
        }
      </Container>
    )
  }
}




const mapStateToProps = (state) => {
  return { categories: state.categories, };
}

export default connect(mapStateToProps)(GameCat);