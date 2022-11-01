import React, { useState } from "react";
import { db } from "../../firebase";

function StartQuiz() {
  const [question, setQuestion] = useState([]);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function toggle() {
    setShowResult(showResult => !showResult);
  }

  function fetchAll(e) {
    e.preventDefault();
    db.collection("question")
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length > 0) {
          snapshot.docs.forEach((doc) => {
            setQuestion((prev) => {
              return [...prev, doc.data()];
            });
          });
        }
      });
  }

  const handleScoreTrue = () => {
    if (question.answer === "true" ) {
      // setResult(result + 1);
      console.log('true')
    } else {
      // setResult(result + 0);
      console.log('not true')
    }
  }
  const handleScoreFalse = () => {
    if (question.answer === "false" ) {
      setResult(result + 1);
    } else {
      setResult(result + 0);
    }
  }

  return (
    <div>
      <div>
        {question.map((ques) => {
          return (
            <div className="card" key={ques.question}>
              <h4>{ques.question}</h4>
              <button
                className="btnTrue"
                onClick={handleScoreTrue}
              >
                True
              </button>
              <button
                className="btnFalse"
                onClick={handleScoreFalse}
              >
                False
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex">
        <button className="btnStart" onClick={fetchAll}>
          <span className="label">Start</span>
        </button>
        <button className="btnStart" onClick={toggle}>
          <span className="label">result</span>
        </button>
        {showResult && (
        <h1 className="result">
          Your Result is: 4
        </h1>
      )}
      </div>
    </div>
  );
}

export default StartQuiz;
