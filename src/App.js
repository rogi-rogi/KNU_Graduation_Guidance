import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import LoadPage from "./pages/LoadPage";

const App = () => {
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    const load = () =>
      setTimeout(() => {
        setIsLoad(false);
      }, 1000);
    load();
  }, []);

  return (
    <div className="App">
      <div>
        {isLoad && <LoadPage />}
        {!isLoad && <Home />}
      </div>
    </div>
  );
};

export default App;
