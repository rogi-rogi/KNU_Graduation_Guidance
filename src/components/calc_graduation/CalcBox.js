import { useContext, useEffect, useState } from "react";
import GroupContext from "../../contexts/GroupContext";
import CreditContext from "../../contexts/CreditContext";

const CalcBox = () => {
  const { groupState } = useContext(GroupContext);
  const { creditState, creditDispatch } = useContext(CreditContext);
  console.log(creditDispatch("y1_g3_m1", { type: "GET_CREDIT" }));
  // const [yearID, setYearID] = useState("y0");
  // const [selectGroupID, setSelectGroupID] = useState("0000000000");
  // const handleOnChangeSetStartYearIdx = (e) => {
  //   if (e.target.value !== null) {
  //     setYearID(e.target.value);
  //     setSelectGroupID("0000000000");
  //   }
  // };
  // const handleOnChangeSetGroupID = (e) => {
  //   if (e.target.value !== null) setSelectGroupID(e.target.value);
  // };
  // 입학연도별 대학분류
  const headerList = ["구분", "기초", "일반", "균형", "계열", "합계"];

  useEffect(() => {
    // console.log("startYearIdx:" + startYearIdx);
    // const msg = groupList.list[startYearIdx];
    // console.log(msg);
    // console.log();
  }); // for test

  return (
    <>
      <div className="calc-box-wrapper">
        {/* <div className="list-box-wrapper">
          <GroupListBox
            header={startYearList.header}
            list={startYearList.list}
            onChange={handleOnChangeSetStartYearIdx}
          />
          <GroupListBox
            header={groupList.header}
            list={groupList.list[startYearIdx]}
            onChange={handleOnChangeSetGroupID}
          />
        </div>
        <div className="calc-box-container-subject">
          <ViewHeader headerList={headerList} />
          <ViewCredit {...targetCreditInfo} />
        </div> */}
      </div>
    </>
  );
};

const GroupListBox = ({ header, list, onChange }) => {
  return (
    <div className="list-box">
      <label>{header}</label>
      <select onChange={onChange}>
        <option>선택</option>
        {list && list.map((e) => <option value={e.id}>{e.title}</option>)}
      </select>
    </div>
  );
};

const ViewHeader = ({ headerList }) => {
  return (
    <>
      {headerList.map((title) => (
        <div className="header">{title}</div>
      ))}
    </>
  );
};

const ViewCredit = ({ header, creditList, selectGroupID }) => {
  return (
    <>
      <div className="header">{header}</div>
      {creditList
        .filter((group) => group.id === selectGroupID)[0]
        .subject.map((credit) => (
          <div>{credit}</div>
        ))}
    </>
  );
};
export default CalcBox;
