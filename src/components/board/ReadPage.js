import axios from "axios";

const ReadPage = ({ changePageForBoardList, selectTodo, server, setServer }) => {
  const deleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:3001/board/${selectTodo.id}`);

      const updatedTodos = server.filter((todo) => todo.id !== selectTodo.id);
      setServer(updatedTodos);

      changePageForBoardList();
    } catch (error) {
      console.error("서버에서 데이터를 삭제하는 중 오류 발생:", error);
    }
  };

  return (
    <div className="read-wrapper">
      <div className="read-title-wrapper">
        <div>제목:{selectTodo.title}</div>
        <div>작성시간:{selectTodo.date}</div>
      </div>
      <div className="read-contents-wrapper">{selectTodo.contents}</div>
      <div className="read-button-wrapper">
        <button onClick={deleteTodo}>삭제하기</button>
        <button onClick={changePageForBoardList}>돌아가기</button>
      </div>
    </div>
  );
};

export default ReadPage;
