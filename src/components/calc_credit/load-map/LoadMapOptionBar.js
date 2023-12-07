import { useContext, useState } from "react";
import SubjectContext from "../../../contexts/SubjectContext";

const LoadMapOptionBar = ({
  majorInfo,
  label,
  handlePocketInit,
  handlePocketSubjectList,
}) => {
  const { subjectState } = useContext(SubjectContext);
  const [viewSubjectList, setViewSubjectList] = useState([]);
  const [selectSemester, setSelectSemester] = useState(1);

  const handleOnClickSelectSemester = (e) => {
    const newSelectSemester = Number(e.target.id);
    setSelectSemester(newSelectSemester);
    if (subjectState[majorInfo.selectGroup]) {
      const arr = subjectState[majorInfo.selectGroup]
        .flat()
        .filter(
          (subject) =>
            subject.semester <= newSelectSemester &&
            (newSelectSemester % 2
              ? subject.semester % 2
              : !(subject.semester % 2))
        );
      setViewSubjectList(
        Array.from(new Set(arr.map((obj) => obj.title)), (title) =>
          arr.find((item) => item.title === title)
        )
      );
    }
  };
  return (
    <>
      <div className="option-bar-wrapper">
        <div className="filter-wrapper">
          {label.map((bar, idx) => (
            <button
              className="semester-btn"
              id={idx + 1}
              onClick={handleOnClickSelectSemester}
            >
              {bar.label}
            </button>
          ))}
          <button className="init-btn" onClick={handlePocketInit}>
            초기화
          </button>
        </div>
        <div className="choice-subject-wrapper">
          {viewSubjectList.map((subject) => (
            <div className="subject-wrapper">
              <button
                onClick={() => handlePocketSubjectList(subject, selectSemester)}
              >
                {subject.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoadMapOptionBar;
