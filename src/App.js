import "./App.css";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as backend from "./reach/build/index.main.mjs";
import { useState, useEffect } from "react";
import { views, Loader } from "./utils/";
import {
  ConnectAccount,
  PasteContractInfo,
  SelectRole,
  TestView,
  WaitForAttacher,
} from "./screens";
import QuizRoute from "./screens/QuizRoute";
import { BrowserRouter as Router } from "react-router-dom";
//const reach = loadStdlib(process.env);
import Quiz from "./screens/components/Quiz";
import PlayQuiz from "./screens/components/PlayQuiz";
import { FinalScreen } from "./screens/FinalScreen";

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);
const fmt = (x) => reach.formatCurrency(x, 4);

function App() {
  const [account, setAccount] = useState({});
  const [view, setView] = useState(views.CONNECT_ACCOUNT);
  const [contractInfo, setContractInfo] = useState();
  const [quizInfo, setQuizInfo] = useState({});
  let theFinalResult = 0;
  const [message, setMessage] = useState("No Message");
  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(result);
  });

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = "";
      try {
        const account = mnemonic
          ? await reach.newAccountFromMnemonic(secret)
          : await reach.getDefaultAccount();
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        console.log("Successfull connect");
        result = "success";
      } catch (error) {
        console.log(error);
        result = "failed";
      }
      return result;
    },

    setAsDeployer: (deployer = true) => {
      if (deployer) {
        setView(views.SET_TOKEN_INFO);
      } else {
        setView(views.PASTE_CONTRACT_INFO);
      }
    },

    deploy: async () => {
      try {
        const contract = account.contract(backend);
        backend.Deployer(contract, Deployer);
        console.log("Deploying");
        setView(views.DEPLOYING);
        const ctcInfo = JSON.stringify(await contract.getInfo(), null, 2);
        setContractInfo(ctcInfo);
        console.log("Done Deploying");
        // setView(views.SET_QUIZ);
        setView(views.WAIT_FOR_ATTACHER);
      } catch (error) {
        console.log(`Error : ${error}`);
      }
    },

    attach: () => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      console.log(contractInfo);
      backend.Attacher(contract, Attacher);
      console.log("Done Attaching.. ");
      setView(views.ATTACHING);
    },

    setQuiz: () => {
      console.log("Go to Set Quiz");
      setView(views.SET_QUIZ);
    },

    doQuiz: (quiz) => {
      setQuizInfo(quiz);
      console.log(quiz);
      setView(views.DO_QUIZ);
    },

    getQuiz: (quiz) => {
      setQuizInfo(quiz);
      console.log(quiz);
      const data = quiz.Data;
      const numberOfQuestions = quiz.quizCount;
      const typeOfQuestions = quiz.quizType;
      const levelOfDifficulty = quiz.quizDifficulty;
      Deployer.wager = reach.parseCurrency(quiz.wager);
      console.log("Wager");
      console.log(Deployer.wager);
      //Deployer.quizData = quiz;
    },
    getResult: (result) => {
      theFinalResult = result;
      console.log("The result is " + theFinalResult);
      setResult(result);
      return result;
      //Attacher.getResult();
    },
    getContractInfo: (info) => {
      console.log("Get Contract info as Attacher: " + info);
      setContractInfo(info);
    },
  };

  //Participant Objects
  const Common = {
    random: () => reach.hasRandom.random(),
    seeOutCome: (theResult) => {
      console.log("See Outcome " + theResult);
      if (parseInt(theResult) >= 70) {
        console.log("The Attacher won with a score of " + theResult);
        setMessage("The Attacher won with a score of " + theResult);
      } else {
        setMessage(
          "The Deployer won.\n The Attacher lost with a score of " +
            theResult +
            "\n Which is below 70, the winning Minimum"
        );
      }
      setView(views.Final);
    },
  };

  const Deployer = {
    ...Common,
    wager: reach.parseCurrency(0),
  };

  const Attacher = {
    ...Common,
    acceptWager: (amt) => {
      console.log(`Attacher accepts the wager of ${fmt(amt)}.`);
      //setView(views.DO_QUIZ);
      return true;
    },
    getResult: () => {
      const finalResult = theFinalResult;
      console.log("Get Result" + finalResult);
      if (finalResult >= 0) {
        console.log("The Attachers result is " + result);
      } else {
        console.log("There is no result but the current one is " + result);
      }
      setView(views.DEPLOYING);
      return finalResult;
    },
  };

  return (
    <div className="App">
      <div className="top">
        <h1>Decentralized Quiz With Wagers</h1>
      </div>
      <header className="App-header">
        {view === views.CONNECT_ACCOUNT && (
          <ConnectAccount connect={reachFunctions.connect} />
        )}

        {view === views.DEPLOY_OR_ATTACH && (
          <SelectRole
            deploy={reachFunctions.setQuiz}
            attach={() => setView(views.PASTE_CONTRACT_INFO)}
          />
        )}

        {(view === views.DEPLOYING || view === views.ATTACHING) && <Loader />}

        {view === views.PASTE_CONTRACT_INFO && (
          <PasteContractInfo
            quiz={reachFunctions.doQuiz}
            info={reachFunctions.getContractInfo}
          />
        )}

        {view === views.WAIT_FOR_ATTACHER && (
          <Router>
            <WaitForAttacher info={contractInfo} quiz={quizInfo} />
          </Router>
        )}

        {view === views.TEST_VIEW && <TestView />}

        {view === views.SET_QUIZ && (
          // <Router>
          //   <QuizRoute
          //     setQuiz={reachFunctions.getQuiz}
          //     deploy={reachFunctions.deploy}
          //   />
          // </Router>
          <Quiz
            setQuiz={reachFunctions.getQuiz}
            deploy={reachFunctions.deploy}
          />
        )}

        {view === views.DO_QUIZ && (
          <PlayQuiz
            quiz={quizInfo}
            getResults={reachFunctions.getResult}
            attach={reachFunctions.attach}
          />
        )}
        {view === views.FINISHED && <FinalScreen message={message} />}
      </header>
    </div>
  );
}

export default App;
