const WelcomeMessage = ({ todoItems }) => {
  return todoItems.length === 0 && <p className="welcome">Enjoy Your Day</p>;
};

export default WelcomeMessage;
