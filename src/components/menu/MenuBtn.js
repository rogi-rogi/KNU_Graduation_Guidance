import "./MenuBar.scss";

const MenuBtn = ({ id, title, handler }) => {
  return (
    <div>
      <button
        className="menu-btn"
        onClick={(e) => handler.onClick(e.target, id)}
        onMouseOver={(e) => handler.onMouseOver(e.target)}
        onMouseLeave={handler.onMouseLeave}
      >
        {title}
      </button>
    </div>
  );
};

export default MenuBtn;
