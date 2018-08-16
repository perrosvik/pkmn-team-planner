import React, { Component } from "react";
import CreatListOfPKMN from "./CreatListOfPKMN.js";
import CardDisplayPKMN from "./CardDisplayPKMN.js";

class TeamDisplay extends Component {
  render() {
    const pkmnList = CreatListOfPKMN();
    return (
        <div>
      <div className="columns">
        <div className="column">
          <CardDisplayPKMN pkmnList={pkmnList} />
        </div>
        <div className="column">
          <CardDisplayPKMN pkmnList={pkmnList} />
        </div>
        <div className="column">
          <CardDisplayPKMN pkmnList={pkmnList} />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <CardDisplayPKMN pkmnList={pkmnList} />
        </div>
        <div className="column">
          <CardDisplayPKMN pkmnList={pkmnList} />
        </div>
        <div className="column">
          <CardDisplayPKMN pkmnList={pkmnList} />
        </div>
        </div>
        </div>
    );
  }
}
export default TeamDisplay;
