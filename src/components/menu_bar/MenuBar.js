import React, { useEffect, useRef, useState } from "react";
import "./MenuBar.scss";
import MenuBtn from "./MenuBtn.js";

const MenuBar = ({ titles, pageNum, handleChangePage }) => {
  const [selectEffect, setSelectEffect] = useState({});
  const [behindEffect, setBehindEffect] = useState({});
  const [scrollHeight, setScrollHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const pageRef = useRef([]);

  const handleMenuBtnOnClick = (id) => {
    const { left, width } = pageRef.current[id].getBoundingClientRect();
    setSelectEffect({ left, width, opacity: 1 });
    handleChangePage(id);
  };

  const handleMenuBtnOver = (id) => {
    const { left, width } = pageRef.current[id].getBoundingClientRect();
    setBehindEffect({ left, width, opacity: 1 });
  };

  const handleMenuBtnLeave = () => {
    setBehindEffect((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleScroll = () => setScrollHeight(window.scrollY);
  const handleResizeWindow = () => setWindowWidth(window.innerWidth);
  const handleRePosition = () => {
    const { left, width } = pageRef.current[pageNum].getBoundingClientRect();
    setSelectEffect({ left, width });
  };

  const minTop = 10;
  let menuBarTopPadding = Math.max(30 - scrollHeight / 5, minTop);
  let scrollOpacity = Math.max(0.75, 1 - scrollHeight / 1200);
  let menuBarColor;
  if (pageNum === 0 && scrollHeight >= 800)
    menuBarColor = "rgba(198, 225, 255, 0.7)";
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResizeWindow);
    handleMenuBtnOnClick(pageNum);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    handleRePosition();
  }, [windowWidth, pageNum]);
  return (
    <div
      className="main-menubar-wrapper"
      style={{
        paddingTop: `${menuBarTopPadding}px`,
        opacity: scrollOpacity,
        backgroundColor: menuBarColor,
      }}
    >
      <div>
        <h1>KNU Graduation Guidance</h1>
      </div>
      <div className="menu-btn-list">
        {titles.map((title, idx) => (
          <div ref={(e) => (pageRef.current[idx] = e)}>
            <MenuBtn
              id={idx}
              title={title}
              handler={{
                onClick: handleMenuBtnOnClick,
                onMouseOver: handleMenuBtnOver,
                onMouseLeave: handleMenuBtnLeave,
              }}
            />
          </div>
        ))}
        <div className="select-effect" style={selectEffect}></div>
        <div className="behind-effect" style={behindEffect}></div>
      </div>
    </div>
  );
};
export default MenuBar;
