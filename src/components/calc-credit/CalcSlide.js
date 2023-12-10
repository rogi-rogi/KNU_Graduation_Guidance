import { useCallback, useContext, useEffect, useState } from "react";
import CreditContext from "../../contexts/CreditContext";
import GroupContext from "../../contexts/GroupContext";
import CalcTable from "./calc-table/CalcTable";
import LoadMapWrapper from "./load-map/LoadMapWrapper";
import CalcFilter from "./calc-filter/CalcFilter";
import axios from "axios";

const CalcSlide = ({ onClick, pocketSubjectList, setPocketSubjectList }) => {
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
  // 1. 입학연도 : 드롭다운
  // const filterSelectYear = (e) => {
  //   setSelectYear(e.target.value);
  //   if (e.target.value !== selectYear) {
  //     setSelectGroup("*");
  //     setSelectMajor("*");
  //     setSelectAddGroup("*");
  //     setSelectAddMajor("*");
  //   }
  // };
  //
  const filterSelectYear = useCallback((e) => {
    setSelectYear((prevSelectYear) => {
      const newSelectYear = e.target.value;
      if (newSelectYear !== prevSelectYear) {
        setSelectGroup("*");
        setSelectMajor("*");
        setSelectAddGroup("*");
        setSelectAddMajor("*");
      }
      return e.target.value;
    });
  }, []);
  // 2. 소속 : 드롭다운
  const filterSelectUniver = (e) => {
    setSelectUniver(e.target.value);
    if (e.target.value !== selectUniver) {
      setSelectGroup("*");
      setSelectMajor("*");
    }
  };
  // 3. 학부 : 드롭다운
  const filterSelectGroup = (e) => {
    setSelectGroup(e.target.value);
    if (e.target.value !== selectGroup) {
      setSelectMajor("*");
    }
  };
  // 4. 학과 : 드롭다운
  const filterSelectMajor = (e) => {
    setSelectMajor(e.target.value);
  };
  // 심화과정(1전공) : 체크박스
  const filterMajorType = (e) => {
    setMajorType((prev) => ({
      ...prev,
      major: e.target.checked ? "advanced" : "major",
    }));
  };
  // 전공추가 : 체크박스
  const filterAddMajorView = (e) => {
    setEnableAddMajor(e.target.checked);
  };
  // 부전공 : 체크박스
  const filterEnabledMinor = (e) => {
    setEnabledMinor(!enabledMinor);
  };
  // 5. 소속(추가전공) : 드롭다운`
  const filterSelectAddUniver = (e) => {
    setSelectAddUniver(e.target.value);
    if (e.target.value !== selectAddUniver) {
      setSelectAddGroup("*");
      setSelectAddMajor("*");
    }
  };
  // 6. 학부(추가전공) : 드롭다운
  const filterSelectAddGroup = (e) => {
    setSelectAddGroup(e.target.value);
    if (e.target.value !== selectAddMajor) {
      setSelectAddMajor("*");
    }
  };
  // 7. 학과(추가전공) : 드롭다운
  const filterSelectAddMajor = (e) => {
    setSelectAddMajor(e.target.value);
  };
  // 적용 : 버튼
  const filterApplyBtn = () => {
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
          addMajor: selectGroup === selectAddGroup ? "doubleIn" : "doubleOut",
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
  const handleCalcTable = {
    //onChangeSubject
    onChangeSubject: (input) => {
      const newGet = handleCalcTable.getNewInputCredit(
        input,
        getCredit.subject
      );
      if (newGet === null) return;
      // 교양과목 합 계산
      newGet[4] = creditDispatch(newGet.slice(0, 4), {
        type: "ARRAY_SUM",
      });

      // 인정-교양 계산
      const std = [...userCredit.subject];
      const newApply = [
        newGet[0] > std[0] ? std[0] : newGet[0],
        newGet[1] +
          (newGet[0] > std[0] ? newGet[0] - std[0] : 0) +
          (newGet[2] > std[2] ? newGet[2] - std[2] : 0) +
          (newGet[3] > std[3] ? newGet[3] - std[3] : 0),
        newGet[2] > std[2] ? std[2] : newGet[2],
        newGet[3] > std[3] ? std[3] : newGet[3],
        newGet[4], // 취득 합계와 동일
      ];
      // 미취득-교양 계산
      const newNeed = std.map((credit, i) =>
        newApply[i] > credit ? 0 : credit - newApply[i]
      );

      // update
      const newGetCredit = { ...getCredit, subject: newGet };
      // 교양-합계 업데이트 및 적용
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
        sum: [userCredit.sum[0] - newGetCredit.sum[0]],
      }));
    },
    //onChangeMajor
    onChangeMajor: (input) => {
      const newGet = handleCalcTable.getNewInputCredit(input, getCredit.major);
      if (newGet === null) return;

      // apply
      const std = [...userCredit.major];
      const newApply =
        newGet[0] > std[0]
          ? [std[0], newGet[1] + (newGet[0] - std[0])]
          : [newGet[0], newGet[1]];
      // need
      const newNeed = std.map((credit, i) =>
        newApply[i] > credit ? 0 : credit - newApply[i]
      );
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
        sum: [userCredit.sum[0] - newGetCredit.sum[0]],
      }));
    },
    //onChangeAddMajor
    onChangeAddMajor: (input) => {
      const newGet = handleCalcTable.getNewInputCredit(
        input,
        getCredit.addMajor
      );
      if (newGet === null) return;
      // apply
      const std = [...userCredit.addMajor];
      const newApply =
        newGet[0] < std[0]
          ? [newGet[0], newGet[1]]
          : [std[0], newGet[1] + (newGet[0] - std[0])];
      // need
      const newNeed = std.map((credit, i) =>
        newApply[i] > credit ? 0 : credit - newApply[i]
      );
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
        sum: [userCredit.sum[0] - newGetCredit.sum[0]],
      }));
    },
    //onChangeOther
    onChangeOther: (input) => {
      const newGet = handleCalcTable.getNewInputCredit(input, getCredit.other);
      if (newGet === null) return;
      // apply
      const std = [...userCredit.other];
      const newApply = [newGet[0] > std ? newGet[0] - std : newGet[0]];
      // need
      const newNeed = [newApply[0] > std ? 0 : newApply[0] - std];
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
        sum: [userCredit.sum[0] - newGetCredit.sum[0]],
      }));
    },
    //input
    getNewInputCredit: (input, creditList) => {
      const inputValue = input.target.value.replace(/[^0-9]/g, " ");
      if (inputValue === " ") return null;
      const newGetCreditList = [...creditList];
      newGetCreditList[input.target.id.split("-")[0]] = Number(inputValue);
      return newGetCreditList;
    },
  };
  // 최적화 작업 필요
  const handle = {
    filterSelectYear,
    filterSelectUniver,
    filterSelectGroup,
    filterSelectMajor,
    filterMajorType,
    filterAddMajorView,
    filterEnabledMinor,
    filterSelectAddUniver,
    filterSelectAddGroup,
    filterSelectAddMajor,
    filterApplyBtn,
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
    console.log("-----------------");
    console.log(creditDispatch("*", { type: "INIT_USER" }));
    setLoadMapCredit(creditDispatch("*", { type: "INIT_USER" }));
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
        handleOnClickPickSubject(pickSubject, selectSemester);
      }
    }
  };
  const handleOnClickPickSubject = (pickSubject) => {
    // loadMapSubjetList에 대한 검증은 불필요
    const newLoadMapCredit = loadMapCredit;
    if (pickSubject.id === selectMajor) {
      if (pickSubject.type === "basic") {
        newLoadMapCredit.major[0] += pickSubject.credit;
      } else if (pickSubject.type === "choice") {
        newLoadMapCredit.major[1] += pickSubject.credit;
      }
    } else if (pickSubject.id === selectAddMajor) {
      if (pickSubject.type === "basic") {
        newLoadMapCredit.addMajor[0] += pickSubject.credit;
      } else if (pickSubject.type === "choice") {
        newLoadMapCredit.addMajor[1] += pickSubject.credit;
      }
    } else {
      newLoadMapCredit.other[0] += pickSubject.credit;
    }
    setLoadMapCredit(newLoadMapCredit);
  };
  useEffect(() => {
    //
  });
  const creditInfo = {
    userCredit,
    getCredit,
    applyCredit,
    needCredit,
    loadMapCredit,
    majorType,
  };
  const shareLoadMapCredit = async () => {
    await axios.patch(`http://localhost:3001/share`, pocketSubjectList);
    onClick(2);
  };
  return (
    <>
      <div className="calc-slide-wrapper">
        <CalcFilter info={majorInfo} handle={handle} />
        <CalcTable creditInfo={creditInfo} handleCalcTable={handleCalcTable} />
      </div>
      <div className="loadmap-slide-wrapper">
        <button className="share-wrapper" onClick={shareLoadMapCredit}>
          로드맵 공유
        </button>
        <LoadMapWrapper
          majorInfo={majorInfo}
          creditGraph={creditGraph}
          handlePocketInit={handlePocketInit}
          handlePocketSubjectList={handlePocketSubjectList}
        />
      </div>
    </>
  );
};
export default CalcSlide;
