import { useContext, useEffect, useState } from "react";
import GroupContext from "../../contexts/GroupContext";
import CreditContext from "../../contexts/CreditContext";

const CalcBox = () => {
  const { groupState } = useContext(GroupContext);
  const { creditDispatch } = useContext(CreditContext);

  const [selectYear, setSelectYear] = useState("*");
  const [selectGroup, setSelectGroup] = useState("*");
  const [selectMajor, setSelectMajor] = useState("*");
  const [targetCredit, setTargetCredit] = useState(
    creditDispatch("*", { type: "INIT" })
  );

  const [getCredit, setGetCredit] = useState(["", "", "", "", ""]);
  const [certifiedCredit, setCertifiedCredit] = useState(["", "", "", "", ""]);
  const [poorCredit, setPoorCredit] = useState(["", "", "", "", ""]);
  const handleOnChangeSelectYear = (e) => {
    if (e.target.value) {
      setSelectYear(e.target.value);
    }
  };
  const handleOnChangeSelectGroup = (e) => {
    if (e.target.value) {
      setSelectGroup(e.target.value);
    }
  };
  const handleOnChangeSelectMajor = (e) => {
    if (e.target.value) {
      const target = e.target.value;
      setSelectMajor(target);
    }
  };
  const handleOnClick = () => {
    setTargetCredit(creditDispatch(selectMajor, { type: "GET_CREDIT" }));
  };
  const handleOnChangeGetCredit = (e, idx) => {
    const newGetCredit = [
      ...getCredit.slice(0, idx),
      e.target.value.replace(/[^0-9]/g, ""),
      ...getCredit.slice(idx + 1, getCredit.length - 1),
      0,
    ].map(Number);
    newGetCredit[4] = newGetCredit.reduce((prev, cur) => prev + cur);
    const target = targetCredit.subject.map(Number);
    const newCertifiedCredit = [
      target[0] < newGetCredit[0] ? target[0] : newGetCredit[0],
      newGetCredit[1] +
        (target[0] < newGetCredit[0] ? newGetCredit[0] - target[0] : 0),
      newGetCredit[2],
      newGetCredit[3],
      0,
    ];
    newCertifiedCredit[4] = newCertifiedCredit.reduce(
      (prev, cur) => prev + cur
    );

    const newPoorCredit = [
      target[0] - newCertifiedCredit[0],
      target[1] - newCertifiedCredit[1] >= 0
        ? target[1] - newCertifiedCredit[1]
        : 0,
      target[2] - newCertifiedCredit[2] >= 0
        ? target[2] - newCertifiedCredit[2]
        : 0,
      target[3] - newCertifiedCredit[3] >= 0
        ? target[3] - newCertifiedCredit[3]
        : 0,
      0,
    ].map(Number);
    newPoorCredit[newPoorCredit.length - 1] = newPoorCredit.reduce(
      (prev, cur) => prev + cur
    );
    setGetCredit(newGetCredit);
    setCertifiedCredit(newCertifiedCredit);
    setPoorCredit(newPoorCredit);
  };

  useEffect(() => {
    // console.log(`select ID : ${selectMajor}`);
    console.log(selectYear);
    console.log(selectGroup);
    console.log(selectMajor);
    console.log(targetCredit);
    // console.log(getCredit);
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
          <button className="subject-btn" onClick={handleOnClick}>
            선택
          </button>
        </div>
        <div className="subject-calc-box-wrapper">
          <div className="subject-calc-box">
            <ViewHeader headerList={groupState.ViewHeaderList} />
            <ViewCredit
              header={"졸업기준"}
              creditList={targetCredit && targetCredit.subject}
            />
            <InputCredit
              header={"취득"}
              creditList={getCredit}
              onChange={handleOnChangeGetCredit}
            />
            <ViewCredit header={"인정"} creditList={certifiedCredit} />
            <ViewCredit header={"미취득"} creditList={poorCredit} />
          </div>
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
        <option value="*">선택</option>
        {list && list.map((e) => <option value={e.id}>{e.title}</option>)}
      </select>
    </div>
  );
};

const ViewHeader = ({ headerList }) => {
  return (
    <>
      {headerList.map((title) => (
        <div className="head">{title}</div>
      ))}
    </>
  );
};

const ViewCredit = ({ header, creditList }) => {
  return (
    <>
      <div className="head">{header}</div>
      {creditList &&
        creditList
          .slice(0, creditList.length - 1)
          .map((credit) => <div>{credit}</div>)}
      <div className="sum">{creditList[creditList.length - 1]}</div>
    </>
  );
};
const InputCredit = ({ header, creditList, onChange }) => {
  return (
    <>
      <div className="head">{header}</div>
      {creditList &&
        creditList
          .slice(0, creditList.length - 1)
          .map((credit, idx) => (
            <input
              value={credit}
              onChange={(e) => onChange(e, idx)}
              maxLength={3}
            />
          ))}
      <div className="sum">{creditList[creditList.length - 1]}</div>
    </>
  );
};
export default CalcBox;
