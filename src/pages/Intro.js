import { useEffect } from "react";
import "./Page.scss";
import { useState } from "react";

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
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const load = () => {
      setTimeout(() => setLoad(true), 1500);
    };
    load();
    return () => load();
  }, []);
  return (
    <div className="page">
      <div
        className="page-content-header"
        style={{
          backgroundImage: `url("/assets/images/KNU_MAIN.jpg")`,
        }}
      >
        <div className="header-title">
          <h1 style={{ opacity: load ? 1 : 0 }}>pz write intro header</h1>
          <h1 style={{ opacity: load ? 1 : 0 }}>pz write sub intro header</h1>
        </div>
      </div>
      <div className="page-content-wrapper">
        <div className="page-content">
          {introCard.map((card) => (
            <div className="intro-slide">
              <h3>{card.head}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
        <div className="dev-wrapper">
          <a
            href="https://github.com/rogi-rogi/KNU_Graduation_Guidance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
