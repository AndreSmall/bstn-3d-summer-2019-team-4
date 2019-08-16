import React from 'react';
import "./info.scss";
import Page from "../images/Page.png";
import {Link} from 'react-router-dom';

class Info extends React.Component {
  render(){
    return(
      <>
      <div className="info">
       <img src={Page} width="1440px"/>
      </div>
     
    </>
    )
  }
}
export default Info;