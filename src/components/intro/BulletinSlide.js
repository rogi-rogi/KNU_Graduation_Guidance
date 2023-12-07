import React from "react";

const BulletinSlide = ({ isVisible, wrapperRef, onClick }) => {
  return (
    <div className="intro-bulletin-wrapper" ref={wrapperRef}>
      <div className="slide">
        <div
          className={`title ${isVisible[1] ? "visible" : ""}`}
          onClick={onClick}
        >
          <h1>📌 게시판</h1>
          <div className="content">
            환영합니다! 최신 소식과 공지를 확인하세요.
          </div>
        </div>
        <div className={`image ${isVisible[1] ? "visible" : ""}`} />
      </div>
      <div className="bulletin-intro">
        게시판을 통해 다양한 정보를 얻고 소통하세요!
      </div>
    </div>
  );
};

export default BulletinSlide;
