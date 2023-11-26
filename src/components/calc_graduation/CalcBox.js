import { useContext, useEffect, useState } from "react";
import GroupContext from "../../contexts/GroupContext";
import CreditContext from "../../contexts/CreditContext";

const CalcBox = () => {
  const { groupState } = useContext(GroupContext);
  const { creditState, creditDispatch } = useContext(CreditContext);
  const TEST = creditDispatch("y1_g3_m1", { type: "GET_CREDIT" });
  console.log(TEST);
  const TEMP = groupState["major"].list["y1_g1"];
  console.log(TEMP);
  const [selectYear, setSelectYear] = useState("*");
  const [selectGroup, setSelectGroup] = useState("*");
  const [selectMajor, setSelectMajor] = useState("*");
  const handleOnChangeSelectYear = (e) => {
    if (e.target.value !== undefined) setSelectYear(e.target.value);
  };
  const handleOnChangeSelectGroup = (e) => {
    if (e.target.value !== undefined) setSelectGroup(e.target.value);
  };
  const handleOnChangeSelectMajor = (e) => {
    if (e.target.value !== undefined) setSelectMajor(e.target.value);
  };
  // 입학연도별 대학분류
  const headerList = ["구분", "기초", "일반", "균형", "계열", "합계"];

  useEffect(() => {
    console.log(`select ID : ${selectMajor}`);
    console.log(creditDispatch(selectMajor, { type: "GET_CREDIT" }));
  }); // for test

  return (
    <>
      <div className="calc-box-wrapper">
        <div className="list-box-wrapper">
          <GroupListBox
            header={groupState["year"].header}
            list={groupState["year"].list["*"]}
            onChange={handleOnChangeSelectYear}
          />
          <GroupListBox
            header={groupState["group"].header}
            list={groupState["group"].list[selectYear]}
            onChange={handleOnChangeSelectGroup}
          />
          <GroupListBox
            header={groupState["major"].header}
            list={groupState["major"].list[selectGroup]}
            onChange={handleOnChangeSelectMajor}
          />
        </div>
        {/* <div className="calc-box-container-subject">
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
