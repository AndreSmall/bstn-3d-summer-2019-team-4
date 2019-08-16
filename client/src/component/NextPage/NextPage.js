import React from "react";
import './NextPage.scss';
import {Link} from 'react-router-dom';

class Rating extends React.Component{
  render(){
    return(
      <div className="res">
        <div className="res__list">
        <h1>Great Places Near You</h1>
        <div className='res__card'>
        <Link to="/restaurant">
          <img/>
          <p>Name</p>
          <p>Location</p>
          <p>Cuisine type</p>
          <p>Rating</p>
        </Link>
        </div>
        
        <div className='res__card'>
        <Link to="/restaurant">
          <img/>
          <p>Name</p>
          <p>Location</p>
          <p>Cuisine type</p>
          <p>Rating</p>
        </Link>
        </div>

        <div className='res__card'>
        <Link to="/restaurant">
          <img/>
          <p>Name</p>
          <p>Location</p>
          <p>Cuisine type</p>
          <p>Rating</p>
        </Link>
        </div>

        <div className='res__card'>
        <Link to="/restaurant">
          <img/>
          <p>Name</p>
          <p>Location</p>
          <p>Cuisine type</p>
          <p>Rating</p>
        </Link>
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