import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "./common/Card";

export default function PlayQuiz(props) {
  //const { state } = useLocation();
  //const navigate = useNavigate();
  const [questionCounter, setQuesCounter] = useState(1);
  const [totalQuiz, setTotalQuiz] = useState(1);
  const [questionsArray, setQuesArray] = useState([]);
  const [quizType, setQuizType] = useState("");
  const [quizDifficulty, setQuizDifficulty] = useState("");
  const [result, setResult] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [quizSubmit, onQuizSubmit] = useState("You can Submit your Score.");

  React.useEffect(() => {
    const { quizData, quizCount, quizType, quizDifficulty } = props.quiz;
    setQuesArray(quizData);
    setTotalQuiz(quizCount);
    setQuizDifficulty(quizDifficulty);
    setQuizType(quizType);
    setPlayerName(localStorage.getItem("Playername"));
  }, []);

  const nextQuestion = () => {
    if (questionCounter < questionsArray.length + 1) {
      setQuesCounter(questionCounter + 1);
    }
  };

  const submitQuiz = () => {
    const percentage = ~~((result / totalQuiz) * 100);
    console.log(percentage);
    if (percentage >= 70) {
      onQuizSubmit("You have won \n, Score : " + percentage);
    } else {
      onQuizSubmit("You have lost\n, Score : " + percentage);
    }
    props.getResults(percentage);
    props.attach();
  };
  return (
    <div>
      {questionCounter < questionsArray.length + 1 ? (
        <div>
          <h1>Play Quiz</h1>

          <h2>Question Number: {questionCounter}</h2>
          <h3>Difficulty Level: {quizDifficulty}</h3>
          <Card
            questionsArray={questionsArray}
            questionCounter={questionCounter}
            nextQuestion={nextQuestion}
            setResult={setResult}
            result={result}
          />
        </div>
      ) : (
        <div className="submit-container">
          <h2>The Quiz is now finished..</h2>
          <p>{quizSubmit}</p>
          <Button
            onClick={submitQuiz}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}
