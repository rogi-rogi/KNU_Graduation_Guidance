import { createContext } from "react";

const initState = [
  {
    id: "*",
    subject: [0, 0, 0, 0, 0],
    major: [0, 0],
    advanced: [0, 0],
    doubleIn: [0, 0],
    doubleOut: [0, 0],
    minor: [0, 0],
    sum: [0],
  },
  {
    id: "y1_u1_g1",
    subject: [13, 0, 12, 6, 26],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 36],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u1_g1",
    subject: [13, 0, 12, 6, 26],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 36],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
];

const INIT = initState.filter((credit) => credit.id === "*")[0];
const sum = (arr) => arr.reduce((prev, cur) => prev + cur);
const creditSum = (credit) => {
  return Number(
    Number(credit.subject[4]) +
      credit.major[0] +
      credit.major[1] +
      credit.addMajor[0] +
      credit.addMajor[1] +
      Number(credit.other)
  );
};
const convertCreditToObject = ({ selectCredit, majorType, other = [0] }) => ({
  subject: selectCredit.subject,
  major: selectCredit[majorType.major],
  addMajor:
    majorType.addMajor === "*" ? [0, 0] : selectCredit[majorType.addMajor],
  other,
  sum: selectCredit.sum,
});

const NewCreditContext = createContext({
  creditState: initState,
  creditDispatch: (state, action) => {
    switch (action.type) {
      case "GET_CREDIT":
        const findInfo = initState.filter((credit) => credit.id === state)[0];
        return findInfo ? findInfo : INIT;
      case "CREDIT_CONVERT_USER":
        return convertCreditToObject(state);
      case "INIT":
        return INIT;
      case "INIT_USER":
        return convertCreditToObject({
          selectCredit: INIT,
          other: [0],
          majorType: { major: "advanced", addMajor: "*" },
        });
      case "ARRAY_SUM":
        return sum(state);
      case "CREDIT_SUM":
        return creditSum(state);
      default:
        return INIT;
    }
  },
});

export default NewCreditContext;
