import { useState } from "react";
import "./index.css";
import { db } from "../firebase";

export function PasteContractInfo({ info, quiz }) {
  const [inf, setInf] = useState("");

  const fetchQuiz = () => {
    try {
      var obj = JSON.parse(inf);
      //console.log(obj.hex);
      //db.ref("quiz/" + obj.hex).set(quiz);
      var quizRef = db.ref("quiz/" + obj.hex);
      quizRef.get().then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());

          console.log("Finished setting quiz" + quiz);
          quiz(snapshot.val());
          info(inf);
          //  attach(info, snapshot.val());
        } else {
          console.log("No data available");
        }
      });
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
      <h5>Paste Contract Info</h5>
      <textarea className="textarea" onChange={(e) => setInf(e.target.value)} />
      <button className="button" onClick={fetchQuiz}>
        Start Quiz
      </button>
    </div>
  );
}
