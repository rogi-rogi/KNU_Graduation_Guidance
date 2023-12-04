import React, { useState } from "react";

const Board = () => {
  const [current, setCurrent] = useState('board');
  const [contents, setContents] = useState('');
  const [todos, setTodos] = useState([{id :1,  title : ''}]);

  return (
    <div className="page" style={{ paddingTop: 120 }}>
      <div className="page-content-wrapper">
        <div className="page-content">
          <div>
            {current === 'board' && (
              <Page1
                setCurrent={setCurrent}
                todos = {todos}
              />
            )}
            {current === 'write' && (
              <Page2 
                setCurrent={setCurrent}
                setContents={setContents} 
                contents={contents} 
                setTodos={setTodos}
                todos = {todos}
              />
            )}
            {current ==='contents' && (
            <ReadPage
              todos = {todos}
              setCurrent={setCurrent}
            />
          )}
          </div>
        </div>
      </div>
    </div>
  );
};
//게시판
const Page1 = ({ setCurrent, todos }) => (
  <div>
    <div onClick={() => setCurrent('contents')}> 
      {todos.map((todo) => (
        todo.title !== '' && <div>제목: {todo.title} </div>))}
    </div>
    <button onClick={() => setCurrent('write')}>글쓰기</button>
  </div>
);
//글쓰기
const Page2 = ({ setCurrent, setContents, contents, setTodos, todos }) => 
{
  const [title, setTitle] = useState('');
  return (
    <div>
      <div>
        제목 
        <input type="text" onChange={(evt) => setTitle(evt.target.value)} value={title} />
      </div>
      <div>
        내용
        <input type="text" onChange={(evt) => setContents(evt.target.value)} value={contents} />
      </div>
      <button onClick={() => {
        setTodos([...todos, {id: todos.length + 1, title, contents}]);
        setCurrent('board');
      }}>돌아가기</button>
    </div>
  );
}
const ReadPage = ({todos, setCurrent}) => (
  <div>
    <button onClick={() => setCurrent('board')}>돌아가기</button>
  </div>
)
export default Board;