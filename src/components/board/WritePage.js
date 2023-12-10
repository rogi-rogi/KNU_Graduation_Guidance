import { useState } from "react";
import axios from "axios";

const WritePage = ({ changePageForBoardList, server, setServer, serverShare, setServerShare }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // const [shareData, setShareData] = useState(false);
  const handleOnClickSetTodos = async () => {
    try{
      const date = new Date();
      const dateForm = `${date.getHours()}:${date.getMinutes()}`;

      await axios.post("http://localhost:3001/board", {
        id: server.length +1,
        title,
        contents,
        date: dateForm,
        show:0,
      });

      setServer((prev)=>[
        {id: prev.length +1, title, contents, date: dateForm, show:0},
        ...prev,
      ]);

      changePageForBoardList();
    } catch(error){
      console.error("서버에 데이터를 추가하는 중 오류 발생", error);
    }
  };
  // const resetShare = async () => {
  //   try {
  //     const emptyShareData = {
  //       "0": [],
  //       "1": [],
  //       "2": [],
  //       "3": [],
  //       "4": [],
  //       "5": [],
  //       "6": [],
  //       "7": [],
  //     };

  //     // JSON 파일에 빈 데이터 쓰기
  //     await axios.post("http://localhost:3001/share", emptyShareData);

  //     changePageForBoardList();
  //   } catch (error) {
  //     console.error("서버에서 데이터를 삭제하는 중 오류 발생:", error);
  //   }
  // };


  return(
    <div className="write-wrapper">
      <div className="write-input-wrapper">
        <div style={{width:"5%"}}>제목</div>
        <input
        style={{width:"95%"}}
          type="text"
          onChange={(evt) => setTitle(evt.target.value)}
          value={title}
        />
      </div>
      <div className="write-input-wrapper">
        <div style={{width:"5%"}}>내용</div>
        <textarea
          style={{ width: "95%", height: "300px" }}
          type="text"
          onChange={(evt) => setContents(evt.target.value)}
          value={contents}
        />
      </div>
      <div className="write-button-wrapper">
        <button onClick={()=>{
          if(title ==="") alert("제목이 입력되지 않았습니다.");
          else if(contents ==="") alert("내용이 입력되지 않았습니다.");
          else {
            handleOnClickSetTodos();
          };
        }}>작성완료</button>
        <button onClick={changePageForBoardList}>뒤로가기</button>
      </div>
      <div className="wirte-share-wrapper" style={{ paddingTop: '20px' }}>
      {/* <button onClick={() => setShareData(true)}>공유하기</button>
        {shareData === true && (
          <div>
            {Array.from({ length: 8 }).map((_, index) => {
              const todo = serverShare[0][index];
              return (
                todo && (
                  <div className="list-wrapper" key={index}>
                    <div>{todo.title}</div>
                    <div>{todo.credit}</div>
                    <div >{todo.type}</div>
                  </div>
                )
              );
            })}
          </div>
        )} */}
      </div>
    </div>
  );

  
};
export default WritePage;
