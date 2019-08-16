import React from "react";
import "./MainPage.scss";
import {locationData} from './data';


console.log(locationData);

class Search extends React.Component{
  // state = {
    
  // }
whenSubmitted = (event) => {
  event.preventDefault();

  const location = event.target.inputtext.value;
  this.displaySearch(location);
  console.log(location);
}

displaySearch = (location) => {
  
  const result = locationData.filter(item => location === item.id)
  
  console.log(result);
  
  
}




  render(){
    return(
      <>
      <form onSubmit={this.whenSubmitted}>
        <label>Location</label>
        <input type="text" name="inputtext" placeholder="Location"></input>
        <button>Search</button>
      </form>
      </>
    )
  }
}

export default Search; 