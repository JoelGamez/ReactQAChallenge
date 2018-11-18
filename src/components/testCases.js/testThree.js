import React, { Component } from 'react';




class TestThree extends Component {


  


  render() {
    return (
      <div> 
        <h3>Test Three</h3>
        
        <table className='Table table-bordered' >
            <tbody>
          
                <tr>
                    <th>Project Name:</th>
                    <td align="left">Digital Jukebox</td>
                </tr>
                <tr>
                    <th>Tester:</th>
                    <td align="left">Joel Gamez</td>
                </tr>
                <tr>
                    <th>Test Id:</th>
                    <td align="left">3</td>
                </tr>
                <tr>
                    <th>Test Title:</th>
                    <td align="left">User Experience with Mobile & Desktop Responsiveness</td>
                </tr>
                <tr>
                    <th>Description:</th>
                    <td align="left">The web application should be responsive to mobile & desktop views, and appeal with user friendliness.</td>
                </tr>

            </tbody>
        </table>  
        <br></br>
        <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Requirement</th>
                <th scope="col">Expected Result</th>
                <th scope="col">Actual Result</th>
                <th scope="col">Status(Pass or Fail)</th>
                <th scope="col">Notes/Improvements</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mobile Responsiveness</td>
                    <td>The mobile view should be responsive</td>
                    <td>The mobile view lacks repressiveness</td>
                    <td>Fail</td>
                    <td>There is too much white space around the components. The components should fill the screen 100%.</td>
                    
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Desktop Responsiveness</td>
                    <td>The desktop view should be user friendly</td>
                    <td>The desktop view has a lot of white space and lacks appeal</td>
                    <td>Fail</td>
                    <td>There is too much white space around the components. The components should fill the screen 100%.</td>
                    
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>User Experience</td>
                    <td>The User should view an appealing view with strong branding</td>
                    <td>The page lacks friendly user experience and branding</td>
                    <td>Fail</td>
                    <td>The page lacks title, logo, color scheme, and/or images. </td>
                    
                </tr>
                
            </tbody>
        </table>     

        
      </div>
    );
  }
}

export default TestThree;
