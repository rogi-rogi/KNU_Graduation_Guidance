import { createContext } from "react";

const header = ["구분", "교양", "1전공", "2전공", "기타", "합계"];
const subHeader = [
  "기초",
  "일반",
  "균형",
  "계열",
  "합계",
  "기초",
  "선택",
  "기초",
  "선택",
];
const groupList = {
  headerView: { header, subHeader },
  year: {
    header: "1. 입학연도", // 소속 학부 개편 연도
    list: {
      "*": [
        { id: "y1", title: "2017 ~ 2020" },
        { id: "y2", title: "2021 ~" },
      ],
    },
  },
  univer: {
    header: "2. 소속",
    list: {
      y1: [
        // 2017 ~ 2020
        { id: "y1_u1", title: "복지융합대학" },
        { id: "y1_u2", title: "경영관리대학" },
        { id: "y1_u3", title: "글로벌인재대학" },
        { id: "y1_u4", title: "ICT건설복지융합대학" },
        { id: "y1_u5", title: "사범대학" },
      ],
      y2: [
        // 2021 ~
        { id: "y2_u1", title: "복지융합대학" },
        { id: "y2_u2", title: "경영관리대학" },
        { id: "y2_u3", title: "글로벌인재대학" },
        { id: "y2_u4", title: "공과대학" },
        { id: "y2_u5", title: "사범대학" },
      ],
    },
  },
  group: {
    header: "3. 학부",
    list: {
      // 2017 ~ 2020
      y1_u1: [
        // 복지융합대학
        { id: "y1_u1_g1", title: "사회복지학부" },
        { id: "y1_u1_g2", title: "사회복지학부(야)" },
        { id: "y1_u1_g3", title: "실버산업학과" },
        { id: "y1_u1_g4", title: "복지융합인재학부" },
      ],
      y1_u2: [
        // 경영관리대학
        { id: "y1_u2_g1", title: "글로벌경영학부" },
        { id: "y1_u2_g2", title: "글로벌경영학부(야)" },
        { id: "y1_u2_g3", title: "경제세무학과" },
        { id: "y1_u2_g4", title: "공공인재학과" },
        // { id: "y1_u2_g5", title: "융합자유전공학부" },
      ],
      y1_u3: [
        // 글로벌인재대학
        { id: "y1_u3_g1", title: "기독교학과" },
        { id: "y1_u3_g2", title: "한영문화콘텐츠학과" },
        { id: "y1_u3_g3", title: "글로벌문화학부" },
        { id: "y1_u3_g4", title: "음악학과" },
      ],
      y1_u4: [
        // ICT건설복지융합대학
        { id: "y1_u4_g1", title: "소프트웨어응용학부" },
        { id: "y1_u4_g2", title: "IoT전자공학과" },
        { id: "y1_u4_g3", title: "산업데이터사이언스학부" },
        { id: "y1_u4_g4", title: "부동산건설학부" },
      ],
      y1_u5: [
        // 사범대학
        { id: "y1_u5_g1", title: "교육학과" },
        { id: "y1_u5_g2", title: "유아교육과" },
        { id: "y1_u5_g3", title: "초등특수교육과" },
        { id: "y1_u5_g4", title: "중등특수교육과" },
      ],
      // 2021 ~
      y2_u1: [
        // 복지융합대학
        { id: "y2_u1_g1", title: "사회복지학부" },
        { id: "y2_u1_g2", title: "실버산업학과" },
        { id: "y2_u1_g3", title: "예체능학부" },
      ],
      y2_u2: [
        // 경영관리대학
        { id: "y2_u2_g1", title: "글로벌경영학부" },
        { id: "y2_u2_g2", title: "정경학부" },
        // { id: "y2_u2_g3", title: "경영관리자율전공학부(야)" },
        // { id: "y2_u2_g4", title: "융합자율전공학부(2021)" },
      ],
      y2_u3: [
        // 글로벌인재대학
        { id: "y2_u3_g1", title: "글로벌문화학부" },
      ],
      y2_u4: [
        // 공과대학
        { id: "y2_u4_g1", title: "ICT융합공학부" },
        { id: "y2_u4_g2", title: "인공지능융합공학부" },
        { id: "y2_u4_g3", title: "부동산건설학부" },
      ],
      y2_u5: [
        // 사범대학
        { id: "y2_u5_g1", title: "교육학과" },
        { id: "y2_u5_g2", title: "유아교육과" },
        { id: "y2_u5_g3", title: "초등특수교육과" },
        { id: "y2_u5_g4", title: "중등특수교육과" },
      ],
    },
    major: {
      header: "4. 학과",
      list: {
        y1_u1_g1: [
          { id: "y1_u1_g1_m1", title: "사회사업학전공" },
          { id: "y1_u1_g1_m2", title: "사회서비스정책학전공" },
        ],
        y1_u1_g2: [{ id: "y1_u1_g2_m1", title: "사회사업학전공(야간)" }],
        y1_u1_g3: [{ id: "y1_u1_g3_m1", title: "실버산업학과" }],
        y1_u1_g4: [
          { id: "y1_u1_g4_m1", title: "유니버설비주얼디자인전공" },
          { id: "y1_u1_g4_m2", title: "스포츠복지전공" },
          { id: "y1_u1_g4_m3", title: "미술문화복지전공" },
        ],
        y1_u2_g1: [],
        y1_u2_g2: [],
        y1_u2_g3: [],
        y1_u2_g4: [],
        // y1_u2_g5: [],
        y1_u3_g1: [],
        y1_u3_g2: [],
        y1_u3_g3: [],
        y1_u3_g4: [],
        y1_u4_g1: [],
        y1_u4_g2: [],
        y1_u4_g3: [],
        y1_u4_g4: [],
        y1_u5_g1: [],
        y1_u5_g2: [],
        y1_u5_g3: [],
        y1_u5_g4: [],
        // y1_u5_g5: [],
        y2_u1_g1: [],
        y2_u1_g2: [],
        y2_u1_g3: [],
        y2_u2_g1: [],
        y2_u2_g2: [],
        y2_u3_g1: [],
        y2_u3_g2: [],
        y2_u4_g1: [],
        y2_u4_g2: [],
        y2_u4_g3: [],
        y2_u5_g1: [],
        y2_u5_g2: [],
        y2_u5_g3: [],
        y2_u5_g4: [],
        // y2_u5_g5: [],
      },
    },
  },
  add_univer: {
    header: "5. 소속(추가전공)",
  },
  add_group: {
    header: "6. 학부(추가전공)",
  },
  add_major: {
    header: "7. 학과(추가전공)",
  },
};

const NewGroupContext = createContext({
  groupState: groupList,
});

export default NewGroupContext;
