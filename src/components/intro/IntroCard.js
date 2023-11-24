const IntroCard = ({ card }) => {
  return (
    <div className="intro-slide">
      <h3>{card.head}</h3>
      <p>{card.content}</p>
    </div>
  );
};

export default IntroCard;
