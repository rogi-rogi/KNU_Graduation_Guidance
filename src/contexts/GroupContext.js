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
    header: "1. 입학연도",
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
    header: "2. 학부",
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
        { id: "y2_g1", title: "인문대학" },
        { id: "y2_g2", title: "국제학대학" },
        { id: "y2_g3", title: "사범대학" },
        { id: "y2_g4", title: "통합학부(과)" },
        { id: "y2_g5", title: "사회과학대학" },
        { id: "y2_g6", title: "공과대학" },
        { id: "y2_g7", title: "예체능대학" },
        { id: "y2_g8", title: "미래인재대학" },
        { id: "y2_g9", title: "KNU참인재대학" },
        { id: "y2_g10", title: "독일음악학부" },
      ],
      y3: [
        // 2017~2020
        { id: "y3_g1", title: "복지융합대학" },
        { id: "y3_g2", title: "사범대학" },
        { id: "y3_g3", title: "경영관리대학" },
        { id: "y3_g4", title: "글로벌인재대학" },
        { id: "y3_g5", title: "공과대학" },
      ],
      y4: [
        // 2021~
        { id: "y4_g1", title: "복지융합대학" },
        { id: "y4_g2", title: "사범대학" },
        { id: "y4_g3", title: "경영관리대학" },
        { id: "y4_g4", title: "글로벌인재대학" },
        { id: "y4_g5", title: "공과대학" },
      ],
    },
  },
  major: {
    header: "3. 학과(전공)",
    list: {
      //2012
      y1_g1: [
        // ~2012 복지융합대학
        { id: "y1_g1_m1", title: "사회복지학부" },
        { id: "y1_g1_m2", title: "회화디자인학부" },
        { id: "y1_g1_m3", title: "예체능학부" },
        { id: "y1_g1_m4", title: "사회체육학과" },
        { id: "y1_g1_m5", title: "실버산업학과" },
        { id: "y1_g1_m6", title: "음악학과" },
      ],
      y1_g2: [
        // ~2012 경영관리대학
        { id: "y1_g2_m1", title: "국제통상학과" },
        { id: "y1_g2_m2", title: "경제학과" },
        { id: "y1_g2_m3", title: "세무학과" },
        { id: "y1_g2_m4", title: "법학과" },
        { id: "y1_g2_m5", title: "행정학과" },
        { id: "y1_g2_m6", title: "글로벌경영학부" },
        { id: "y1_g2_m7", title: "경제세무학과" },
        { id: "y1_g2_m8", title: "공공인재학과" },
        { id: "y1_g2_m9", title: "정경학부" },
      ],
      y1_g3: [
        //글로벌인재대학
        { id: "y1_g3_m1", title: "신학과" },
        { id: "y1_g3_m2", title: "철학과" },
        { id: "y1_g3_m3", title: "국어국문학과" },
        { id: "y1_g3_m4", title: "영문학과" },
        { id: "y1_g3_m5", title: "국제지역학부" },
        { id: "y1_g3_m6", title: "가독교학과" },
        { id: "y1_g3_m7", title: "한영문화콘텐츠학과" },
        { id: "y1_g3_m8", title: "글로벌학부" },
        { id: "y1_g3_m9", title: "글로벌문화학부" },
      ],
      y1_g4: [
        // ~2012 공과대학
        { id: "y1_g4_m1", title: "응용수학과" },
        { id: "y1_g4_m2", title: "컴퓨터미디어정보공학부" },
        { id: "y1_g4_m3", title: "전자공학과" },
        { id: "y1_g4_m4", title: "산업시스템공학과" },
        { id: "y1_g4_m5", title: "문헌정보학과" },
        { id: "y1_g4_m6", title: "소프트웨어응용학부" },
        { id: "y1_g4_m7", title: "산업데이터사이언스학부" },
        { id: "y1_g4_m8", title: "Iot전자공학과" },
        { id: "y1_g4_m9", title: "부동산건설학부" },
        { id: "y1_g4_m10", title: "ICT공학부" },
      ],
      y1_g5: [
        // ~2012 통합학부(과)
        { id: "y1_g5_m1", title: "경영학부" },
        { id: "y1_g5_m2", title: "실버산업학부" },
        { id: "y1_g5_m3", title: "중국어*문화학과" },
        { id: "y1_g5_m4", title: "중국어실용지역학과" },
      ],
      // 2013~2016
      y2_g1: [
        //2013~2016 인문대학
        { id: "y2_g1_m1", title: "신학과" },
        { id: "y2_g1_m2", title: "철학과" },
        { id: "y2_g1_m3", title: "국어국문학과" },
        { id: "y2_g1_m4", title: "문헌정보학과" },
        { id: "y2_g1_m5", title: "영문학과" },
      ],
      y2_g2: [
        // 2013~2016 국제학대학
        { id: "y2_g2_m1", title: "국제지역학부" },
        { id: "y2_g2_m2", title: "국제통상학과" },
      ],
      y2_g3: [
        //2013~2016 사범대학
        { id: "y2_g3_m1", title: "교육학과" },
        { id: "y2_g3_m2", title: "유아교육과" },
        { id: "y2_g3_m3", title: "초등특수교육과" },
        { id: "y2_g3_m4", title: "중등특수교육과" },
      ],
      y2_g4: [
        //2013~2016 통합학부(과)
        { id: "y2_g4_m1", title: "경영학부" },
        { id: "y2_g4_m2", title: "중국어/문화학과" },
        { id: "y2_g4_m3", title: "중국어실용지역학과" },
        { id: "y2_g4_m4", title: "실버산업학부" },
        { id: "y2_g4_m4", title: "시회복지학부(2016)" },
      ],
      y2_g5: [
        //2013~2016 사회과학대학
        { id: "y2_g5_m1", title: "경제학과" },
        { id: "y2_g5_m2", title: "법학과" },
        { id: "y2_g5_m3", title: "행정학과" },
        { id: "y2_g5_m4", title: "부동산학과" },
        { id: "y2_g5_m5", title: "세무학과" },
        { id: "y2_g5_m6", title: "자율전공학부" },
      ],
      y2_g6: [
        //2013~2016 공과대학
        { id: "y2_g6_m1", title: "컴퓨터미디어정보공학부" },
        { id: "y2_g6_m2", title: "전자공학과" },
        { id: "y2_g6_m3", title: "산업시스템공학과" },
        { id: "y2_g6_m4", title: "응용수학과" },
        { id: "y2_g6_m5", title: "도시공학과" },
        { id: "y2_g6_m6", title: "건축공학과" },
        { id: "y2_g6_m7", title: "공과대학자율전공학부" },
      ],
      y2_g7: [
        //2013~2016 예체능대학
        { id: "y2_g7_m1", title: "희화디자인학부" },
        { id: "y2_g7_m2", title: "음악학과" },
        { id: "y2_g7_m3", title: "사회체육학과" },
      ],
      y2_g8: [
        //2013~2016 미래인재대학
        { id: "y2_g8_m1", title: "실버산업공학과(야)" },
        { id: "y2_g8_m2", title: "유니버설디자인공학과(야)" },
        { id: "y2_g8_m3", title: "금융정보학과(야)" },
        { id: "y2_g8_m4", title: "신산업융합학부(야)" },
      ],
      y2_g9: [
        //2013~2016 KNU참인재대학
        { id: "y2_g9_m1", title: "교양학부" },
        { id: "y2_g9_m2", title: "교양교수부" },
      ],
      y2_g10: [
        //2013~2016 독일음악학부
        { id: "y2_g10_m1", title: "독일음악학부" },
      ],
      //2017~2020
      y3_g1: [
        //2017~2020 복지융합대학
        { id: "y3_g1_m1", title: "사회복지학부" },
        { id: "y3_g1_m2", title: "사회복지학부(야)" },
        { id: "y3_g1_m3", title: "실버산업학과" },
        { id: "y3_g1_m4", title: "복지융합인재학부" },
      ],
      y3_g2: [
        //2017~2020 사범대학
        { id: "y3_g2_m1", title: "교육학과" },
        { id: "y3_g2_m2", title: "유아교육과" },
        { id: "y3_g2_m3", title: "초등특수교육과" },
        { id: "y3_g2_m4", title: "중등특수교육과" },
      ],
      y3_g3: [
        //2017~2020 경영관리대학
        { id: "y3_g3_m1", title: "글로벌경영학부" },
        { id: "y3_g3_m2", title: "글로벌경영학부(야)" },
        { id: "y3_g3_m3", title: "경제세무학과" },
        { id: "y3_g3_m4", title: "공공인재학과" },
        { id: "y3_g3_m5", title: "융합자유전공학부" },
      ],
      y3_g4: [
        //2017~2020 글로벌인재대학
        { id: "y3_g4_m1", title: "기독교학과" },
        { id: "y3_g4_m2", title: "한영문화콘텐츠학과" },
        { id: "y3_g4_m3", title: "글로벌학부" },
        { id: "y3_g4_m4", title: "음악학과" },
      ],
      y3_g5: [
        //2017~2020 공과대학
        { id: "y3_g5_m1", title: "소프트웨어응용학부" },
        { id: "y3_g5_m2", title: "Iot전자공학과" },
        { id: "y3_g5_m3", title: "산업데이터사이언스학부" },
        { id: "y3_g5_m4", title: "부동산건설학부" },
      ],
      y4_g1: [
        //2021~ 복지융합대학
        { id: "y4_g1_m1", title: "사회복지학부" },
        { id: "y4_g1_m2", title: "실버산업학과" },
        { id: "y4_g1_m3", title: "유니버설아트디자인학과(2023)" },
        { id: "y4_g1_m4", title: "스포츠복지학과(2023)" },
        { id: "y4_g1_m5", title: "음악학과(2023)" },
        { id: "y4_g1_m6", title: "예체능학부" },
      ],
      y4_g2: [
        //2021~ 사범대학
        { id: "y4_g2_m1", title: "교육학과" },
        { id: "y4_g2_m2", title: "유아교육과" },
        { id: "y4_g2_m3", title: "초등특수교육과" },
        { id: "y4_g2_m4", title: "중등특수교육과" },
      ],
      y4_g3: [
        //2021~ 경영관리대학
        { id: "y4_g3_m1", title: "글로벌경영학부" },
        { id: "y4_g3_m2", title: "정경학부" },
        { id: "y4_g3_m3", title: "융합자율전공학부(2021)" },
        { id: "y4_g3_m4", title: "경영관리자율전공학부(야)(2021)" },
      ],
      y4_g4: [
        //2021~ 글로벌인재대학
        { id: "y4_g4_m1", title: "글로벌문화학부" },
        { id: "y4_g4_m2", title: "기독교학과(2022)" },
      ],
      y4_g5: [
        //2021~ 공과대학
        { id: "y4_g5_m1", title: "ICT융합공학부" },
        { id: "y4_g5_m2", title: "인공지능융합공학부(2022~2023)" },
        { id: "y4_g5_m3", title: "부동산건설학부" },
      ],
    },
  },

  add_group: {
    header: "4. 학부(추가전공)",
  },
  add_major: {
    header: "5. 학과(추가전공)",
  },
};

const GroupContext = createContext({
  groupState: groupList,
});

export default GroupContext;
