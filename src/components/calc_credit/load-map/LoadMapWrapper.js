import CalcGraph from "./CalcGraph";
import LoadMapOptionBar from "./LoadMapOptionBar";

const LoadMapWrapper = ({
  majorInfo,
  creditGraph,
  handlePocketInit,
  handlePocketSubjectList,
}) => {
  return (
    <>
      <CalcGraph list={creditGraph} />
      <LoadMapOptionBar
        majorInfo={majorInfo}
        label={creditGraph}
        handlePocketSubjectList={handlePocketSubjectList}
        handlePocketInit={handlePocketInit}
      />
      <LoadMapTable />
    </>
  );
};

const LoadMapTable = () => {
  return <></>;
};
export default LoadMapWrapper;
