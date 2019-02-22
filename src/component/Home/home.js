import React, { Component } from 'react'

import Slider from './slider';
import Infopanel from './infopanel';
import Threestep from './threestep/threestep';
import Cover from './covered/covered';
import './home.css';
import '../../assets/css/color.css';

export default class home extends Component {
  render() {
    return (
        <React.Fragment>
            <Slider/>
            <div className="gray_bg">
                <Infopanel/>
                <Threestep/>
                <Cover/>
            </div>
        </React.Fragment>
    )
  }
}
