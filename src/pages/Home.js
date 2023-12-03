import "./Page.scss";
import { useState } from "react";

import MenuBar from "../components/menu_bar/MenuBar.js";
import Intro from "./Intro.js";
import CalcCredit from "./CalcCredit.js";
import Board from "./Board.js";
import TestPage from "./TestPage.js";

const Home = () => {
  const titles = ["소개", "학점계산", "게시판", "Test"];
  const pages = [<Intro />, <CalcCredit />, <Board />, <TestPage />];
  const pageList = titles.map((title, idx) => ({ title, page: pages[idx] }));

  const [pageNum, setPageNum] = useState(0);

  const handleChangePage = (id) => {
    setPageNum(id);
  };

  return (
    <div className="home-wrapper">
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
