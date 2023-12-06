const ReadPage = ({ setTodos, todos, changePageForBoardList, selectTodo }) => {
  const DeleteTodo = () => {
    const updatedTodos = todos.filter((todo) => todo.id !== selectTodo.id);
    setTodos(updatedTodos);
  };
  console.log(todos);
  console.log(selectTodo);
  return (
    <div className="read-wrapper">
      <div className="read-title-wrapper">
        <div>제목:{selectTodo.title}</div>
        <div>작성시간:{selectTodo.date}</div>
      </div>
      <div className="read-contents-wrapper">
        {selectTodo.contents}
      </div>
      <div className="read-button-wrapper">
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
    </div>
  );
};

export default ReadPage;
