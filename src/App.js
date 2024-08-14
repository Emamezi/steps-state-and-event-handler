import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const previousButtonHandler = () => {
    if (step > 1) setStep((step) => step - 1);
  };
  const nextButtonHandler = () => {
    if (step < 3) setStep((step) => step + 1);
  };

  const closeStepHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      <button className="close" onClick={closeStepHandler}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={previousButtonHandler}
            >
              {" "}
              👈 Previous{" "}
            </Button>

            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={nextButtonHandler}
            >
              {" "}
              Next 👉{" "}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

const StepMessage = ({ step, children }) => {
  return (
    <div className="message">
      <h3> Step {step} </h3>
      {children}
    </div>
  );
};

const Button = ({ bgColor, textColor, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
