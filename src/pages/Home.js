import "./Page.scss";
import "../global.scss";
import { useState } from "react";
import MenuBar from "../components/menu-bar/MenuBar.js";
import IntroPage from "./IntroPage.js";
import CalcPage from "./CalcPage.js";
import BoardPage from "./BoardPage.js";
import TestPage from "./TestPage.js";

const Home = () => {
  const titles = ["소개", "학점계산", "게시판"];
  const [pageNum, setPageNum] = useState(0);

  const [pocketSubjectList, setPocketSubjectList] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);
  const handleChangePage = (id) => {
    setPageNum(id);
  };
  const pages = [
    <IntroPage onClick={handleChangePage} />,
    <CalcPage
      onClick={handleChangePage}
      pocketSubjectList={pocketSubjectList}
      setPocketSubjectList={setPocketSubjectList}
    />,
    <BoardPage />,
    <TestPage />,
  ];
  const pageList = titles.map((title, idx) => ({ title, page: pages[idx] }));

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
