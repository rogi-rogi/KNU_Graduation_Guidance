import { useEffect, useState } from "react";

const IntroHeader = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const load = () => {
      setTimeout(() => setLoad(true), 1500);
    };
    load();
    return () => load();
  }, []);
  return (
    <div className="intro-header">
      <div className="header-wrapper">
        <h1 style={{ opacity: load ? 1 : 0 }}>
          {"너의 시간,    내가 아껴줄게"}
        </h1>
        <h1 style={{ opacity: load ? 1 : 0 }}>{"교학팀 업무 뺏기 프로젝트"}</h1>
      </div>
    </div>
  );
};
export default IntroHeader;
