import { useState } from "react";

const WritePage = ({ setCurrent, setTodos, changePageForBoardList }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const handleOnClickSetTodos = () => {
    setTodos((prev) => {
      const date = new Date();
      const dateForm = `${date.getHours()}:${date.getMinutes()}`;

      changePageForBoardList();
      return [
        { id: prev.length + 1, title, contents, date: dateForm ,show:0},
        ...prev,
      ];
    });
  };

  return (
    <div className="write-wrapper">
      <div className="write-input-wrapper">
        <div style={{width:"5%"}}>
          제목
        </div>
        <input
        style={{width:"95%"}}
          type="text"
          onChange={(evt) => setTitle(evt.target.value)}
          value={title}
        />
      </div>
      <div className="write-input-wrapper">
        <div style={{width:"5%"}}>
          내용
        </div>
        <textarea
          style={{ width: "95%", height: "300px" }}
          type="text"
          onChange={(evt) => setContents(evt.target.value)}
          value={contents}
        />
      </div>
      <div className="write-button-wrapper">
        <button
          onClick={() => {
            if (title === "") alert("제목이 입력되지 않았습니다.");
            else if (contents === "") alert("내용이 입력되지 않았습니다.");
            else handleOnClickSetTodos();
          }}
        >
          작성완료
        </button>
        <button onClick={changePageForBoardList}>뒤로가기</button>
      </div>
    </div>
  );
};
export default WritePage;
