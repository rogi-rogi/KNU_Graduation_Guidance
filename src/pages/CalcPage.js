import "./Page.scss";
import "../components/calc-credit/calc.scss";
import CalcSlide from "../components/calc-credit/CalcSlide";
const CalcPage = ({ onClick, pocketSubjectList, setPocketSubjectList }) => {
  return (
    <div className="page">
      <div className="page-content-wrapper">
        <CalcSlide
          onClick={onClick}
          pocketSubjectList={pocketSubjectList}
          setPocketSubjectList={setPocketSubjectList}
        />
      </div>
    </div>
  );
};

export default CalcPage;
