import React, { useState } from "react";

const Display = props => {
  console.log(props);
  return (
    <section className="display">
      <div className="scores">
        <div className="home">
          <h2 className="home-name">Tigers</h2>
          <div className="home-runs">{props.homeRuns}</div>
        </div>
        <div className="away">
          <h2 className="away-name">Red Sox</h2>
          <div className="away-runs">{props.awayRuns}</div>
        </div>
      </div>
      <div className="bottomRow">
        <div className="balls">
          <h3 className="balls-title">Balls</h3>
          <div className="balls-number">{props.balls}</div>
        </div>
        <div className="strikes">
          <h3 className="strikes-title">Strikes</h3>
          <div className="strikes-number">{props.strikes}</div>
        </div>
        <div className="outs">
          <h3 className="outs-title">Outs</h3>
          <div className="outs-number">{props.outs}</div>
        </div>
        <div className="inning">
          <h3 className="inning-title">Inning</h3>
          <div className="inning-number">{props.inning}</div>
        </div>
      </div>
    </section>
  );
};

export default Display;
