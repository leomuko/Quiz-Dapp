import Button from "@mui/material/Button";

export function FinalScreen(props) {
  const restart = () => {
    console.log("To restart Application");
  };
  return (
    <div className="submit-container">
      <h2>QUIZ GAME RESULTS</h2>
      <p>{props.message}</p>
      <Button onClick={restart} variant="contained" style={{ marginLeft: 10 }}>
        Submit
      </Button>
    </div>
  );
}
