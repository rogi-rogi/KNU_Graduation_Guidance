import "./Home.scss";
import MenuBar from "../components/menu/MenuBar";

const Home = () => {
  return (
    <div className="page-home-wrapper">
      <MenuBar />
      <div
        id="MenuBarTest"
        style={{ width: "100vw", height: "200vh", backgroundColor: "gray" }}
      ></div>
    </div>
  );
};

export default Home;
