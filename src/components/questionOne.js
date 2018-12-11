import React, { Component } from 'react';
import {answerOne} from '../answers/answer1'


import '../App.css';

class QuestionOne extends Component {


  


  render() {
    return (
      <div className='container'>             
        <h3>Describe your version of a pefect day</h3>
        <p>            
          {answerOne}
        </p>
        
      </div>
    );
  }
}

export default QuestionOne;
