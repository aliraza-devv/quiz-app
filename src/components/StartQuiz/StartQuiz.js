import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import BtnSubmit from "../Buttons/BtnSubmit";

function StartQuiz() {
  const [question, setQuestion] = useState([]);
  const [result, setResult] = useState(0);

  const handleResultBtn = () => {
    return <h1>{setResult(result)}</h1>;
  };

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
    console.log(question);
  }

  return (
    <div className="cardQuestion">
      <div>
        {question.map((ques) => {
          return (
            <div key={ques.question}>
              <h4>{ques.question}</h4>
              <button
                className="btnTrue"
                onClick={(e) => {
                  if (e.target.value === question.answer) {
                    setResult(result + 1);
                  } else {
                    setResult(result);
                  }
                }}
              >
                True
              </button>
              <button
                className="btnFalse"
                onClick={(e) => {
                  if (e.target.value === question.answer) {
                    setResult(result + 1);
                  } else {
                    setResult(result);
                  }
                }}
              >
                False
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex">
        <button className="btnStart" onClick={fetchAll}>
          <span className="label">Get Questions</span>
        </button>
        <BtnSubmit onClick={handleResultBtn} title='Result' />
      </div>
    </div>
  );
}

export default StartQuiz;
