const ViewCredit = ({
  header,
  credit,
  onChange,
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
        onChange={type === "WRITE" && onChange.onChangeSubject}
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
        onChange={onChange && onChange.onChangeMajor}
        type={type}
      />

      <SubView
        list={credit.addMajor}
        onChange={onChange && onChange.onChangeAddMajor}
        disabled={majorType.addMajor === "*"}
        type={type}
      />

      <SubView
        list={[credit.other]}
        onChange={onChange && onChange.onChangeOther}
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
        list.map((el) => (
          <div className="sum" style={addStyle}>
            {el}
          </div>
        ))}
      {type === "WRITE" &&
        list.map((el, idx) => (
          <input
            value={el}
            disabled={disabled}
            onChange={(e) => onChange(e, idx)}
            maxLength={3}
          />
        ))}
    </>
  );
};
export default ViewCredit;
