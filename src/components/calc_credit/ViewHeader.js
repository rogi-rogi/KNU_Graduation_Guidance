const ViewHeader = ({ headerList }) => {
  return (
    <>
      {headerList.map((title) => (
        <div className="head">{title}</div>
      ))}
    </>
  );
};

export default ViewHeader;
