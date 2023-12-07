import { useContext } from "react";
import GroupContext from "../../../contexts/GroupContext";
import GroupList from "./GroupList";

const CalcFilter = ({ info, handle }) => {
  const { groupState } = useContext(GroupContext);
  return (
    <div className="option-box-wrapper">
      <div className="list-box-wrapper">
        <GroupList
          header={groupState["year"].header}
          list={groupState["year"].list["*"]}
          onChange={handle.filterSelectYear}
          selected={info.selectYear}
        />

        <GroupList
          header={groupState["univer"].header}
          list={groupState["univer"].list[info.selectYear]}
          onChange={handle.filterSelectUniver}
          selected={info.selectUniver}
        />
        <GroupList
          header={groupState["group"].header}
          list={groupState["group"].list[info.selectUniver]}
          onChange={handle.filterSelectGroup}
          selected={info.selectGroup}
        />
        <GroupList
          header={groupState["major"].header}
          list={groupState["major"].list[info.selectGroup]}
          onChange={handle.filterSelectMajor}
          selected={info.selectMajor}
        />
      </div>
      <div className="add-major-box-wrapeer">
        <div className="add-major-option">
          <span>
            <label for="advanced">심화과정(1전공)</label>
            <input
              type="checkbox"
              value="advanced"
              onChange={handle.filterMajorType}
              defaultChecked={info.majorType.major === "advanced"}
            />
          </span>
          <span>
            <label for="*">전공추가</label>
            <input
              type="checkbox"
              value="*"
              onClick={handle.filterAddMajorView}
            />
          </span>
        </div>
        <div className="add-major-list-wrapper">
          <div className="major-type-box">
            <span>
              <label for="minor">부전공</label>
              <input
                type="checkbox"
                value="minor"
                onClick={handle.filterEnabledMinor}
                disabled={!info.enableAddMajor}
              />
            </span>
          </div>
          <div className="option-box-wrapper list-box-wrapper">
            <GroupList
              header={groupState["add_univer"].header}
              list={groupState["univer"].list[info.selectYear]}
              onChange={handle.filterSelectAddUniver}
              selected={info.selectAddUniver}
              disabled={!info.enableAddMajor}
            />
            <GroupList
              header={groupState["add_group"].header}
              list={groupState["group"].list[info.selectAddUniver]}
              onChange={handle.filterSelectAddGroup}
              selected={info.selectAddGroup}
              disabled={!info.enableAddMajor}
            />
            <GroupList
              header={groupState["add_major"].header}
              list={groupState["major"].list[info.selectAddGroup]}
              onChange={handle.filterSelectAddMajor}
              selected={info.selectAddMajor}
              disabled={!info.enableAddMajor}
            />
          </div>
        </div>
      </div>
      <button className="apply-btn" onClick={handle.filterApplyBtn}>
        적용
      </button>
    </div>
  );
};
export default CalcFilter;
