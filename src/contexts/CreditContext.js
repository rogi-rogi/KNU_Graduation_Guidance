import { createContext } from "react";

const initState = [
  [
    "INIT",
    ["", "", "", "", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    "",
  ],
  [
    "y1_g1_m1",
    [0, 13, 0, 0, 13],
    [0, 51],
    [0, 0],
    [0, 36],
    [0, 42],
    [0, 21],
    140,
  ],
  [
    "y1_g2_m1",
    [0, 13, 0, 0, 13],
    [0, 51],
    [0, 0],
    [0, 36],
    [0, 42],
    [0, 21],
    140,
  ],
  [
    "y1_g3_m1",
    [0, 13, 0, 0, 13],
    [0, 51],
    [0, 0],
    [0, 36],
    [0, 42],
    [0, 21],
    140,
  ],
  [
    "y1_g4_m1",
    [0, 19, 0, 0, 19],
    [0, 51],
    [0, 0],
    [0, 36],
    [0, 42],
    [0, 21],
    140,
  ],
  [
    "y1_g5_m1",
    [0, 13, 0, 0, 13],
    [0, 60],
    [0, 0],
    [0, 36],
    [0, 42],
    [0, 21],
    140,
  ],
].map((credit) => {
  const [id, subject, major, advanced, doubleIn, doubleOut, minor, sum] =
    credit;
  return { id, subject, major, advanced, doubleIn, doubleOut, minor, sum };
});

const INIT = initState.filter((credit) => credit.id === "INIT")[0];
const CreditContext = createContext({
  creditState: initState,
  creditDispatch: (targetID, action) => {
    switch (action.type) {
      case "GET_CREDIT":
        const findInfo = initState.filter(
          (credit) => credit.id === targetID
        )[0];
        return findInfo ? findInfo : INIT;
      case "INIT":
        return INIT;
      default:
        return INIT;
    }
  },
});

export default CreditContext;
