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
 
 
  console.log(result);

   this.createResult(result)
  
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