import { useContext, useEffect, useState } from "react";
import CreditContext from "../../contexts/CreditContext";
import MajorCalcOptionBox from "./MajorOptionBox";
import GroupContext from "../../contexts/GroupContext";
import CalcTable from "./calc-table/CalcTable";
import LoadMapWrapper from "./load-map/LoadMapWrapper";

const CalcBox = () => {
  const { groupState } = useContext(GroupContext);
  const { creditDispatch } = useContext(CreditContext);
  const [selectYear, setSelectYear] = useState("*");
  const [selectUniver, setSelectUniver] = useState("*");
  const [selectGroup, setSelectGroup] = useState("*");
  const [selectMajor, setSelectMajor] = useState("*");
  const [enableAddMajor, setEnableAddMajor] = useState(false);
  const [enabledMinor, setEnabledMinor] = useState(false);
  const [selectAddUniver, setSelectAddUniver] = useState("*");
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
      { selectCredit, other: 0, majorType },
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
  const [loadMapCredit, setLoadMapCredit] = useState(
    creditDispatch("*", { type: "INIT_USER" })
  );
  const initCreditGraph = [
    { label: "1-1", basicCredit: 0, choiceCredit: 0 },
    { label: "1-2", basicCredit: 0, choiceCredit: 0 },
    { label: "2-1", basicCredit: 0, choiceCredit: 0 },
    { label: "2-2", basicCredit: 0, choiceCredit: 0 },
    { label: "3-1", basicCredit: 0, choiceCredit: 0 },
    { label: "3-2", basicCredit: 0, choiceCredit: 0 },
    { label: "4-1", basicCredit: 0, choiceCredit: 0 },
    { label: "4-2", basicCredit: 0, choiceCredit: 0 },
  ];
  const [creditGraph, setCreditGraph] = useState([...initCreditGraph]);
  const [pocketSubjectList, setPocketSubjectList] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  // 1. 입학연도 : 드롭다운
  const handleOnChangeSelectYear = (e) => {
    setSelectYear(e.target.value);
    if (e.target.value !== selectYear) {
      setSelectGroup("*");
      setSelectMajor("*");
      setSelectAddGroup("*");
      setSelectAddMajor("*");
    }
  };

  // 2. 소속 : 드롭다운
  const handleOnChangeSelectUniver = (e) => {
    setSelectUniver(e.target.value);
    if (e.target.value !== selectUniver) {
      setSelectGroup("*");
      setSelectMajor("*");
    }
  };

  // 3. 학부 : 드롭다운
  const handleOnChangeSelectGroup = (e) => {
    setSelectGroup(e.target.value);
    if (e.target.value !== selectGroup) {
      setSelectMajor("*");
    }
  };

  // 4. 학과 : 드롭다운
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
  // 5. 소속(추가전공) : 드롭다운`
  const handleOnChangeSelectAddUniver = (e) => {
    setSelectAddUniver(e.target.value);
    if (e.target.value !== selectAddUniver) {
      setSelectAddGroup("*");
      setSelectAddMajor("*");
    }
  };
  // 6. 학부(추가전공) : 드롭다운
  const handleOnChangeSelectAddGroup = (e) => {
    setSelectAddGroup(e.target.value);
    if (e.target.value !== selectAddMajor) {
      setSelectAddMajor("*");
    }
  };
  // 7. 학과(추가전공) : 드롭다운
  const handleOnChangeSelectAddMajor = (e) => {
    setSelectAddMajor(e.target.value);
  };

  // 적용 : 버튼
  const handleOnClickApplyBtn = () => {
    if (selectYear === "*") return alert(`'${groupState["year"].header}' 누락`);
    else if (selectUniver === "*")
      return alert(`'${groupState["univer"].header}' 누락`);
    else if (selectGroup === "*")
      return alert(`'${groupState["group"].header}' 누락`);
    else if (selectMajor === "*")
      return alert(`'${groupState["major"].header}' 누락`);
    if (enableAddMajor) {
      if (selectAddUniver === "*")
        return alert(`'${groupState["add_univer"].header}' 누락`);
      else if (selectAddUniver === "*")
        return alert(`'${groupState["add_group"].header}' 누락`);
      else if (selectAddUniver === "*")
        return alert(`'${groupState["add_major"].header}' 누락`);
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
    const newSelectCredit = creditDispatch(selectGroup, {
      type: "GET_CREDIT",
    });
    setSelectCredit(newSelectCredit);
    // 수정된 정보로 형식 재요청
    setUserCredit(
      creditDispatch(
        { selectCredit: newSelectCredit, majorType: newMajorType },
        { type: "CREDIT_CONVERT_USER" }
      )
    );
  };

  const handleOnChangeCredit = {
    onChangeSubject: (e, idx) => {
      const newGet = handleOnChangeCredit.input(getCredit.subject, e, idx);
      if (newGet === null) {
        return;
      }
      newGet[4] = creditDispatch(newGet.slice(0, 4), {
        type: "ARRAY_SUM",
      });
      // apply
      const std = userCredit.subject;
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
      // need
      const newNeed = std.map((credit, i) => {
        const newCredit = credit - newApply[i];
        return newCredit > 0 ? newCredit : 0;
      });

      // update
      const newGetCredit = { ...getCredit, subject: newGet };
      newGetCredit.sum = [creditDispatch(newGetCredit, { type: "CREDIT_SUM" })];
      setGetCredit(newGetCredit);

      setApplyCredit((prev) => ({
        ...prev,
        subject: newApply,
        sum: newGetCredit.sum,
      }));
      setNeedCredit((prev) => ({
        ...prev,
        subject: newNeed,
        sum: newGetCredit.sum,
      }));
    },

    onChangeMajor: (e, idx) => {
      const newGet = handleOnChangeCredit.input(getCredit.major, e, idx);
      if (newGet === null) {
        return;
      }
      // apply
      const std = userCredit.major;
      const newApply =
        newGet[0] < std[0]
          ? [newGet[0], newGet[1]]
          : [std[0], newGet[1] + (newGet[0] - std[0])];

      // need
      const newNeed = std.map((credit, i) => {
        const newCredit = credit - newApply[i];
        return newCredit > 0 ? newCredit : 0;
      });
      // update
      const newGetCredit = { ...getCredit, major: newGet };
      newGetCredit.sum = [creditDispatch(newGetCredit, { type: "CREDIT_SUM" })];
      setGetCredit(newGetCredit);

      setApplyCredit((prev) => ({
        ...prev,
        major: newApply,
        sum: newGetCredit.sum,
      }));
      setNeedCredit((prev) => ({
        ...prev,
        major: newNeed,
        sum: newGetCredit.sum,
      }));
    },
    onChangeAddMajor: (e, idx) => {
      const newGet = handleOnChangeCredit.input(getCredit.addMajor, e, idx);
      if (newGet === null) {
        return;
      }
      // apply
      const std = userCredit.addMajor;
      const newApply =
        newGet[0] < std[0]
          ? [newGet[0], newGet[1]]
          : [std[0], newGet[1] + (newGet[0] - std[0])];
      // need
      const newNeed = std.map((credit, i) => {
        const newCredit = credit - newApply[i];
        return newCredit > 0 ? newCredit : 0;
      });
      // update
      const newGetCredit = { ...getCredit, addMajor: newGet };
      newGetCredit.sum = [creditDispatch(newGetCredit, { type: "CREDIT_SUM" })];
      setGetCredit(newGetCredit);

      setApplyCredit((prev) => ({
        ...prev,
        addMajor: newApply,
        sum: newGetCredit.sum,
      }));
      setNeedCredit((prev) => ({
        ...prev,
        addMajor: newNeed,
        sum: newGetCredit.sum,
      }));
    },
    onChangeOther: (e, idx) => {
      let value = handleOnChangeCredit.input(e);
      if (value === " ") return;
      value = Number(value);
      // get
      const newGet = getCredit.other;
      newGet[idx] = value;
      // apply
      const std = userCredit.other;
      const newApply = [newGet[0] < std ? newGet[0] : newGet[0] - std];
      // need
      const newNeed = [newApply[0] < std ? newApply[0] - std : 0];
      // update
      const newGetCredit = { ...getCredit, other: newGet };
      newGetCredit.sum = [creditDispatch(newGetCredit, { type: "CREDIT_SUM" })];
      setGetCredit(newGetCredit);

      setApplyCredit((prev) => ({
        ...prev,
        other: newApply,
        sum: newGetCredit.sum,
      }));
      setNeedCredit((prev) => ({
        ...prev,
        other: newNeed,
        sum: newGetCredit.sum,
      }));
    },
    input: (list, e = null, idx = -1) => {
      if (e && idx !== -1) {
        let value = e.target.value.replace(/[^0-9]/g, " ");
        if (value === " ") return null;
        value = Number(value);
        // get
        const newList = list;
        newList[idx] = value;
        return newList;
      }
      return list;
    },
  };

  // 최적화 작업 필요
  const handle = {
    handleOnChangeSelectYear,
    handleOnChangeSelectUniver,
    handleOnChangeSelectGroup,
    handleOnChangeSelectMajor,
    handleOnClickMajorType,
    handleOnClickAddMajorView,
    handleOnClickEnabledMinor,
    handleOnChangeSelectAddUniver,
    handleOnChangeSelectAddGroup,
    handleOnChangeSelectAddMajor,
    handleOnClickApplyBtn,
  };
  const majorInfo = {
    selectYear,
    selectUniver,
    selectGroup,
    selectMajor,
    majorType,
    enableAddMajor,
    selectAddUniver,
    selectAddGroup,
    selectAddMajor,
  };
  const handlePocketInit = () => {
    setPocketSubjectList([[], [], [], [], [], [], [], []]);
    setCreditGraph(initCreditGraph);
  };
  const handlePocketSubjectList = (pickSubject, selectSemester) => {
    // 이전에 담은적 없는 과목인지 확인
    if (
      pocketSubjectList
        .flat()
        .every((subject) => subject.title !== pickSubject.title)
    ) {
      const newPocketSubjectList = [...pocketSubjectList];
      const creditSum =
        pocketSubjectList[selectSemester - 1].length === 0
          ? 0
          : pocketSubjectList[selectSemester - 1]
              .map((subject) => subject.credit)
              .reduce((prev, cur) => prev + cur);
      if (creditSum + pickSubject.credit <= (selectSemester >= 5 ? 22 : 19)) {
        const newCreditGraph = [...creditGraph];
        if (pickSubject.type === "basic")
          newCreditGraph[selectSemester - 1].basicCredit += pickSubject.credit;
        else if (pickSubject.type === "choice")
          newCreditGraph[selectSemester - 1].choiceCredit += pickSubject.credit;
        newPocketSubjectList[selectSemester - 1].push(pickSubject);
        setCreditGraph(newCreditGraph);
        setPocketSubjectList(newPocketSubjectList);
        handleOnClickPickSubject(newPocketSubjectList, selectSemester);
      }
    }
  };
  const handleOnClickPickSubject = (loadMapSubjetList, selectSemester) => {
    // loadMapSubjetList에 대한 검증은 불필요
    const newLoadMapSubjetList = loadMapSubjetList.flat();
    for (const subject of newLoadMapSubjetList) {
      if (subject.id === selectMajor) {
        if (subject.type === "basic") {
        } else {
        }
      } else if (enableAddMajor && subject.id === selectAddMajor) {
        if (subject.type === "basic") {
        } else {
        }
      }
    }
    console.log(newLoadMapSubjetList);
    // const arr = loadMapSubjetList.map((bar) => bar.credit);
    // // i-로드맵 전공 분류 로직 필요
    // const sum = arr.reduce((prev, cur) => prev + cur);
    // console.log(sum);
    // const newAppendCredit = { ...appendCredit };
    // newAppendCredit.major = [0, sum];
    // newAppendCredit.sum = creditDispatch(newAppendCredit, {
    //   type: "CREDIT_SUM",
    // });
    // setAppendCredit(newAppendCredit);
    // handleOnChangeCredit.onChangeMajor(null, 1);
    // const tempMajor = sum;
    // const std = userCredit.major;
    // const sumApplyBasic = 0;
    // const sumApplyChoice = applyCredit.major[0];
    // const newApply = [applyCredit.major[0] + tempMajor < std[0] ? ];
  };
  useEffect(() => {
    console.log("------------------");
    console.log(selectGroup);
    console.log(selectMajor);
    console.log("------------------");
  });
  const creditInfo = {
    userCredit,
    getCredit,
    applyCredit,
    needCredit,
    loadMapCredit,
    majorType,
  };
  return (
    <>
      <div className="calc-slide-wrapper">
        <MajorCalcOptionBox info={majorInfo} handle={handle} />
        <CalcTable creditInfo={creditInfo} onChange={handleOnChangeCredit} />
      </div>
      <div className="loadmap-slide-wrapper">
        <LoadMapWrapper
          majorInfo={majorInfo}
          creditGraph={creditGraph}
          pocketSubjectList={pocketSubjectList}
          handlePocketSubjectList={handlePocketSubjectList}
          handlePocketInit={handlePocketInit}
        />
      </div>
    </>
  );
};

export default CalcBox;
