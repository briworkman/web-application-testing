// Buttons Here
import React, { useState } from "react";
import Display from "./Display";

const Dashboard = () => {
  const [homeRuns, setHomeRuns] = useState(0);
  const [awayRuns, setAwayRuns] = useState(0);

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [outs, setOuts] = useState(0);
  const [inning, setInning] = useState(1);

  const ballsCounter = () => {
    if (balls < 3) {
      setBalls(balls + 1);
    } else {
      setBalls(0);
    }
  };

  const strikeCounter = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(0);
    }
  };

  const outCounter = () => {
    if (outs < 2) {
      setOuts(outs + 1);
    } else {
      setOuts(0);
    }
  };

  const foulCounter = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
  };

  const inningCounter = () => {
    if (inning <= 8) {
      setInning(inning + 1);
    } else {
      setInning(0);
    }
  };

  return (
    <div className="container">
      <Display
        homeRuns={homeRuns}
        awayRuns={awayRuns}
        balls={balls}
        strikes={strikes}
        outs={outs}
        inning={inning}
      />
      <section className="buttons">
        <button
          className="home-score-btn"
          onClick={() => setHomeRuns(homeRuns + 1)}
        >
          Home Score +1
        </button>
        <button
          className="away-score-btn"
          onClick={() => setAwayRuns(awayRuns + 1)}
        >
          Away Score +1
        </button>
        <button className="balls-btn" onClick={ballsCounter}>
          Balls
        </button>
        <button className="strikes-btn" onClick={strikeCounter}>
          Strikes
        </button>
        <button className="outs-btn" onClick={outCounter}>
          Outs
        </button>
        <button className="fouls-btn" onClick={foulCounter}>
          Foul
        </button>
        <button className="innings-btn" onClick={inningCounter}>
          Inning
        </button>
        <button
          className="hit-btn"
          onClick={() => {
            setBalls(0);
            setStrikes(0);
          }}
        >
          Hit
        </button>
      </section>
    </div>
  );
};

export default Dashboard;
