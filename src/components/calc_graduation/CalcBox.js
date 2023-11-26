import { useContext, useEffect, useState } from "react";
import GroupContext from "../../contexts/GroupContext";
import CreditContext from "../../contexts/CreditContext";

const CalcBox = () => {
  const { groupState } = useContext(GroupContext);
  const { creditState, creditDispatch } = useContext(CreditContext);

  const [selectYear, setSelectYear] = useState("*");
  const [selectGroup, setSelectGroup] = useState("*");
  const [selectMajor, setSelectMajor] = useState("*");
  const handleOnChangeSelectYear = (e) => {
    if (e.target.value) setSelectYear(e.target.value);
  };
  const handleOnChangeSelectGroup = (e) => {
    if (e.target.value) setSelectGroup(e.target.value);
  };
  const handleOnChangeSelectMajor = (e) => {
    if (e.target.value) setSelectMajor(e.target.value);
  };

  useEffect(() => {
    console.log(`select ID : ${selectMajor}`);
    console.log(creditDispatch(selectMajor, { type: "GET_CREDIT" }));
  }); // for test

  return (
    <>
      <div className="calc-box-wrapper">
        <div className="list-box-wrapper">
          <GroupListBox
            header={groupState.initGroup["year"].header}
            list={groupState.initGroup["year"].list["*"]}
            onChange={handleOnChangeSelectYear}
          />
          <GroupListBox
            header={groupState.initGroup["group"].header}
            list={groupState.initGroup["group"].list[selectYear]}
            onChange={handleOnChangeSelectGroup}
          />
          <GroupListBox
            header={groupState.initGroup["major"].header}
            list={groupState.initGroup["major"].list[selectGroup]}
            onChange={handleOnChangeSelectMajor}
          />
        </div>
        <div className="calc-box-container-subject">
          <ViewHeader headerList={groupState.ViewHeaderList} />
          {/* <ViewCredit {...targetCreditInfo} /> */}
        </div>
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
      {creditList.subject.map((credit) => (
        <div>{credit}</div>
      ))}
    </>
  );
};
export default CalcBox;
