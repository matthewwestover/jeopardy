import React from 'react';
import CategoryForm from './CategoryForm';
import { deleteCat } from '../reducers/categories';
import { connect, } from 'react-redux';
import { Link , } from 'react-router-dom';
import { List, Icon, Button, } from 'semantic-ui-react';


class Category extends React.Component {
  state = { showForm: false, }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm };
    })
  }

  handleDelete = () => {
    const { id, dispatch, } = this.props;
    dispatch(deleteCat(id));
  }

  render() {
    const { id, name, description } = this.props;
    const { showForm } = this.state;
    return(
        <List.Item key={id}>
          <List.Content floated="right" verticalAlign="center">
            <Button.Group style={{ marginTop: "10px"}}>
              <Button  icon color="blue" onClick={this.toggleForm}>
                <Icon name="edit" />
                { showForm ? 'Cancel' : 'Edit' }
              </Button>
              <Button icon color="red" onClick={this.handleDelete}>
                <Icon name="trash" />
                Delete
              </Button>
            </Button.Group>
          </List.Content>
          {
            showForm ? 
            <List.Item>
              <CategoryForm closeForm={this.toggleForm} { ...this.props } />
            </List.Item>
            :
            <List.Content>
              <List.Content floated="left">
              <List.Icon name='folder' size='huge' />
              </List.Content>
              <List.Header as={Link} to={`/categories/${id}`} style={{ fontSize: "20px", textDecoration: "underline", marginTop: "10px", paddingBottom: "10px", paddingTop: "10px" }}>{name}</List.Header>
              <List.Description as={Link} to={`/categories/${id}`} style={{ color: "grey" }}>Descripton: {description}</List.Description>
            </List.Content>
          }
        </List.Item>
    )
  }
}

export default connect()(Category);