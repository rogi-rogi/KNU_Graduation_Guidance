import { useContext } from "react";
import GroupContext from "../../../contexts/GroupContext";
import CalcTableHeader from "./CalcTableHeader";
import CalcTableRow from "./CalcTableRow";

const CalcTable = ({ creditInfo, handleCalcTable }) => {
  const {
    userCredit,
    getCredit,
    applyCredit,
    needCredit,
    loadMapCredit,
    majorType,
  } = creditInfo;
  const { groupState } = useContext(GroupContext);
  return (
    <div className="credit-list-box-wrapper">
      <div className="credit-calc-box">
        <CalcTableHeader headerList={groupState.headerView.header} />
        <CalcTableHeader headerList={groupState.headerView.subHeader} />
        <CalcTableRow header={"졸업기준"} credit={userCredit} />
        <CalcTableRow
          header={"취득"}
          credit={getCredit}
          handleList={handleCalcTable}
          majorType={majorType}
          type={"WRITE"}
        />
        <CalcTableRow header={"인정"} credit={applyCredit} />
        <CalcTableRow header={"미취득"} credit={needCredit} />
        <CalcTableRow header={"로드맵"} credit={loadMapCredit} />
      </div>
    </div>
  );
};

export default CalcTable;
