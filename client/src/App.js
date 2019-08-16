import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/MainPage';
import Rating from './component/NextPage/NextPage';
import Info from './component/Info/Info';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends React.Component {

  render(){
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
           <Route path="/restaurant" component={Rating} />
           <Route path="/info" component={Info} />
      </Switch>
    </BrowserRouter>
  </>
    );
  }
}

export default App;
