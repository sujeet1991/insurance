import React from 'react'
import Section from '../../../HOC/Homepage';
import Lithree from './thili';
import './threestep.css';
export default function threestep() {
  return (
    <Section>
      <div className="steps_panel">
         <h4 className="steps_heading">3 simple steps to get started</h4>
         <ul className="steps_list">
            <Lithree heading="Step1" desc="Fill the simple form" bgimage="step1_icon"/>
            <Lithree heading="Step2" desc="List of offers from multiple banks" bgimage="step2_icon"/>
            <Lithree heading="Step3" desc="Quick apply in 60 seconds" bgimage="step3_icon"/>
         </ul>
      </div>
    </Section>
  )
}
