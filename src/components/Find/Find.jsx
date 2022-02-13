import PropTypes from "prop-types";
const Find = ({ findValue, onChange }) => (
  <input type="text" value={findValue} onChange={onChange} />
);
export default Find;
Find.propTypes = {
  findValue: PropTypes.string,
  onChange: PropTypes.func,
};
