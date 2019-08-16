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
    result.className = "result";
    
    parent.appendChild(result);

  }
}


  render(){
    return(
      <div className="background"> 
       <div >
             <h2 className="title">Find quality food experiences.</h2>
       </div>



      <form className="form" onSubmit={this.whenSubmitted}>
        <div className="main-wrapper">
         <div className="wrapper">
          <label className="label">Enter your preferred cuisine</label>
          <input className="input" type="text" name="inputtext" placeholder="Location"></input>
         </div>
         <button className="button">Search near me</button>
        </div>
      </form>

      <div className="search-result">
       
      </div>
      </div>
    )
  }
}

export default Search; 