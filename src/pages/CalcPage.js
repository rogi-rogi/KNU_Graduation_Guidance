import CalcBox from "../components/calc_credit/CalcBox";
import "./Page.scss";
import "../components/calc_credit/calc.scss";
const CalcPage = () => {
  return (
    <div className="page">
      <div className="page-content-wrapper">
        <CalcBox />
      </div>
    </div>
  );
};

export default CalcPage;
