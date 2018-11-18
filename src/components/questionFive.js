import React, { Component } from 'react';
import TestOne from './testCases.js/testOne';
import TestTwo from './testCases.js/testTwo';
import TestThree from './testCases.js/testThree';




class QuestionFive extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showTest1: true,
          showTest2: false,
          showTest3: false
        
        };
    }   
      

  


  render() {
    return (
     <div className='container '>
        <button onClick={() =>this.setState({
                                            showTest1: true,
                                            showTest2: false,
                                            showTest3: false
                                            })}type="button" className="btn btn-secondary btn-sm">Test Case One
        </button>
        <button onClick={() =>this.setState({
                                            showTest2: true,
                                            showTest1: false,
                                            showTest3: false
                                            })}type="button" className="btn btn-secondary btn-sm">Test Case Two
        </button>
        <button onClick={() =>this.setState({
                                            showTest3: true,
                                            showTest2: false,
                                            showTest1: false
                                            })}type="button" className="btn btn-secondary btn-sm">Test Case Three
        </button>
        {this.state.showTest1 ?
          <TestOne/>:
           null
        }
        {this.state.showTest2 ?
          <TestTwo/>:
           null
        }  
        {this.state.showTest3 ?
          <TestThree/>:
           null
        }                                      


     </div>
     
    );
  }
}

export default QuestionFive;
