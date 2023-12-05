import { useEffect, useState } from "react";
import "./global.scss";
import LoadPage from "./pages/LoadPage";
import Home from "./pages/Home";

const App = () => {
  const [isLoad, setIsLoad] = useState(true);
  const LOAD_MIN_SEC = 1000;

  useEffect(() => {
    const load = () =>
      setTimeout(() => {
        setIsLoad(false);
      }, LOAD_MIN_SEC);
    load();
    return () => load();
  }, []);

  return (
    <div className="App">
      {/* {isLoad && <LoadPage />} */}
      <Home />
    </div>
  );
};

export default App;
