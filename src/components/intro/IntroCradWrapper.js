import IntroCard from "./IntroCard";

const IntroCardWrapper = ({ introCard }) => {
  return (
    <div className="intro-card-wrapper">
      {introCard.map((card) => (
        <IntroCard card={card} />
      ))}
    </div>
  );
};

export default IntroCardWrapper;
