const ReadPage = ({ setTodos, todos, changePageForBoardList, selectTodo }) => {
  const DeleteTodo = () => {
    const updatedTodos = todos.filter((todo) => todo.id !== selectTodo.id);
    setTodos(updatedTodos);
  };
  console.log(todos);
  console.log(selectTodo);
  return (
    <div style={{ textAlign: "left", marginLeft: "20px" }}>
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>제목:{selectTodo.title}</div>
        <div>작성시간:{selectTodo.date}</div>
      </div>
      <div style={{ width: "60%", height: "100%", marginTop: "20px" }}>
        {selectTodo.contents}
      </div>
      <button
        onClick={() => {
          DeleteTodo();
          changePageForBoardList();
        }}
      >
        삭제하기
      </button>
      <button onClick={changePageForBoardList}>돌아가기</button>
    </div>
  );
};

export default ReadPage;
