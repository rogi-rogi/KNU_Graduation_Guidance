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
    <div
      className="page-content-header"
      style={{
        backgroundImage: `url("/assets/images/KNU_MAIN.jpg")`,
      }}
    >
      <div className="header-title">
        <h1 style={{ opacity: load ? 1 : 0 }}>pz write intro header</h1>
        <h1 style={{ opacity: load ? 1 : 0 }}>pz write sub intro header</h1>
      </div>
    </div>
  );
};
export default IntroHeader;
