const ViewCredit = ({ header, credit, onChange, type = "READ" }) => {
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
  return (
    <>
      <div className="head">{header}</div>
      {type === "READ" &&
        credit.subject.slice(0, 4).map((credit) => <div>{credit}</div>)}

      {type === "WRITE" &&
        credit.subject
          .slice(0, 4)
          .map((credit, idx) => (
            <input value={credit} id={idx} onChange={onChange} maxLength={3} />
          ))}

      <div className="sum">{credit.subject[credit.subject.length - 1]}</div>

      {type === "READ" && credit.major.map((credit) => <div>{credit}</div>)}
      {type === "WRITE" &&
        credit.major.map((credit, idx) => (
          <input
            value={credit}
            id={idx + 5}
            onChange={onChange}
            maxLength={3}
          />
        ))}

      {type === "READ" && credit.addMajor.map((credit) => <div>{credit}</div>)}
      {type === "WRITE" &&
        credit.addMajor.map((credit, idx) => (
          <input
            value={credit}
            id={idx + 7}
            onChange={onChange}
            maxLength={3}
          />
        ))}

      {type === "READ" && <div>{credit.other}</div>}
      {type === "WRITE" && (
        <input value={credit.other} id={9} onChange={onChange} maxLength={3} />
      )}
      <div className="sum">{credit.sum}</div>
    </>
  );
};

export default ViewCredit;
