import { DeleteBtn, ListContacts } from "./Contacts.styled";
import PropTypes from "prop-types";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ListContacts>
        {contacts.map((item) => {
          return (
            <li key={item.id}>
              {item.name}: {item.number}
              <DeleteBtn type="button" onClick={() => onDelete(item.id)}>
                Delete
              </DeleteBtn>
            </li>
          );
        })}
      </ListContacts>
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  onDelete: PropTypes.func,
};
