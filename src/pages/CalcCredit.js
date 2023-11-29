import CalcBox from "../components/calc_graduation/CalcBox";
// import CalcGraph from "../components/calc_graduation/CalcGraph";
import "./Page.scss";

const CalcCredit = () => {
  return (
    <div className="page">
      <div className="page-content-wrapper">
        <CalcBox />
        {/* <CalcGraph /> */}
      </div>
    </div>
  );
};

export default CalcCredit;
