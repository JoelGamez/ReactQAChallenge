import React, { Component } from 'react';




class TestTwo extends Component {


  


  render() {
    return (
      <div> 
        <h3>Test Two</h3>
        
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
                    <td align="left">2</td>
                </tr>
                <tr>
                    <th>Test Title:</th>
                    <td align="left">Carousel Scrolling</td>
                </tr>
                <tr>
                    <th>Description:</th>
                    <td align="left">The user should be able to scroll through the carousel both in the left and right directions. When the user scrolls, the next album in the carousel  is selected and the corresponding song list with additional details should display below. The currently selected album song list should collapse close and then the newly selected album song list expand open.</td>
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
                    <td>Scroll left</td>
                    <td>User should be able to scroll left by clicking on the left arrow</td>
                    <td>User can scroll left by clicking on the left arrow</td>
                    <td>Pass</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Scroll Right</td>
                    <td>User should be able to scroll right by clicking on the right arrow</td>
                    <td>User can scroll right by clicking on the right arrow</td>
                    <td>Pass</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>New Album with Additional Details</td>
                    <td>User should see the new album with additional details when selected</td>
                    <td>User can see the new album with additional details when selected</td>
                    <td>Pass</td>
                    <td> </td>
                    
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Current Album Song List Collapse Close</td>
                    <td>User should see the current song list collapse close</td>
                    <td>User can not view the current song list collapse closing</td>
                    <td>Fail</td>
                    <td>There is no collapse close animation; the song list only re-renders</td>
                    
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>New Album Song List Expand Open</td>
                    <td>User should see the new song list expand open</td>
                    <td>User can not view the new song list expand opening</td>
                    <td>Fail</td>
                    <td>There is no expand open animation; the song list only re-renders</td>
                    
                </tr>
                               
            </tbody>
        </table>     

        
      </div>
    );
  }
}

export default TestTwo;
