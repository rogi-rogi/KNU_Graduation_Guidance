import { useState } from "react";
import WritePage from "../components/board/WritePage";
import ReadPage from "../components/board/ReadPage";
import BoardListPage from "../components/board/BordListPage";

const Board = () => {
  const [current, setCurrent] = useState("board");
  const [selectTodo, setSelectTodo] = useState(null);

  const [todos, setTodos] = useState([]);

  const handleOnClickSelectTodo = (todo) => {
    setSelectTodo(todo);
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
    <div className="page" style={{ paddingTop: 120 }}>
      <div className="page-content-wrapper">
        <div className="page-content">
          <div>
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
    </div>
  );
};

export default Board;
