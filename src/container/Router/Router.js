import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../../component/Home/home';
import Step1 from '../../component/Step1/Step1';

 class Router extends Component {
  render() {
    return (

      <React.Fragment>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/step1" component={Step1}/>
        </Switch>
      </React.Fragment>
        
      
    )
  }
}
export default Router;
