import React, { Component } from 'react';


import '../App.css';

class QuestionFour extends Component {


  


  render() {
    return (
      <div className='container'> 
        <h3 Style={'text-align:center;'}>
         How would you make this website more user friendly? https://www.drawnames.com/without-email 
        </h3>
        <div Style={'text-align: left;'}>
            
            <ul>
                <li>
                    Responsiveness
                    <ul>
                        <li>
                            The website's homepage is very mobile-responsive, but the following pages lack responsiveness
                            <ul>
                                <li>
                                    The wish-list edit page critically requires mobile responsiveness
                                    <ul>
                                        <li>
                                            The page requires removal of side scrolling from the mobile view
                                        </li>
                                    </ul>   
                                </li>
                                <li>
                                    The “create invitation” and register pages require desktop responsiveness
                                </li>
                            </ul>
                        </li>
                        <li>
                         The desktop view contains too much empty space on the sides of the page
                         <ul>
                             <li>
                                The gift-event overview page would benefit from reducing vertical scrolling
                                and utilizing the empty side space.
                             </li>
                         </ul>
                        </li>
                    </ul>
                </li>
                <li>
                 Navigation
                    <ul>
                        <li>
                         User friendliness would increase with a top menu/navigation bar.
                         <ul>
                             <li>
                                 Navigating through the site was confusing as I had to look towards the bottom of the page to view navigation links. 
                             </li>
                         </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Color/Branding
                    <ul>
                        <li>
                          The web application would benefit from additional color, images, and better branding; the visuals are currently dull.
                        </li>
                    </ul>
                </li>               
            </ul>  
        </div>       
      </div>
    );
  }
}

export default QuestionFour;
