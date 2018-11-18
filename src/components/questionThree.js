import React, { Component } from 'react';


import '../App.css';

class QuestionThree extends Component {


  


  render() {
    return (
      <div className='container'> 
        <h3 Style={'text-align:center;'}>Explain why you think software has bugs.</h3>
        <p Style={'text-align:center;'}>Bugs can occur for various reasons. From my personal experience, and research I know that bugs can occur when</p>
        <div Style={'text-align: left;'}>            
            <ul>
                <li>
                Code Conflicts/Breaks Previously Written Code
                <ul>
                    <li>
                        As projects can consist of multiple developers (past, current, and future), the current team might have to work with code that was written by past developers. If past developers do not leave clear documentation, comments, or follow language syntax correctly, current developers may be misinterpret code. That misinterpretation can lead to conflicts with old code; access modifiers & functions may not be clearly defined and cause new code to break. 
                    </li>
                </ul>
                </li>
                <li>
                Syntax Typos
                    <ul>
                        <li>
                            Syntax errors can cause code, data-structures, and scripts to be misinterpreted. Misplaced semicolons, commas, and incorrect letter casing are common mistakes. 
                        </li>
                    </ul>
                </li>
                <li>
                Software Updates are Released
                    <ul>
                        <li>
                        Libraries such as React & jQuery are often updated. These updates can change, depreciate, and create new methods & features. This can cause previous code to throw errors in your application.
                        </li>
                    </ul>
                </li>
                <li>
                Miscommunication
                    <ul>
                        <li>
                        Miscommunication between clients, product management, development, and testing teams can cause a misunderstanding of product requirements. Unclear requirements can cause developers to work on features that defect & fail to meet the precise goal.  
                        </li>
                    </ul>
                </li>
            </ul>  
        </div>       
      </div>
    );
  }
}

export default QuestionThree;
