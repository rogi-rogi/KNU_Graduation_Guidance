import { useEffect, useRef, useState } from "react";
import IntroCalcSlide from "./IntroCalcSlide";

const IntroSlideWrapper = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState([false, false]);
  const wrapperRef = useRef(null);
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = wrapperRef.current.offsetTop;

    setIsVisible([
      scrollPosition > elementPosition + 400,
      scrollPosition > elementPosition + 700,
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
      <IntroCalcSlide
        isVisible={isVisible}
        wrapperRef={wrapperRef}
        onClick={() => onClick(1)}
      />
    </div>
  );
};

export default IntroSlideWrapper;
