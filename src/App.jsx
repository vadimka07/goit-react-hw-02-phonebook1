import "./App.css";
import { Component } from "react";
import Form from "./components/Form/Form";
import Find from "./components/Find/Find";
import Contacts from "./components/Contacts/Contacts";
import { nanoid } from "nanoid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      filter: "",
    };
  }

  formSubmitHandler = ({ number, name }) => {
    for (const item of this.state.contacts) {
      if (item.name === name) {
        alert(`${name} is already in contacts`);
        return;
      }
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  handleInputFind = (event) => {
    this.setState({
      filter: event.target.value.toLowerCase(),
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter((element) =>
      element.name.includes(this.state.filter)
    );
  };

  handlerDeleteItem = (elementId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((item) => {
        return item.id !== elementId;
      }),
    }));
  };

  render() {
    const filterContactsData = this.filterContacts();
    return (
      <div className="App">
        <Form onSubmit={this.formSubmitHandler} />
        <Find findValue={this.state.filter} onChange={this.handleInputFind} />
        <Contacts
          contacts={filterContactsData}
          onDelete={this.handlerDeleteItem}
        />
      </div>
    );
  }
}

export default App;
