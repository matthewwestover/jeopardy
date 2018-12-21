import React from 'react';
import { connect, } from 'react-redux';
import { updateCat, addCat, } from '../reducers/categories';
import { Form, TextArea, Icon, } from 'semantic-ui-react';

class CategoryForm extends React.Component {
  initialState = {
    name: '',
    description: '',
  };

  state = {...this.initialState};

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props, });
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, }); 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const category = { ...this.state, };
    const { closeForm, dispatch, } = this.props;
    const func = this.props.id ? updateCat : addCat;
    dispatch(func(category))
    closeForm();
  }

  render() {
    const { name, description } = this.props;

    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          label="Category Name"
          defaultValue={name}
          onChange={this.handleChange}
          required
        />
        <Form.Input
          as={TextArea}
          name="description"
          label="Category Description"
          defaultValue={description}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <Form.Button color="green icon"><Icon name="send" />Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(CategoryForm);