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
  const [enabledMinor, setEnabledMinor] = useState(false);
  const [selectAddGroup, setSelectAddGroup] = useState("*");
  const [selectAddMajor, setSelectAddMajor] = useState("*");
  const [majorType, setMajorType] = useState({
    major: "advanced",
    addMajor: "*",
  });

  const [selectCredit, setSelectCredit] = useState(
    creditDispatch("*", { type: "INIT" })
  );
  // 졸업기준
  const [userCredit, setUserCredit] = useState(
    creditDispatch(
      { selectCredit, other: "", majorType },
      { type: "CREDIT_CONVERT_USER" }
    )
  );
  // 취득
  const [getCredit, setGetCredit] = useState(
    creditDispatch("*", { type: "INIT_USER" })
  );
  // 인정학점
  const [applyCredit, setApplyCredit] = useState(
    creditDispatch("*", { type: "INIT_USER" })
  );
  // 미취득
  const [needCredit, setNeedCredit] = useState(
    creditDispatch("*", { type: "INIT_USER" })
  );
  // 추가입력
  const [appendCredit, setAppendCredit] = useState(
    creditDispatch("*", { type: "INIT_USER" })
  );

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

  // 2. 소속 : 드롭다운
  const handleOnChangeSelectGroup = (e) => {
    setSelectGroup(e.target.value);
    if (e.target.value === "*") setSelectMajor("*");
  };

  // 3. 학부(학과) : 드롭다운
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
  // 부전공 : 체크박스
  const handleOnClickEnabledMinor = (e) => {
    setEnabledMinor(!enabledMinor);
  };

  // 4. 소속(추가전공) : 드롭다운
  const handleOnChangeSelectAddGroup = (e) => {
    setSelectAddGroup(e.target.value);
    if (e.target.value === "*") setSelectAddMajor("*");
  };
  // 5. 학부(추가전공) : 드롭다운
  const handleOnChangeSelectAddMajor = (e) => {
    setSelectAddMajor(e.target.value);
  };

  // 적용 : 버튼
  const handleOnClickApplyBtn = () => {
    if (selectMajor === "*") return alert("'학과(전공)' 누락");
    if (enableAddMajor) {
      if (selectAddGroup === "*") return alert("'소속(추가전공)' 누락");
      if (selectAddMajor === "*") return alert("'학과(추가전공)' 누락");
    }

    let newMajorType = majorType;
    if (!enableAddMajor) {
      // disable addMajor
      newMajorType = { ...majorType, addMajor: "*" };
    } else {
      if (enabledMinor) {
        newMajorType = {
          ...majorType,
          addMajor: "minor",
        };
      } else {
        newMajorType = {
          ...majorType,
          addMajor: selectMajor === selectAddMajor ? "doubleIn" : "doubleOut",
        };
      }
    }
    setMajorType(newMajorType);

    const newSelectCredit = creditDispatch(selectMajor, {
      type: "GET_CREDIT",
    });
    setSelectCredit(newSelectCredit);
    // 수정된 정보로 형식 재요청
    setUserCredit(
      creditDispatch(
        { selectCredit: newSelectCredit, other: "", majorType: newMajorType },
        { type: "CREDIT_CONVERT_USER" }
      )
    );
  };

  // 계산로직 구현 예정
  const handleOnChangeCredit = {
    onChangeSubject: (e, idx) => {
      let value = e.target.value.replace(/[^0-9]/g, " ");
      if (value === " ") return;
      value = Number(value);
      const newGet = getCredit.subject.map(Number);
      newGet[idx] = value;
      newGet[4] = creditDispatch(newGet.slice(0, 4), {
        type: "ARRAY_SUM",
      });

      const std = userCredit.subject.map(Number);
      const newApply = [
        newGet[0] > std[0] ? std[0] : newGet[0],
        newGet[1] +
          (newGet[0] > std[0] ? newGet[0] - std[0] : 0) +
          (newGet[2] > std[2] ? newGet[2] - std[2] : 0) +
          (newGet[3] > std[3] ? newGet[3] - std[3] : 0),
        newGet[2] > std[2] ? std[2] : newGet[2],
        newGet[3] > std[3] ? std[3] : newGet[3],
        newGet[4],
      ];
      const newNeed = std.map((credit, i) => {
        const newCredit = credit - newApply[i];
        return newCredit > 0 ? newCredit : 0;
      });

      // update
      setGetCredit((prev) => ({
        ...prev,
        subject: newGet,
      }));
      setApplyCredit((prev) => ({
        ...prev,
        subject: newApply,
      }));
      setNeedCredit((prev) => ({
        ...prev,
        subject: newNeed,
      }));
    },
    onChangeMajor: (e, idx) => {},
    onChangeAddMajor: (e, idx) => {},
  };

  // 최적화 작업 필요
  const handle = {
    handleOnChangeSelectYear,
    handleOnChangeSelectGroup,
    handleOnChangeSelectMajor,
    handleOnClickMajorType,
    handleOnClickAddMajorView,
    handleOnClickEnabledMinor,
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
    console.log(getCredit);
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
            <ViewCredit
              header={"취득"}
              credit={getCredit}
              onChange={handleOnChangeCredit}
              majorType={majorType}
              type={"WRITE"}
            />
            <ViewCredit header={"인정"} credit={applyCredit} />
            <ViewCredit header={"미취득"} credit={needCredit} />
            <ViewCredit header={"개발예정"} credit={appendCredit} />
          </div>
        </div>
      </div>
    </>
  );
};

const ViewHeader = ({ headerList }) => {
  return (
    //context에서 id할당 필요
    <>
      {headerList.map((title) => (
        <div className="head">{title}</div>
      ))}
    </>
  );
};

export default CalcBox;
