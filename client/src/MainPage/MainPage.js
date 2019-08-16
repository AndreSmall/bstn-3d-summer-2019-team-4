import React from "react";
import "./MainPage.scss";
import {locationData} from './data';


import Card from '@material-ui/core/Card';


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
    result.className = "result";
    
    parent.appendChild(result);

  }
  
}


  render(){
    return(
      <div className="background"> 
       <div className="finery">
         FINERY
       </div>

       <div >
             <h2 className="title">Find quality food experiences.</h2>
       </div>



      <form className="form" onSubmit={this.whenSubmitted}>
        <div className="main-wrapper">
         <div className="wrapper">
          <label className="label">Enter your preferred cuisine</label>
          <input className="input" type="text" name="inputtext" placeholder=""></input>
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