import React from "react";
import './NextPage.scss';
import {Link} from 'react-router-dom';
import Card1 from "../images/Card1.png";
import Card2 from "../images/Card2.png"
import Card3 from "../images/Card3.png"
import Card4 from "../images/Card4.png"


class Rating extends React.Component{
  render(){
    return(
      <div className="res">
        <div className="res__list">
        <h1>Great Places Near You</h1>
        <div className='res__card'>
        <Link to="/info">
          <img src={Card1}/>
          
        </Link>
        </div>
        
        <div className='res__card'>
        <Link to="/info">
          <img src={Card2}/>
          
        </Link>
        </div>

        <div className='res__card'>
        <Link to="/info">
          <img src={Card3}/>
        </Link>
        </div>

        <div className='res__card'>
        <Link to="/info">
          <img src={Card4}/>
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