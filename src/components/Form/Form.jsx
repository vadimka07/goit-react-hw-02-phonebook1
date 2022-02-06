import { Component } from "react";
import { nanoid } from "nanoid";
import { Btn, FormStyles, Label } from "./Form.styled";
import PropTypes from "prop-types";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
    };
  }

  nameId = nanoid();
  telId = nanoid();

  handlerFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <FormStyles onSubmit={this.handlerFormSubmit}>
          <Label htmlFor={this.nameId}>
            Name
            <br />
            <input
              type="text"
              name="name"
              id={this.nameId}
              onChange={this.handleInputChange}
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <br />
          <Label htmlFor={this.telId}>
            Number
            <br />
            <input
              type="tel"
              name="number"
              id={this.telId}
              onChange={this.handleInputChange}
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <br />
          <Btn type="submit">Add contact</Btn>
        </FormStyles>
      </>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
};
