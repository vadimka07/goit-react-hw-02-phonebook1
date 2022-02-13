import { Component } from "react";
import { Btn, FormStyles, Label } from "./Form.styled";
import PropTypes from "prop-types";
const inputs = [
  {
    type: "text",
    name: "name",
    pattern: `^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$`,
    title: `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`,
    required: true,
  },
  {
    type: "tel",
    name: "number",
    pattern: `\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}`,
    title: `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`,
    required: true,
  },
];
class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  handlerFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  handleInputChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value,
    });
  reset = () =>
    this.setState({
      name: "",
      number: "",
    });
  render() {
    const { handlerFormSubmit, handleInputChange } = this;
    return (
      <>
        <h1>Phonebook</h1>
        <FormStyles onSubmit={handlerFormSubmit}>
          {/* Это тебе пример переиспользования элемента */}
          {inputs.map(({ type, name, pattern, title, required }) => (
            <Label htmlFor={name} key={name}>
              {name}
              <br />
              <input
                type={type}
                name={name}
                id={name}
                onChange={handleInputChange}
                value={this.state[name]}
                pattern={pattern}
                title={title}
                required={required}
              />
            </Label>
          ))}
          <br />
          <Btn type="submit">Add contact</Btn>
        </FormStyles>
      </>
    );
  }
}
export default Form;
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
