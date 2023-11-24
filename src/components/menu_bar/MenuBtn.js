import "./MenuBar.scss";

const MenuBtn = ({ id, title, handler }) => {
  return (
    <div className="effect-path" onMouseLeave={handler.onMouseLeave}>
      <button
        className="menu-btn"
        onClick={() => handler.onClick(id)}
        onMouseOver={() => handler.onMouseOver(id)}
      >
        {title}
      </button>
    </div>
  );
};

export default MenuBtn;
