const BoardListPage = ({
  changePageForWrite,
  todos,
  handleOnClickSelectTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => handleOnClickSelectTodo(todo)}>
          {todo.title} {todo.date}
        </div>
      ))}
      <button onClick={changePageForWrite}>글쓰기</button>
    </div>
  );
};

export default BoardListPage;
