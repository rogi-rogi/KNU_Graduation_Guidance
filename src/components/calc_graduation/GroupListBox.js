const GroupListBox = ({
  header,
  list,
  onChange,
  selected = "*",
  disabled = false,
}) => {
  // if (!list) console.log(`TEST : ${header} : fail load list`);
  return (
    <div className="list-box">
      <label>{header}</label>
      <select onChange={onChange} value={selected} disabled={disabled}>
        <option value="*">선택</option>
        {list && list.map((e) => <option value={e.id}>{e.title}</option>)}
      </select>
    </div>
  );
};

export default GroupListBox;
