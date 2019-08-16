import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/MainPage';
import NextPage from './component/NextPage/NextPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends React.Component {

  render(){
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          {/* <Route path="/restaurant" component={NextPage} />
          <Route path="/restaurant/:id" component={NextPage} /> */}
      </Switch>
    </BrowserRouter>
  </>
    );
  }
}

export default App;
