import "./Page.scss";
import "../components/intro/intro.scss";
import IntroHeader from "../components/intro/IntroHeader.js";
import IntroSlideWrapper from "../components/intro/IntroSlideWrapper.js";
import IntroCardWrapper from "../components/intro/IntroCradWrapper.js";
import DevSlide from "../components/intro/DevSlide.js";

const IntroPage = ({ onClick }) => {
  const introCard = [
    {
      head: "내가 알지 못하는 것. 필요해서 만듦.",
      content:
        "복수전공? 졸업 필수 학점? 다음에는 어떤 수업을 듣지? 이를 해결해줄 길라잡이가 필요했습니다",
    },
    {
      head: "어.. 초과학기인가?",
      content: "듣고싶은 수업만 듣다 졸업을 못할수도..",
    },
    {
      head: "아직도 교학팀가니?",
      content: "이제는 직접 내 졸업학점을 계산해보자!",
    },
    {
      head: "다음에는 어떤 수업 들을꺼야?",
      content:
        "다른 사람들은 어떤 수업을 들을 계획인지, 전공 수업을 앞으로 얼만큼 들어야 하는지 궁금한 프로계획러들을 위해 준비했습니다.",
    },
    {
      head: "부족하기에 매 순간 성장합니다.",
      content: "앞으로도 교내에 필요한 기능들을 직접 만들어보겠습니다.",
    },
  ];
  return (
    <div className="page-wrapper">
      <div className="page-content-wrapper">
        <IntroHeader />
        <IntroCardWrapper introCard={introCard} />
        <IntroSlideWrapper onClick={onClick} />
        <DevSlide />
        <div className="div-bar"></div>
        <div className="footer">
          <div className="title">2023-2 강남대학교 웹개발응용 기말프로젝트</div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
