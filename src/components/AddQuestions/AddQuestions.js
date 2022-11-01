import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import BtnSubmit from "../Buttons/BtnSubmit";

function AddQuestions() {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  let navigate = useNavigate();

  const routeStartQuiz = () => {
    navigate("/startquiz");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("question")
      .add({
        question: question,
        answer: answer,
      })
      .then(() => {
        alert("Question has been added 👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setQuestion("");
    setAnswer("");
  };

  return (
    <>
      <h1 className="heading-primary">True or False Quiz</h1>
      <div className="card">
        <h1 className="heading-secondary">Add your Question</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            id=""
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            name="question"
            placeholder="Add Question"
            type="text"
            className="input"
            required
          />
          <input
            id=""
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            name="answer"
            placeholder="Answer"
            type="text"
            className="input"
            required
          />
          <BtnSubmit title="Submit" />
          <button className="btnStart" onClick={routeStartQuiz}>
            <span className="label">Start</span>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </span>
          </button>
        </form>
      </div>
    </>
  );
}

export default AddQuestions;
