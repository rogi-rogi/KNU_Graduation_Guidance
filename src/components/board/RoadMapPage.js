import axios from "axios";

const RoadMapPage = ({ serverShare, changePageForBoardList, setServerShare }) => {
    const resetServer = async () => {
        try {
          await axios.delete('http://localhost:3001/share');
      
        } catch (error) {
          console.error('서버에 데이터를 삭제하는 중 오류 발생', error);
        }
        changePageForBoardList();
      };
  return (
    <div className="board-wrapper">
        <div>
          {Object.keys(serverShare).map((category, index) => (
            <div key={index}>
                <p>{parseInt(category) + 1}학기</p>
              {serverShare[category].map((todo, todoIndex) => (
                <div style={{display:"flex"}} key={todoIndex}>
                  <div style={{ width: '30%' }}>{todo.title}</div>
                  <div style={{ width: '30%' }}>{todo.credit}</div>
                  <div style={{ width: '30%' }}>{todo.type}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button onClick={resetServer}>돌아가기</button>
    </div>
  );
};

export default RoadMapPage;
