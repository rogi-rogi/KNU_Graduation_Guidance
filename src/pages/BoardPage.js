import { useState } from "react";
import "./Page.scss";
import "../components/board/board.scss";
import WritePage from "../components/board/WritePage";
import ReadPage from "../components/board/ReadPage";
import BoardListPage from "../components/board/BordListPage";

const BoardPage = () => {
  const [current, setCurrent] = useState("board");
  const [selectTodo, setSelectTodo] = useState(null);

  const [todos, setTodos] = useState([]);

  const handleOnClickSelectTodo = (todo) => {
    setSelectTodo(todo);
    todo.show += 1;
    changePageForRead();
  };
  const changePageForBoardList = () => {
    setCurrent("board");
  };
  const changePageForWrite = () => {
    setCurrent("write");
  };
  const changePageForRead = () => {
    setCurrent("contents");
  };
  return (
    <div className="page" >
      <div className="page-content-wrapper">
        <div className="page-content">
          {current === "board" && (
            <BoardListPage
              todos={todos}
              changePageForWrite={changePageForWrite}
              handleOnClickSelectTodo={handleOnClickSelectTodo}
            />
          )}
          {current === "write" && (
            <WritePage
              changePageForBoardList={changePageForBoardList}
              setTodos={setTodos}
              todos={todos}
            />
          )}
          {current === "contents" && (
            <ReadPage
              setTodos={setTodos}
              todos={todos}
              changePageForBoardList={changePageForBoardList}
              selectTodo={selectTodo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
