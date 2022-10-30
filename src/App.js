import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import StartQuiz from "./components/StartQuiz/StartQuiz";
import AddQuestions from "./components/AddQuestions/AddQuestions";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={<AddQuestions />} />
            <Route exact path="/startquiz" element={<StartQuiz />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
