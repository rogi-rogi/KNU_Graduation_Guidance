import { createContext } from "react";

const initState = [
  [
    "*",
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
  [
    "y2_g1_m1",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g1_m2",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g1_m3",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g1_m4",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g1_m5",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g2_m1",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g2_m2",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g3_m1",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g3_m2",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g3_m3",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g3_m4",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g4_m1",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 60], //[전공기초, 선택]
    [0, 78], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g4_m2",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 60], //[전공기초, 선택]
    [0, 78], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g4_m3",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 60], //[전공기초, 선택]
    [0, 78], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g4_m4",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 60], //[전공기초, 선택]
    [0, 78], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g4_m5",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 60], //[전공기초, 선택]
    [0, 78], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g5_m1",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g5_m2",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g5_m3",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g5_m4",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g5_m5",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g5_m6",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g6_m1",
    [19, 0, 0, 0, 19], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g6_m2",
    [19, 0, 0, 0, 19], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g6_m3",
    [19, 0, 0, 0, 19], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g6_m4",
    [19, 0, 0, 0, 19], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g6_m5",
    [19, 0, 0, 0, 19], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g6_m6",
    [19, 0, 0, 0, 19], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g6_m7",
    [19, 0, 0, 0, 19], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g7_m1",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g7_m2",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g7_m3",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g8_m1",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g8_m2",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g8_m3",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g8_m4",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g9_m1",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g9_m2",
    [13, 0, 0, 0, 13], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 42], //[학부 외 복수전공 기초, 선택]
    [0, 24], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y2_g10_m1",
    [19, 0, 0, 0, 19], //[기초, 일반, 균형, 계열, 합계]
    [0, 0], //[전공기초, 선택]
    [0, 104], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 0], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g1_m1",
    [13, 0, 12, 6, 31], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g1_m2",
    [13, 0, 12, 6, 31], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0,  0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g1_m3",
    [13, 0, 12, 6, 31], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0,  0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g1_m4",
    [19, 0, 12, 6, 37], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g2_m1",
    [13, 0, 15, 0, 28], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g2_m2",
    [13, 0, 15, 0, 28], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g2_m3",
    [13, 0, 15, 0, 28], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g2_m4",
    [13, 0, 15, 0, 28], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g3_m1",
    [13, 0, 15, 0, 28], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g3_m2",
    [13, 0, 15, 0, 28], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g3_m3",
    [13, 0, 15, 0, 28], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g3_m4",
    [13, 0, 15, 0, 28], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g3_m5",
    [13, 0, 15, 0, 28], //[기초, 일반, 균형, 계열, 합계]
    [6, 60], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g4_m1",
    [13, 0, 15, 0, 28], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g4_m2",
    [13, 0, 15, 0, 28], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g4_m3",
    [13, 0, 15, 0, 28], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 60], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g4_m4",
    [13, 0, 15, 0, 28], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 66], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g5_m1",
    [13, 0, 12, 6, 31], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g5_m2",
    [13, 0, 12, 6, 31], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 66], //[심화전공 기초, 선택]
    [0, 0], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g5_m3",
    [13, 0, 12, 6, 31], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y3_g5_m4",
    [13, 0, 12, 6, 31], //[기초, 일반, 균형, 계열, 합계]
    [6, 45], //[전공기초, 선택]
    [6, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [6, 36], //[학부 외 복수전공 기초, 선택]
    [3, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g1_m1",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g1_m2",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g1_m3",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 57], //[전공기초, 선택]
    [0, 72], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g1_m4",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 57], //[전공기초, 선택]
    [0, 72], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g1_m5",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 57], //[전공기초, 선택]
    [0, 72], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g1_m6",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 57], //[전공기초, 선택]
    [0, 72], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g2_m1",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g2_m2",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g2_m3",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g2_m4",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g3_m1",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g3_m2",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g3_m3",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 66], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g3_m4",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 66], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g4_m1",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g4_m2",
    [14, 0, 15, 0, 29], //[기초, 일반, 균형, 계열, 합계]
    [0, 51], //[전공기초, 선택]
    [0, 66], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g5_m1",
    [17, 0, 15, 0, 32], //[기초, 일반, 균형, 계열, 합계]
    [0, 57], //[전공기초, 선택]
    [0, 72], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g5_m2",
    [17, 0, 15, 0, 32], //[기초, 일반, 균형, 계열, 합계]
    [0, 57], //[전공기초, 선택]
    [0, 72], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
  [
    "y4_g5_m3",
    [17, 0, 15, 0, 32], //[기초, 일반, 균형, 계열, 합계]
    [0, 57], //[전공기초, 선택]
    [0, 72], //[심화전공 기초, 선택]
    [0, 36], //[학부내 복수전공 기초, 선택]
    [0, 0], //[학부 외 복수전공 기초, 선택]
    [0, 21], //[부전공 기초, 선택]
    "130",
  ],
].map((credit) => {
  const [id, subject, major, advanced, doubleIn, doubleOut, minor, sum] =
    credit;
  return { id, subject, major, advanced, doubleIn, doubleOut, minor, sum };
});
const INIT = initState.filter((credit) => credit.id === "*")[0];
const sum = (arr) => arr.map(Number).reduce((prev, cur) => prev + cur);
const convertCreditToObject = ({ selectCredit, other, majorType }) => ({
  subject: selectCredit.subject,
  major: selectCredit[majorType.major],
  addMajor:
    majorType.addMajor === "*" ? ["", ""] : selectCredit[majorType.addMajor],
  other,
  sum: selectCredit.sum,
});

const CreditContext = createContext({
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
          other: "",
          majorType: { major: "advanced", addMajor: "*" },
        });
      case "ARRAY_SUM":
        return sum(state);
      default:
        return INIT;
    }
  },
});

export default CreditContext;
