import React, { useState } from "react";

const Board = () => {
  const [current, setCurrent] = useState('board');
  const [todos, setTodos] = useState([{id :0 ,title:''}]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  return (
    <div className="page" style={{ paddingTop: 120 }}>
      <div className="page-content-wrapper">
        <div className="page-content">
          <div>
            {current === 'board' && (
              <BoardPage
                setCurrent={setCurrent}
                todos = {todos}
                setSelectedTodo={setSelectedTodo}
                selectedTodo = {selectedTodo}
              />
            )}
            {current === 'write' && (
              <WritePage 
                setCurrent={setCurrent} 
                setTodos={setTodos}
                todos = {todos}
              />
            )}
            {current ==='contents' && (
            <ReadPage
              setTodos={setTodos}
              todos = {todos}
              setCurrent={setCurrent}
              selectedTodo = {selectedTodo}
            />
          )}
          </div>
        </div>
      </div>
    </div>
  );
};
//게시판
const BoardPage = ({ setCurrent, todos, setSelectedTodo,selectedTodo }) => {
  const showDate = selectedTodo ?(selectedTodo.time.getHours()+"/"+selectedTodo.time.getMinutes()) : '';
    return(<div>
      {todos.map((todo) => (
        todo.title !== '' && (
          <div key={todo.id} onClick={() => {
            setSelectedTodo(todo);
            setCurrent('contents');
          }}>
            {todo.title} {showDate}
          </div>
        )
      ))}
      <button onClick={() => setCurrent('write')}>글쓰기</button>
    </div>
  )
};
//글쓰기
const WritePage = ({ setCurrent, setTodos, todos }) => 
{
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const time = new Date();
  return (
    <div>
      <div style={{textAlign:"left"}}>
        제목 
        <input style={{width:'500px'}} type="text" onChange={(evt) => setTitle(evt.target.value)} value={title} />
      </div>
      <div style={{textAlign:"left" }}>
        내용
        <textarea style={{width:'100%', height:'300px'}} type="text" onChange={(evt) => setContents(evt.target.value)} value={contents} />
      </div>
      <div style={{textAlign:"right"}}>
        <button
          onClick={() => {
            if(title == '')
              alert("제목이 입력되지 않았습니다.")
            else if(contents =='')
              alert("내용이 입력되지 않았습니다.")
            else
              setTodos([...todos, {id: todos.length + 1, 
              title, 
              contents, 
              time
            }]);
            setCurrent('board');
          }}>
          작성완료
        </button>
        <button onClick={()=> setCurrent('board')}>뒤로가기</button>
      </div>
    </div>
  );
}
//쓴 내용 보기
const ReadPage = ({setTodos, todos, setCurrent, selectedTodo}) => {
  const DeleteTodo = () =>{
    const updatedTodos = todos.filter(todo => todo.id !== selectedTodo.id);
    setTodos(updatedTodos);
  }  
  const todoHour = (selectedTodo.time.getHours() + ":" +selectedTodo.time.getMinutes());
  const todoDate = (selectedTodo.time.getMonth()+1+"/" +selectedTodo.time.getDate()) +"     " +todoHour;
  return(
  <div style={{textAlign:"left",marginLeft:'20px'}}>
    <div style={{width:'500px', display:'flex', justifyContent:"space-between"}}>
      <div>
        제목:{selectedTodo.title}
      </div>  
      <div>
        작성시간:{todoDate}
      </div> 
    </div>
    <div style={{width:'60%', height:'100%', marginTop:'20px'}}>
      {selectedTodo.contents}
    </div>
    <button onClick={() => {
      DeleteTodo()
      setCurrent('board')
    }}>
      삭제하기
    </button>
    <button onClick={() => setCurrent('board')}>돌아가기</button>
  </div>
)}
export default Board;