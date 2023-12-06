const CalcGraph = ({ list }) => {
  return (
    <>
      <div className="graph-wrapper">
        <div className="out-wrapper">
          {list.map((bar) => (
            <div>
              <div className="bar-wrapper">
                <div
                  className="bar"
                  style={{
                    transform: `translateY(${220 - 10 * bar.credit}px)`,
                  }}
                />
              </div>
              <div className="credit">{bar.credit}</div>
              <div className="label">{bar.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CalcGraph;
