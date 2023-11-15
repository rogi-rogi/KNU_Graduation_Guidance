import "./Home.scss";
import MenuBar from "../components/menu/MenuBar";
// import Context from "../context";
import Intro from "./Intro";
import CalcGraduation from "./CalcGraduation";
import { useState } from "react";
import Development from "./Development";
import TestPage from "./TestPage";

const Home = () => {
  const titles = ["소개", "학점계산", "개발과정", "Teeeeeeeeeeeeeeeeest"];
  const [page, setPage] = useState(0);
  const handleChangePage = (id) => {
    setPage(id);
  };
  return (
    <div className="page-home-wrapper">
      <MenuBar titles={titles} handleChangePage={handleChangePage} />
      {page === 0 && <Intro />}
      {page === 1 && <CalcGraduation />}
      {page === 2 && <Development />}
      {page === 3 && <TestPage />}
    </div>
  );
};

export default Home;
