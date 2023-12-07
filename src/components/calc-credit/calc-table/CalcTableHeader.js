const CalcTableHeader = ({ headerList }) => {
  return (
    <>
      {headerList.map((title) => (
        <div className="head">{title}</div>
      ))}
    </>
  );
};

export default CalcTableHeader;
