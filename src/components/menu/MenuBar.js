import React, { useEffect, useState } from "react";
import "./MenuBar.scss";
import MenuBtn from "./MenuBtn";

const MenuBar = ({ titles, handleChangePage }) => {
  const [selectEffect, setSelectEffect] = useState({
    target: null,
    left: "20px",
    width: "0px",
    opacity: 0,
  });

  const [behindEffect, setBehindEffect] = useState({
    target: null,
    left: "20px",
    width: "0px",
    opacity: 0,
  });

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleMenuBtnOnClick = (target, id) => {
    const { left, width } = target.getBoundingClientRect();
    setSelectEffect({ target: target, left, width, opacity: 1 });
    handleChangePage(id);
  };

  const handleMenuBtnOver = (target) => {
    const { left, width } = target.getBoundingClientRect();
    setBehindEffect({ target, left, width, opacity: 1 });
  };

  const handleMenuBtnLeave = () => {
    setBehindEffect((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  const handleResize = () => {
    if (selectEffect.target) {
      const updatedLeft = selectEffect.target.getBoundingClientRect().left;
      setSelectEffect((prev) => ({ ...prev, left: `${updatedLeft}px` }));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectEffect.target]);

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
          <MenuBtn
            key={idx}
            id={idx}
            title={title}
            handler={{
              onClick: handleMenuBtnOnClick,
              onMouseOver: handleMenuBtnOver,
              onMouseLeave: handleMenuBtnLeave,
            }}
          />
        ))}
        <div className="select-effect" style={selectEffect}></div>
        <div className="behind-effect" style={behindEffect}></div>
      </div>
    </div>
  );
};

export default MenuBar;
