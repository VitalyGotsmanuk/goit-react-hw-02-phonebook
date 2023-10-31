import '../index.css';
import { Component } from 'react';

import { Feedback } from './Feedback/Feedback';

export class App extends Component {

  render() {
    return (
      <>
        <h1>2-nd feedback HW! 👍</h1>
               
        <Feedback
          // state = {this.state}
          // handleOption={this.handleOption}
          
        />   
      </>
    );
  };
}

// state = {
  //       good: 0, 
  //       neutral: 0,
  //       bad: 0
  //   };
    
  // handleOption = (option) => {
  //   this.setState((prevState) => {
  //     return {
  //       [option]: prevState[option] +1,
  //     }
  //   })
  // };

    // handleGood = event => { 
    //     //console.log("Good", event)
    //     this.setState({ good: this.state.good + 1 });

    //     // console.log("Good", this.state.good)     
    // };

    // handleNeutral = event => { 
    //     //console.log("Neutral", event)
    //     this.setState({ neutral: this.state.neutral + 1 });
    // };

    // handleBad = event => { 
    //     //console.log("Bad")
    //     this.setState({ bad: this.state.bad + 1 }); 
    // };
