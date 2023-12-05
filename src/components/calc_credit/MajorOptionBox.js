import { useContext } from "react";
import GroupListBox from "./GroupListBox";
import GroupContext from "../../contexts/GroupContext";

const MajorCalcOptionBox = ({ info, handle }) => {
  const { groupState } = useContext(GroupContext);
  return (
    <div className="option-box-wrapper">
      <div className="list-box-wrapper">
        <GroupListBox
          header={groupState["year"].header}
          list={groupState["year"].list["*"]}
          onChange={handle.handleOnChangeSelectYear}
          selected={info.selectYear}
        />

        <GroupListBox
          header={groupState["univer"].header}
          list={groupState["univer"].list[info.selectYear]}
          onChange={handle.handleOnChangeSelectUniver}
          selected={info.selectUniver}
        />
        <GroupListBox
          header={groupState["group"].header}
          list={groupState["group"].list[info.selectUniver]}
          onChange={handle.handleOnChangeSelectGroup}
          selected={info.selectGroup}
        />
        <GroupListBox
          header={groupState["major"].header}
          list={groupState["major"].list[info.selectGroup]}
          onChange={handle.handleOnChangeSelectMajor}
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
              onChange={handle.handleOnClickMajorType}
              defaultChecked={info.majorType.major === "advanced"}
            />
          </span>
          <span>
            <label for="*">전공추가</label>
            <input
              type="checkbox"
              value="*"
              onClick={handle.handleOnClickAddMajorView}
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
                onClick={handle.handleOnClickEnabledMinor}
                disabled={!info.enableAddMajor}
              />
            </span>
          </div>
          <div className="option-box-wrapper list-box-wrapper">
            <GroupListBox
              header={groupState["add_univer"].header}
              list={groupState["univer"].list[info.selectYear]}
              onChange={handle.handleOnChangeSelectAddUniver}
              selected={info.selectAddUniver}
              disabled={!info.enableAddMajor}
            />
            <GroupListBox
              header={groupState["add_group"].header}
              list={groupState["group"].list[info.selectAddUniver]}
              onChange={handle.handleOnChangeSelectAddGroup}
              selected={info.selectAddGroup}
              disabled={!info.enableAddMajor}
            />
            <GroupListBox
              header={groupState["add_major"].header}
              list={groupState["major"].list[info.selectAddGroup]}
              onChange={handle.handleOnChangeSelectAddMajor}
              selected={info.selectAddMajor}
              disabled={!info.enableAddMajor}
            />
          </div>
        </div>
      </div>
      <button className="apply-btn" onClick={handle.handleOnClickApplyBtn}>
        적용
      </button>
    </div>
  );
};
export default MajorCalcOptionBox;
