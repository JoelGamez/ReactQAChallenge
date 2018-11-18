import React, { Component } from 'react';
import QuestionOne from './questionOne';
import QuestionTwo from './questionTwo';
import QuestionThree from './questionThree';
import QuestionFour from './questionFour';
import QuestionFive from './questionFive';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestion1: true,
      showQuestion2: false,
      showQuestion3: false,
      showQuestion4: false,
      showQuestion5: false
    };
  
  }

  






  render() {
    return (
    <div>      
        <header>   
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <span id="logo">QAforQA</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <button onClick={() =>this.setState({
                                                    showQuestion1: true,
                                                    showQuestion4: false,
                                                    showQuestion2: false,
                                                    showQuestion3: false,
                                                    showQuestion5: false
                                                    })}type="button" className="btn btn-secondary btn-sm">Question 1</button>
                <button onClick={() =>this.setState({
                                                    showQuestion2: true,
                                                    showQuestion1: false,
                                                    showQuestion4: false,
                                                    showQuestion3: false,
                                                    showQuestion5: false
                                                    })}type="button" className="btn btn-secondary btn-sm">Question 2</button>
                <button onClick={() =>this.setState({
                                                    showQuestion3: true,
                                                    showQuestion1: false,
                                                    showQuestion2: false,
                                                    showQuestion5: false,
                                                    showQuestion4: false
                                                    })}type="button" className="btn btn-secondary btn-sm">Question 3</button>
                <button onClick={() =>this.setState({
                                                    showQuestion4: true,
                                                    showQuestion1: false,
                                                    showQuestion2: false,
                                                    showQuestion3: false,
                                                    showQuestion5: false
                                                    })}type="button" className="btn btn-secondary btn-sm">Question 4</button>
                <button onClick={() =>this.setState({
                                                    showQuestion5: true,
                                                    showQuestion1: false,
                                                    showQuestion2: false,
                                                    showQuestion3: false,
                                                    showQuestion4: false
                                                    })}type="button" className="btn btn-secondary btn-sm ">Question 5</button>
              </div>
            </div>
          </nav>           
        </header>
        <br></br>
        {this.state.showQuestion1 ?
          <QuestionOne/>:
           null
        }  
        {this.state.showQuestion2 ?
          <QuestionTwo/>:
           null
        }

        {this.state.showQuestion3 ?
          <QuestionThree/>:
           null
        }
        {this.state.showQuestion4 ?
          <QuestionFour/>:
           null
        }
        {this.state.showQuestion5?
          <QuestionFive/>:
           null
        }


    </div>
      
    );
  }
}

export default Header;
