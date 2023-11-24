import { useEffect, useState } from "react";

const CalcBox = () => {
  const headerList = ["구분", "기초", "일반", "균형", "계열", "합계"];

  const startYearMenu = {
    header: "Step 01 : 입학연도",
    list: [
      { id: 0, title: "~2012" },
      { id: 1, title: "2013 ~ 2016" },
      { id: 2, title: "2017 ~ 2020" },
      { id: 3, title: "2021 ~" },
    ],
  };

  const [groupID, setGroupID] = useState(0);

  const handleOnChangeSetGroupID = (e) => {
    if (e.target.value !== null) setGroupID(e.target.value);
  };
  const [majorID, setMajorID] = useState(0);
  const handleOnChangeSetMajorID = (e) => {
    if (e.target.value !== null) setMajorID(e.target.value);
  };
  // 입학연도별 대학분류

  const groupByStartYear = {
    header: "Step 02 : 학부",
    list: [
      [
        // ~2012
        ["복지융합대학", [13, 0, 0, 0, 13]],
        ["경영관리대학", [13, 0, 0, 0, 13]],
        ["글로벌인재대학", [13, 0, 0, 0, 13]],
        ["공과대학", [13, 0, 0, 0, 13]],
        ["통합학부(과)", [13, 0, 0, 0, 13]],
      ],
      [
        // 2013~2016
      ],
      [
        // 2017~2020
      ],
      [
        // 2021~
      ],
    ].map((groupList) =>
      groupList.map((group, id) => ({ id, title: group[0], credit: group[1] }))
    ),
  };
  /*
  {
    header,
    list : [ { id, title, credit : [기초, 일반, 균형, 계열] } ]
  }
  */

  // 1전공
  const firstMajorList = [];

  // 2전공
  const secondMajorList = [];

  useEffect(() => {
    const output = groupByStartYear.list[groupID][majorID].credit;
    console.log(`TEST_LOG : ${output}`);
  });
  return (
    <>
      <div className="calc-box-wrapper">
        <div className="list-box-wrapper">
          <GroupListBox
            header={startYearMenu.header}
            list={startYearMenu.list}
            onChange={handleOnChangeSetGroupID}
          />
          <GroupListBox
            header={groupByStartYear.header}
            list={groupByStartYear.list[groupID]}
            onChange={handleOnChangeSetMajorID}
          />
        </div>
        <div className="calc-box-container-std1">
          <ViewHeader headerList={headerList} />
          <div className="header">졸업기준</div>
          {groupByStartYear.list[groupID][majorID].credit.map((credit) => (
            <div>{credit}</div>
          ))}
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
        <option value={null}>선택</option>
        {list.map((e) => (
          <option value={e.id}>{e.title}</option>
        ))}
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

export default CalcBox;
