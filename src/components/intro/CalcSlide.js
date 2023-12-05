const CalcSlide = ({ isVisible, wrapperRef, onClick }) => {
  return (
    <div className="intro-calc-wrapper" ref={wrapperRef}>
      <div className="slide">
        <div
          className={`title ${isVisible[0] ? "visible" : ""}`}
          onClick={onClick}
        >
          <h1>🔢 학점 계산기</h1>
          <div className="content">
            더 이상 엑셀로 학점계산은 그만! 이제는 모든 학번, 학부생 누구나
            사용할 수 있는 학점 계산기
          </div>
        </div>
        <div className={`image ${isVisible[0] ? "visible" : ""}`} />
      </div>
    </div>
  );
};
export default CalcSlide;
