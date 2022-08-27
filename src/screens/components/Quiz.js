import React from "react";
import Select from "./common/Select";
import Input from "./common/Input";
import QuizDifficulty from "./common/DifficultySelect";
import Button from "@mui/material/Button";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Quiz(props) {
  //const navigate = useNavigate();
  const [quizCount, setQuizCount] = React.useState("10");
  const [quizType, setQuizType] = React.useState("");
  const [quizDifficulty, setQuizDifficulty] = React.useState("easy");
  const [wager, setWager] = React.useState("");
  const handleChange = (event) => {
    setQuizType(event.target.value);
  };

  const handleDifficulty = (event) => {
    setQuizDifficulty(event.target.value);
  };

  const getWager = (value) => {
    setWager(value);
    localStorage.setItem("Wager", value);
  };

  const getQuiz = () => {
    if (wager) {
      axios
        .get(
          `https://opentdb.com/api.php?amount=${quizCount}&difficulty=${quizDifficulty}&category=${quizType}`
        )
        .then((response) => {
          // navigate("/play", {
          //   state: {
          //     quizData: response.data.results,
          //     quizCount: quizCount,
          //     quizType: quizType,
          //     quizDifficulty: quizDifficulty,
          //   },
          // });
          const selectedQuiz = {
            quizData: response.data.results,
            quizCount: quizCount,
            quizType: quizType,
            quizDifficulty: quizDifficulty,
            wager: wager,
          };
          props.setQuiz(selectedQuiz);
          props.deploy();
        });
    } else {
      toast.error(`Please Enter the Player's Name`);
    }
  };
  return (
    <div className="quiz-main">
      <ToastContainer />
      <h1>Set Up Wager And Select Quiz</h1>
      <TextField
        required
        style={{ marginBottom: 20 }}
        fullWidth
        id="outlined-basic"
        label="Set Wager"
        variant="outlined"
        onChange={(e) => getWager(e.target.value)}
        value={wager}
      />
      {/* <input
        sx={{ minWidth: 220 }}
        style={{ marginTop: 20 }}
        type="number"
        placeholder={wager}
        onChange={(e) => getWager(e.target.value)}
        label="Set Wager"
      /> */}
      <Input setQuizCount={setQuizCount} quizCount={quizCount} />
      <Select quizType={quizType} handleChange={handleChange} />
      <QuizDifficulty
        quizDifficulty={quizDifficulty}
        handleChange={handleDifficulty}
      />

      <Button
        onClick={getQuiz}
        variant="contained"
        style={{ marginTop: 10, marginRight: 5 }}
      >
        SET QUIZ
      </Button>

      {/* <Button
        onClick={() => navigate("/results")}
        variant="contained"
        style={{ marginTop: 10, marginLeft: 5 }}
      >
        CHECK LEADERBOARD
      </Button> */}
    </div>
  );
}
