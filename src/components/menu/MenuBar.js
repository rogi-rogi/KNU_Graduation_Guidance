import { useEffect, useState, useRef } from "react";
import "./MenuBar.scss";
import MenuBtn from "./MenuBtn";

const MenuBar = () => {
  const titles = ["소개", "학점계산", "개발과정"];
  const [mouseOver, setMouseOver] = useState(false);
  const initStyle = { left: "20px", width: "0px", opacity: 0 };
  const [selectEffect, setSelectEffect] = useState(initStyle);
  const [behindEffect, setBehindEffect] = useState(initStyle);
  const [scrollHeight, setScrollHeight] = useState(0);
  useEffect(() => {
    //
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
      // resize에 따른 effect 위치 조정 필요
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  const handleMenuBtnOnClick = (e) => {
    const target = e.target.getBoundingClientRect();
    setSelectEffect({ left: target.left, width: target.width, opacity: 1 });
  };
  const handleMenuBtnOver = (e) => {
    const target = e.target.getBoundingClientRect();
    if (!mouseOver) setMouseOver(true);
    setBehindEffect({ left: target.left, width: target.width, opacity: 1 });
  };
  const handleMenuBtnLeave = () => {
    if (mouseOver) {
      setMouseOver(false);
    }
    setBehindEffect({ ...selectEffect, opacity: 0 });
  };

  const bntHandler = {
    onClick: handleMenuBtnOnClick,
    onMouseOver: handleMenuBtnOver,
    onMouseLeave: handleMenuBtnLeave,
  };
  const minTop = 10;
  const menuBarTop = Math.max(30 - scrollHeight, minTop);
  const scrollOpacity = Math.max(0.75, 1 - window.scrollY / 1200);
  return (
    <div
      className="main-menubar-wrapper"
      style={{ top: `${menuBarTop}px`, opacity: scrollOpacity }}
    >
      <div className="menu-btn-list">
        {titles.map((title, idx) => (
          <MenuBtn id={idx} title={title} handler={bntHandler} />
        ))}
        <div className="select-effect" style={{ ...selectEffect }}></div>
        <div className="behind-effect" style={{ ...behindEffect }}></div>
      </div>
    </div>
  );
};

export default MenuBar;
