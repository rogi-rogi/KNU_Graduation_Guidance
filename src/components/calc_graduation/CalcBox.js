import { useContext, useEffect, useState } from "react";
import GroupContext from "../../contexts/GroupContext";
import CreditContext from "../../contexts/CreditContext";
import MajorCalcOptionBox from "./MajorCalcOptionBox";
import ViewCredit from "./ViewCredit";

const CalcBox = () => {
  const { groupState } = useContext(GroupContext);
  const { creditDispatch } = useContext(CreditContext);
  const [selectYear, setSelectYear] = useState("*");
  const [selectGroup, setSelectGroup] = useState("*");
  const [selectMajor, setSelectMajor] = useState("*");
  const [enableAddMajor, setEnableAddMajor] = useState(false);
  const [selectAddGroup, setSelectAddGroup] = useState("*");
  const [selectAddMajor, setSelectAddMajor] = useState("*");
  const [majorType, setMajorType] = useState({
    major: "advanced",
    addMajor: "*",
  });

  const [selectCredit, setSelectCredit] = useState(
    creditDispatch("*", { type: "INIT" })
  );
  const [userCredit, setUserCredit] = useState(
    creditDispatch(
      { selectCredit, other: "", majorType },
      { type: "CREDIT_CONVERT_USER" }
    )
  );
  /* 계산과정에서 사용할 state
  const [getCredit, setGetCredit] = useState();
  const [needCredit, setNeedCredit] = useState();
  const [certifiedCredit, setCertifiedCredit] = useState();
  const [poorCredit, setPoorCredit] = useState();
  */

  // 1. 입학연도 : 드롭다운
  const handleOnChangeSelectYear = (e) => {
    setSelectYear(e.target.value);
    if (e.target.value === "*") {
      setSelectGroup("*");
      setSelectMajor("*");
      setSelectAddGroup("*");
      setSelectAddMajor("*");
    }
  };

  // 2. 학부 : 드롭다운
  const handleOnChangeSelectGroup = (e) => {
    setSelectGroup(e.target.value);
    if (e.target.value === "*") setSelectMajor("*");
  };

  // 3. 학과(전공) : 드롭다운
  const handleOnChangeSelectMajor = (e) => {
    setSelectMajor(e.target.value);
  };
  // 심화과정(1전공) : 체크박스
  const handleOnClickMajorType = (e) => {
    setMajorType((prev) => ({
      ...prev,
      major: e.target.checked ? "advanced" : "major",
    }));
  };
  // 전공추가 : 체크박스
  const handleOnClickAddMajorView = (e) => {
    setEnableAddMajor(e.target.checked);
  };
  // 부전공 / 복수전공 : 라디오버튼
  const handleOnClickAddMajorType = (e) => {
    // e.target.checked = false;
    setMajorType((prev) => ({ ...prev, addMajor: e.target.value }));
    console.log(e.target.value);
  };

  // 4. 학부 (추가전공) : 드롭다운
  const handleOnChangeSelectAddGroup = (e) => {
    setSelectAddGroup(e.target.value);
    if (e.target.value === "*") setSelectAddMajor("*");
  };
  // 5. 학과 (추가전공) : 드롭다운
  const handleOnChangeSelectAddMajor = (e) => {
    setSelectAddMajor(e.target.value);
  };

  // 적용 : 버튼
  const handleOnClickApplyBtn = () => {
    if (selectMajor === "*") return alert("'학과(전공)' 누락");
    if (enableAddMajor) {
      if (majorType.addMajor === "*") return alert("부전공/복수전공 선택 누락");
      if (selectAddMajor === "*") return alert("'학과(추가전공)' 누락");
    }

    let newMajorType = majorType;
    if (!enableAddMajor) {
      // disable addMajor
      newMajorType = { ...majorType, addMajor: "*" };
    } else {
      newMajorType = {
        ...majorType,
        addMajor: selectMajor === selectAddMajor ? "doubleIn" : "doubleOut",
      };
    }
    setMajorType(newMajorType);

    const newSelectCredit = creditDispatch(selectMajor, {
      type: "GET_CREDIT",
    });
    setSelectCredit(newSelectCredit);
    console.log(newMajorType);
    // 수정된 정보로 형식 재요청
    setUserCredit(
      creditDispatch(
        { selectCredit: newSelectCredit, other: "", majorType: newMajorType },
        { type: "CREDIT_CONVERT_USER" }
      )
    );
  };

  // // 계산로직 구현 예정
  // const handleOnChangeGetCredit = (e, idx) => {
  //   const newGetCredit = [
  //     ...getCredit.slice(0, idx),
  //     e.target.value.replace(/[^0-9]/g, ""),
  //     ...getCredit.slice(idx + 1, getCredit.length - 1),
  //     0,
  //   ].map(Number);
  //   newGetCredit[4] = newGetCredit.reduce((prev, cur) => prev + cur);

  //   // newCertifiedCredit
  //   const subject = selectCredit.subject.map(Number);
  //   const major = selectCredit[majorType].map(Number);
  //   const newAccept = [
  //     newGetCredit[0] > subject[0] ? subject[0] : newGetCredit[0],
  //     newGetCredit[1] +
  //       (newGetCredit[0] > subject[0] ? newGetCredit[0] - subject[0] : 0),
  //     newGetCredit[2],
  //     newGetCredit[3],
  //     0, // subject sum
  //     newGetCredit[5] > major[0] ? major[0] : newGetCredit[5],
  //     newGetCredit[6] +
  //       (newGetCredit[5] > major[1] ? newGetCredit[5] - major[1] : 0),
  //     newGetCredit[7],
  //     // 학부 내 부전/복전인 경우 기초학점 이전이 되는지
  //     newGetCredit[8], // edit
  //     0, // other sum
  //   ];
  //   newAccept[4] = creditDispatch(newAccept.slice(0, 3), { type: "SUM" });
  //   newAccept[9] = creditDispatch(newAccept.slice(5, 9), { type: "SUM" });

  //   const newPoorCredit = [
  //     subject[0] - newAccept[0],
  //     subject[1] - newAccept[1] >= 0 ? subject[1] - newAccept[1] : 0,
  //     subject[2] - newAccept[2] >= 0 ? subject[2] - newAccept[2] : 0,
  //     subject[3] - newAccept[3] >= 0 ? subject[3] - newAccept[3] : 0,
  //     0,
  //   ].map(Number);
  //   newPoorCredit[newPoorCredit.length - 1] = newPoorCredit.reduce(
  //     (prev, cur) => prev + cur
  //   );
  //   setGetCredit(newGetCredit);
  //   setCertifiedCredit(newAccept);
  //   setPoorCredit(newPoorCredit);
  // };

  // 최적화 작업 필요
  const handle = {
    handleOnChangeSelectYear,
    handleOnChangeSelectGroup,
    handleOnChangeSelectMajor,
    handleOnClickMajorType,
    handleOnClickAddMajorView,
    handleOnClickAddMajorType,
    handleOnChangeSelectAddGroup,
    handleOnChangeSelectAddMajor,
    handleOnClickApplyBtn,
  };
  const majorInfo = {
    selectYear,
    selectGroup,
    selectMajor,
    majorType,
    enableAddMajor,
    selectAddGroup,
    selectAddMajor,
  };
  useEffect(() => {
    // console.log("------------------");
    console.log(userCredit);
    // console.log(majorType);
    // console.log("------------------");
  });
  return (
    <>
      <div className="calc-box-wrapper">
        <MajorCalcOptionBox info={majorInfo} handle={handle} />
        <div className="credit-list-box-wrapper">
          <div className="credit-calc-box">
            <ViewHeader headerList={groupState.headerView.header} />
            <ViewHeader headerList={groupState.headerView.subHeader} />
            <ViewCredit header={"졸업기준"} credit={userCredit} />
            <ViewCredit header={"취득"} credit={userCredit} type={"WRITE"} />
            <ViewCredit header={"인정"} credit={userCredit} />
            <ViewCredit
              header={"추가입력"}
              credit={userCredit}
              type={"WRITE"}
            />
            <ViewCredit header={"미취득"} credit={userCredit} />
          </div>
        </div>
      </div>
    </>
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

export default CalcBox;
