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
    if (step > 1) setStep(step - 1);
  };
  const nextButtonHandler = () => {
    if (step < 3) setStep(step + 1);
  };

  const closeStepHandler = () => {
    setIsOpen(!isOpen);
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

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previousButtonHandler}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextButtonHandler}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
