import { useState } from "react";
import MenuBar from "../components/menu/MenuBar";
import Intro from "./Intro";
import CalcGraduation from "./CalcGraduation";
import Board from "./Board";
import TestPage from "./TestPage";

const Home = () => {
  const titles = ["소개", "학점계산", "게시판", "Test"];
  const pages = [<Intro />, <CalcGraduation />, <Board />, <TestPage />];
  const pageList = titles.map((title, idx) => ({ title, page: pages[idx] }));

  const [pageNum, setPageNum] = useState(0);

  const handleChangePage = (id) => {
    setPageNum(id);
  };

  return (
    // <div className="page-home-wrapper">
    <div>
      <MenuBar
        titles={titles}
        pageNum={pageNum}
        handleChangePage={handleChangePage}
      />
      {pageList[pageNum].page}
    </div>
  );
};

export default Home;
