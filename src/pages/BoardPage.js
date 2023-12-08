import { useEffect, useState } from "react";
import "./Page.scss";
import "../components/board/board.scss";
import WritePage from "../components/board/WritePage";
import ReadPage from "../components/board/ReadPage";
import BoardListPage from "../components/board/BordListPage";
import axios from "axios";

const BoardPage = () => {
  const [page, setPage] = useState("board");
  const [selectTodo, setSelectTodo] = useState(null);
  const [server, setServer] = useState([]);
  useEffect(() => {
    const readServer = async () => {
      const res = await axios.get("http://localhost:3001/board");
      setServer(res.data);
    };
    readServer();
  }, []);
  const handleOnClickSelectTodo = async (todo) => {
    try {
      await axios.put(`http://localhost:3001/board/${todo.id}`, {
        id: todo.id,
        title: todo.title,
        contents: todo.contents,
        date: todo.date,
        show: todo.show + 1,
      });
      setSelectTodo(todo);
      changePageForRead();
    } catch (error) {
      console.error("서버에 데이터를 업데이트 하는 중 오류 발생");
    }
  };
  const changePageForBoardList = () => {
    setPage("board");
  };
  const changePageForWrite = () => {
    setPage("write");
  };
  const changePageForRead = () => {
    setPage("contents");
  };
  return (
    <div className="page">
      <div className="page-content-wrapper">
        <div className="page-content">
          {page === "board" && (
            <BoardListPage
              server={server}
              changePageForWrite={changePageForWrite}
              handleOnClickSelectTodo={handleOnClickSelectTodo}
            />
          )}
          {page === "write" && (
            <WritePage
              changePageForBoardList={changePageForBoardList}
              server={server}
              setServer={setServer}
            />
          )}
          {page === "contents" && (
            <ReadPage
              server={server}
              setServer={setServer}
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

// json-server --host localhost --port 3001 ./database.json
