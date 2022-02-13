import { DeleteBtn, ListContacts } from "./Contacts.styled";
import PropTypes from "prop-types";
const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ListContacts>
        {contacts?.length > 0 &&
          contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <DeleteBtn type="button" onClick={() => onDelete(id)}>
                Delete
              </DeleteBtn>
            </li>
          ))}
      </ListContacts>
    </>
  );
};
export default Contacts;
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func,
};
