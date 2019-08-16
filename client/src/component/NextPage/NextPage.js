import React from "react";
import './NextPage.scss';

class Rating extends React.Component{
  render(){
    return(
      <div className="res">
        <div className="res__list">
        <h1>Great Places Near You</h1>
        <div className='res__card'>
          <img/>
          <p>Name</p>
          <p>Location</p>
          <p>Cuisine type</p>
          <p>Rating</p>
        </div>
        
        <div className='res__card'>
          <img/>
          <p>Name</p>
          <p>Location</p>
          <p>Cuisine type</p>
          <p>Rating</p>
        </div>

        <div className='res__card'>
          <img/>
          <p>Name</p>
          <p>Location</p>
          <p>Cuisine type</p>
          <p>Rating</p>
        </div>

        <div className='res__card'>
          <img/>
          <p>Name</p>
          <p>Location</p>
          <p>Cuisine type</p>
          <p>Rating</p>
        </div>
      </div>
      <div className="res__iframe">
        <iframe src="https://public.tableau.com/shared/RR7WFDMBK?:display_count=yes&:showVizHome=no:embed=true" width='600px' height='600px'></iframe>
      </div>
      </div>
      
    )
  }
}

export default Rating;