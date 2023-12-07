// IntroSlideWrapper.js

import CalcSlide from "./CalcSlide";
import BulletinSlide from "./BulletinSlide";
import { useEffect, useRef, useState } from "react";

const IntroSlideWrapper = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState([false, false]);
  const wrapperRef = useRef(null);
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPositions = [
      wrapperRef.current.offsetTop,
      wrapperRef.current.offsetTop + 1200,
    ];

    setIsVisible([
      scrollPosition > elementPositions[0] - 600,
      scrollPosition > elementPositions[1] + 200,
    ]);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="slide-wrapper">
      <div className="header">저희가 만든 기능을 소개합니다.</div>
      <CalcSlide
        isVisible={isVisible}
        wrapperRef={wrapperRef}
        onClick={() => onClick(1)}
      />
      <div className="bulletin-wrapper">
        <div className="header">게시판을 통해 고민을 해결해봐요.</div>
        <BulletinSlide
          isVisible={isVisible}
          wrapperRef={wrapperRef}
          onClick={() => onClick(2)}
        />
      </div>
    </div>
  );
};

export default IntroSlideWrapper;
