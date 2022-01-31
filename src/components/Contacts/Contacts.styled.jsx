import styled from "@emotion/styled";

const ListContacts = styled.ul`
  list-style-type: none;
  font-size: 17px;
  line-height: 2;
  padding: 0;
`;

const DeleteBtn = styled.button`
  background-color: darkred;
  color: #fff;
  font-size: 12px;
  padding: 2px 5px;
  margin-left: 10px;
  border-radius: 2px;
  border: none;
`;

export { ListContacts, DeleteBtn };
