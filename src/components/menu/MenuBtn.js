import "./MenuBtn.scss";

const MenuBtn = ({ title, handler }) => {
  return (
    <div style={{ zIndex: 3 }}>
      <button
        className="menu-btn"
        onClick={(e) => handler.onClick(e)}
        onMouseOver={(e) => handler.onMouseOver(e)}
        onMouseLeave={handler.onMouseLeave}
      >
        {title}
      </button>
    </div>
  );
};

export default MenuBtn;
