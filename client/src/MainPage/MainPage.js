import React from "react";
import "./MainPage.scss";
import {locationData} from './data';


console.log(locationData);

class Search extends React.Component{
  // state = {
    
  // }
whenSubmitted = (event) => {
  event.preventDefault();

  const location1 = event.target.inputtext.value;
  this.displaySearch(location1);
  console.log(location1);
}

displaySearch = (location1) => {
  
  const result = locationData.filter(item => location1 === item.id)
  
  console.log(locationData.name);
  
  
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