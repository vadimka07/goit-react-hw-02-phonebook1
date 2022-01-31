const Find = ({ findValue, onChange }) => {
  return (
    <>
      <input type="text" value={findValue} onChange={onChange} />
    </>
  );
};

export default Find;
