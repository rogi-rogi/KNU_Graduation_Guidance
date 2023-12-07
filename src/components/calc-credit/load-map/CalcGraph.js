const CalcGraph = ({ list }) => {
  return (
    <>
      <div className="graph-wrapper">
        <div className="out-wrapper">
          {list.map((bar) => (
            <div>
              <div className="bar-wrapper">
                <div
                  className="bar-basic"
                  style={{
                    transform: `translateY(${220 - 10 * bar.basicCredit}px)`,
                  }}
                />
                <div
                  className="bar-choice"
                  style={{
                    transform: `translateY(${220 - 10 * bar.choiceCredit}px)`,
                  }}
                />
              </div>
              <div className="credit">{bar.basicCredit + bar.choiceCredit}</div>
              <div className="label">{bar.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CalcGraph;
