import { useEffect, useState } from "react";
import "./global.scss";
import Home from "./pages/Home";
import LoadPage from "./components/intro/LoadPage";

const App = () => {
  const [isLoad, setIsLoad] = useState(true);
  const LOAD_MIN_SEC = 1200;

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
      {isLoad && <LoadPage />}
      {!isLoad && <Home />}
    </div>
  );
};

export default App;
