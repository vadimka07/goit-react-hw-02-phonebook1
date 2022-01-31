import styled from "@emotion/styled";

const FormStyles = styled.form`
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  width: 450px;
  border-radius: 5px;
  margin: 5% auto;
  padding: 30px;
  box-sizing: border-box;
  text-align: center;
`;

const Label = styled.label`
  margin-top: 15px;
  display: block;
`;
const Btn = styled.button`
  background: #61dafb;
  border-radius: 5px;
  border: none;
  padding: 15px 25px;
  cursor: pointer;
`;
export { FormStyles, Label, Btn };
