import { useEffect, useState } from "react";
import CalcGraph from "./CalcGraph";

const LoadMapWrapper = ({ handleAppendClass }) => {
  const initCreditGraph = [
    { label: "1-1", credit: 0 },
    { label: "1-2", credit: 0 },
    { label: "2-1", credit: 0 },
    { label: "2-2", credit: 0 },
    { label: "3-1", credit: 0 },
    { label: "3-2", credit: 0 },
    { label: "4-1", credit: 0 },
    { label: "4-2", credit: 0 },
  ];
  const [creditGraph, setCreditGraph] = useState([...initCreditGraph]);
  const SendAppendCreditToGraph = (idx, diff) => {
    setCreditGraph((prev) => {
      const newCreditGraph = [...prev];
      if (newCreditGraph[idx].credit + diff <= 22)
        newCreditGraph[idx].credit += diff;
      return newCreditGraph;
    });
  };
  const handleOnClickCreditInit = () => {
    setCreditGraph([...initCreditGraph]);
  };
  useEffect(() => {
    handleAppendClass(creditGraph);
  }, [creditGraph]);
  return (
    <>
      <CalcGraph list={creditGraph} />
      <LoadMapOptionBar
        list={creditGraph}
        onClick={SendAppendCreditToGraph}
        handleOnClickCreditInit={handleOnClickCreditInit}
      />
      <LoadMapTable />
    </>
  );
};

const LoadMapOptionBar = ({ list, onClick, handleOnClickCreditInit }) => {
  return (
    <>
      <div className="option-bar-wrapper">
        {list.map((bar, idx) => (
          <button id={bar.label} onClick={() => onClick(idx, 3)}>
            {bar.label}
          </button>
        ))}
        <button onClick={handleOnClickCreditInit}>초기화</button>
      </div>
    </>
  );
};
const LoadMapTable = () => {
  return <></>;
};
export default LoadMapWrapper;
