import "./App.css";
import { Component } from "react";
import Form from "./components/Form/Form";
import Find from "./components/Find/Find";
import Contacts from "./components/Contacts/Contacts";
import { nanoid } from "nanoid";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  formSubmitHandler = ({ number, name }) => {
    const isExistContact = this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    isExistContact
      ? alert(`${name} is already in contacts`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, { id: nanoid(), name, number }],
        }));
  };
  handlerInputFind = (event) =>
    this.setState({
      filter: event.target.value.toLowerCase(),
    });
  filterContacts = () => {
    const normFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter((element) =>
      element.name.toLowerCase().includes(normFilter)
    );
  };
  handlerDeleteItem = (elementId) =>
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((item) => item.id !== elementId),
    }));
  render() {
    const { filter } = this.state;
    const { formSubmitHandler, handlerInputFind, handlerDeleteItem } = this;
    const filterContactsData = this.filterContacts();
    return (
      <div className="App">
        <Form onSubmit={formSubmitHandler} />
        <Find findValue={filter} onChange={handlerInputFind} />
        <Contacts contacts={filterContactsData} onDelete={handlerDeleteItem} />
      </div>
    );
  }
}
export default App;
