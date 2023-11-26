import { createContext } from "react";
const groupList = {
  year: {
    header: "Step 01 : 입학연도",
    list: {
      "*": [
        { id: "y1", title: "~2012" },
        { id: "y2", title: "2013 ~ 2016" },
        { id: "y3", title: "2017 ~ 2020" },
        { id: "y4", title: "2021 ~" },
      ],
    },
  },
  group: {
    header: "Step 02 : 학부",
    list: {
      // ~2012
      y1: [
        { id: "y1_g1", title: "복지융합대학" },
        { id: "y1_g2", title: "경영관리대학" },
        { id: "y1_g3", title: "글로벌인재대학" },
        { id: "y1_g4", title: "공과대학" },
        { id: "y1_g5", title: "통합학부(과)" },
      ],
      y2: [
        // 2013~2016
        { id: "y2_g1", title: "복지융합대학" },
        { id: "y2_g2", title: "경영관리대학" },
        { id: "y2_g3", title: "글로벌인재대학" },
        { id: "y2_g4", title: "공과대학" },
        { id: "y2_g5", title: "통합학부(과)" },
      ],
      // 2017~2020
      y3: [],
      // 2021~
      y4: [],
    },
  },
  major: {
    header: "Step 03 : 학과(전공)",
    list: {
      // ~2012 복지융합대학
      y1_g1: [
        { id: "y1_g1_m1", title: "복지융합대학 학과명1" },
        { id: "y1_g1_m2", title: "복지융합대학 학과명2" },
        { id: "y1_g1_m3", title: "복지융합대학 학과명3" },
      ],
      // ~2012 경영관리대학
      y1_g2: [
        { id: "y1_g2_m1", title: "경영관리대학 학과명1" },
        { id: "y1_g2_m2", title: "경영관리대학 학과명2" },
        { id: "y1_g2_m3", title: "경영관리대학 학과명3" },
      ],
      // ~2012 글로벌인재대학
      y1_g3: [],
      // ~2012 공과대학
      y1_g4: [],
      // ~2012 통합학부(과)
      y1_g5: [],
      // 2013~2016 복지융합대학
      y2_g1: [
        { id: "y2_g1_m1", title: "복지융합대학 학과명1" },
        { id: "y2_g1_m2", title: "복지융합대학 학과명2" },
        { id: "y2_g1_m3", title: "복지융합대학 학과명3" },
      ],
      // 2013~2016 경영관리대학
      y2_g2: [
        { id: "y2_g2_m1", title: "경영관리대학 학과명1" },
        { id: "y2_g2_m2", title: "경영관리대학 학과명1" },
        { id: "y2_g2_m3", title: "경영관리대학 학과명1" },
      ],
      // 2017~2020
      y3_g1: [],
      y3_g2: [],
      // 2021~
    },
  },
};
const initGroup = groupList;

const GroupContext = createContext({
  groupState: initGroup,
});

export default GroupContext;
