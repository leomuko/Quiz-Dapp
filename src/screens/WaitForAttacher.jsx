import "./index.css";
import { db } from "../firebase";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
//import { set, ref } from "firebase/database";

export function WaitForAttacher({ info, quiz }) {
  console.log(quiz);

  const doQuizTrial = () => {
    try {
      var obj = JSON.parse(info);
      //console.log(obj.hex);
      db.ref("quiz/" + obj.hex).set(quiz);
    } catch (ex) {
      console.error(ex);
    }
    console.log("Done Sending");
  };
  return (
    <div
      className="section"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h5>Waiting For Attacher</h5>
      <textarea className="textarea" value={info} />
      <Button
        onClick={doQuizTrial}
        variant="contained"
        style={{ marginTop: 10, marginLeft: 5 }}
      >
        Save Quiz
      </Button>
    </div>
  );
}
