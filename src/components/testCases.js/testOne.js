import React, { Component } from 'react';




class TestOne extends Component {

 
  


  render() {
    return (
      <div> 
        <h3>Test One</h3>
        
        <table className='Table table-bordered' >
            <tbody>
          
                <tr>
                    <th>Project Name:</th>
                    <td align="left">Digital Jukebox</td>
                </tr>
                <tr>
                    <th>Tester:</th>
                    <td  align="left">Joel Gamez</td>
                </tr>
                <tr>
                    <th>Test Id:</th>
                    <td  align="left">1</td>
                </tr>
                <tr>
                    <th>Test Title:</th>
                    <td  align="left">Album is rendered with song-list & additional information</td>
                </tr>
                <tr>
                    <th>Description:</th>
                    <td  align="left">On landing, an album should be auto-selected with the song list and it’s additional details displayed below. Additional details include track number, song name, favorite, categorization, song duration, and a social share option.</td>

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
                    <td>Album Song-List</td>
                    <td>User should see the album’s song-list</td>
                    <td>User can view album song-list</td>
                    <td>Pass</td>
                    <td>The additional details need would benefit from better styling</td>
                    
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Song Name</td>
                    <td>User should see the song name</td>
                    <td>User can view each song name</td>
                    <td>Pass</td>
                    <td>The song name should be a link to play the audio file</td>
                    
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Track Number</td>
                    <td>User should see the track number next songs within the list</td>
                    <td>User can view each track number</td>
                    <td>Pass</td>
                    <td>The track number renders as it should</td>
                    
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Favorite Button</td>
                    <td>User should be able to mark a song as favorite with a heart button</td>
                    <td>User can mark the song as favorite, but the mark is temporary and does not persist as favorite</td>
                    <td>Fail</td>
                    <td>When the user clicks on another album, the favorite icon does not remain marked when returning.</td>
                    
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Categorization</td>
                    <td>User should see categorization next to each song-list</td>
                    <td>Certain songs appear without categorization while others do </td>
                    <td>Fail</td>
                    <td>Certain songs appear with categorization while others do not</td>
                    
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>Song Duration</td>
                    <td>User should see the duration per song</td>
                    <td>User can view the song duration for each track</td>
                    <td>Pass</td>
                    <td>The song duration renders as it should</td>
                    
                </tr>
                <tr>
                    <th scope="row">7</th>
                    <td>Social Share Option</td>
                    <td>User should see a link to share the music they are listening too</td>
                    <td>User is not presented with a link to share music</td>
                    <td>Fail</td>
                    <td>There is no rendered link with social sharing options</td>                    
                </tr>
                               
            </tbody>
        </table>     
      
        
      </div>
    );
  }
}

export default TestOne;
