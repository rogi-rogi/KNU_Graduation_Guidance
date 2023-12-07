const ViewCredit = ({
  header,
  credit,
  handleList,
  majorType = { addMajor: "*" },
  type = "READ",
}) => {
  /*
    // credit
    {
      subject: Array(5)
      major:   Array(2)
      addMajor:Array(2)
      other:   Integer
      sum :    Integer
    }
    */
  const divStyle = { backgroundColor: "rgb(121, 153, 213)" };
  return (
    <>
      <div className="head">{header}</div>
      <SubView
        list={credit.subject.slice(0, 4)}
        onChange={handleList && handleList.onChangeSubject}
        type={type}
      />
      <SubView
        list={[credit.subject[credit.subject.length - 1]]}
        addStyle={divStyle}
        disabled={true}
        type={type}
      />

      <SubView
        list={credit.major}
        onChange={handleList && handleList.onChangeMajor}
        type={type}
      />

      <SubView
        list={credit.addMajor}
        onChange={handleList && handleList.onChangeAddMajor}
        disabled={majorType.addMajor === "*"}
        type={type}
      />

      <SubView
        list={[credit.other]}
        onChange={handleList && handleList.onChangeOther}
        type={type}
      />
      <SubView
        list={[credit.sum]}
        addStyle={divStyle}
        disabled={true}
        type={type}
      />
    </>
  );
};

//disable-box
const SubView = ({
  list,
  onChange,
  addStyle,
  disabled = false,
  type = "READ",
}) => {
  return (
    <>
      {type === "READ" &&
        list.map((credit) => (
          <div className="sum" style={addStyle}>
            {credit === 0 ? "" : credit}
          </div>
        ))}
      {type === "WRITE" &&
        list.map((credit, idx) => (
          <input
            id={`${idx}-input`}
            value={credit === 0 ? "" : credit}
            disabled={disabled}
            onChange={onChange}
            maxLength={2}
          />
        ))}
    </>
  );
};
export default ViewCredit;
