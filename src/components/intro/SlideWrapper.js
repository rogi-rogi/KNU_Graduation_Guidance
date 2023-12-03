import CalcSlide from "./CalcSlide";
import { useEffect, useRef, useState } from "react";
const SlideWrapper = () => {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = wrapperRef.current.offsetTop;
    setIsVisible(scrollPosition > elementPosition + 200);
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
      <CalcSlide isVisible={isVisible} wrapperRef={wrapperRef} />
    </div>
  );
};
export default SlideWrapper;
