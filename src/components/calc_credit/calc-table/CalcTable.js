import { useContext } from "react";
import GroupContext from "../../../contexts/GroupContext";
import ViewHeader from "./ViewHeader";
import ViewCredit from "./ViewCredit";

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
        <ViewHeader headerList={groupState.headerView.header} />
        <ViewHeader headerList={groupState.headerView.subHeader} />
        <ViewCredit header={"졸업기준"} credit={userCredit} />
        <ViewCredit
          header={"취득"}
          credit={getCredit}
          handleList={handleCalcTable}
          majorType={majorType}
          type={"WRITE"}
        />
        <ViewCredit header={"인정"} credit={applyCredit} />
        <ViewCredit header={"미취득"} credit={needCredit} />
        <ViewCredit header={"로드맵"} credit={loadMapCredit} />
      </div>
    </div>
  );
};

export default CalcTable;
