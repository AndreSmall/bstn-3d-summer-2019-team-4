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

   this.createResult(result);
  
}

 
createResult = (array) => {
 
  const parent = document.querySelector('.search-result');

  for (let i = 0; i < array.length; i++) {

    const result = document.createElement('div');
    result.innerHTML = array[i].name;
    
    parent.appendChild(result);
  }
  
}



  render(){
    return(
      <>
      <form onSubmit={this.whenSubmitted}>
        <label>Location</label>
        <input type="text" name="inputtext" placeholder="Location"></input>
        <button>Search</button>
      </form>

      <div className="search-result">
       
      </div>
      </>
    )
  }
}

export default Search; 