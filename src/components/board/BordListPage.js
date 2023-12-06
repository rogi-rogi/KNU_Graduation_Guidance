const BoardListPage = ({
  changePageForWrite,
  todos,
  handleOnClickSelectTodo,
}) => {
  return (
    <div className="board-list-wrapper">
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => handleOnClickSelectTodo(todo)}>
          {todo.id} {todo.title} {todo.date} {todo.show}
        </div>
      ))}
      <button onClick={changePageForWrite}>글쓰기</button>
    </div>
  );
};

export default BoardListPage;
