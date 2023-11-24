import CalcBox from "../components/calc_graduation/CalcBox";
// import CalcGraph from "../components/calc_graduation/CalcGraph";
import "./Page.scss";

const CalcGraduation = () => {
  return (
    <div className="page">
      <div className="page-content-wrapper">
        <div className="page-content">
          <CalcBox />
          {/* <CalcGraph /> */}
        </div>
      </div>
    </div>
  );
};

export default CalcGraduation;
