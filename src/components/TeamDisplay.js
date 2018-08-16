import React, { Component } from "react";
import CreatListOfPKMN from './CreatListOfPKMN.js';
import CardDisplayPKMN from "./CardDisplayPKMN.js";

class TeamDisplay extends Component {
   
    render() {
        const pkmnList = CreatListOfPKMN();
        return (
            <div>
           <CardDisplayPKMN pkmnList={pkmnList}/>
          {/*  <CardDisplayPKMN pkmnList={pkmnList}/>
           <CardDisplayPKMN pkmnList={pkmnList}/>
           <CardDisplayPKMN pkmnList={pkmnList}/>
           <CardDisplayPKMN pkmnList={pkmnList}/>
           <CardDisplayPKMN pkmnList={pkmnList}/> */}
           </div>
        );
    }
}
export default TeamDisplay;