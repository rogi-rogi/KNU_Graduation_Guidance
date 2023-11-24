import "./Page.scss";

import IntroHeader from "../components/intro/IntroHeader.js";
import IntroCard from "../components/intro/IntroCard.js";
import DevSlide from "../components/intro/DevSlide.js";

const Intro = () => {
  const introCard = [
    {
      head: "내가 알지 못하는 것. 필요해서 만듦.",
      content:
        "복수전공? 졸업 필수 학점? 다음에는 어떤 수업을 듣지? 이를 해결해줄 길라잡이가 필요했습니다",
    },
    {
      head: "다음에는 어떤 수업 들을꺼야?",
      content:
        "다른 사람들은 어떤 수업을 들을 계획인지, 전공 수업을 앞으로 얼만큼 들어야 하는지 궁금한 프로계획러 xxxJ를 위해 준비했습니다.",
    },
    {
      head: "그래서 준비했습니다!",
      content: "구독과 좋아요 알림설정",
    },
  ];
  return (
    <div className="page">
      <IntroHeader />
      <div className="page-content-wrapper">
        <div className="page-content">
          {introCard.map((card) => (
            <IntroCard card={card} />
          ))}
        </div>
        <DevSlide />
      </div>
    </div>
  );
};

export default Intro;
