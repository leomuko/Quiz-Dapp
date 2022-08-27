import "./index.css";

export function SelectRole({ deploy, attach }) {
  return (
    <div className="section">
      <h2>The Deployer Creates a Quiz, Sets a Wager and Shares Contract. </h2>
      <button className="button" onClick={() => deploy()}>
        Deployer : Create Quiz
      </button>
      <hr />
      <h2>
        The Attacher attempts a quiz. The attacher must score above 70 to win
        the quiz{" "}
      </h2>
      <button className="button" onClick={() => attach()}>
        Attacher: Attempt Quiz
      </button>
    </div>
  );
}
