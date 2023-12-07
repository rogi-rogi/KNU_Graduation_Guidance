const GroupList = ({
  header,
  list,
  onChange,
  selected = "*",
  disabled = false,
}) => {
  return (
    <div className="list-box">
      <label>{header}</label>
      <select onChange={onChange} value={selected} disabled={disabled}>
        <option value="*">선택</option>
        {list &&
          list.map((e, idx) => (
            <option id={`${header}${idx}`} value={e.id}>
              {e.title}
            </option>
          ))}
      </select>
    </div>
  );
};

export default GroupList;
