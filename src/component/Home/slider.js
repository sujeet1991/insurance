import React from 'react'
import Section from '../../HOC/Homepage';
import {Link} from 'react-router-dom';
export default function slider() {
  return (
    <div className="container-full">
      <Section>
          <div className="">
              <div className="col-md-12">
                  <div className="hero_content">
                  <h1 className="scnd-txt">
		                Have you protected yours &amp; your loved ones health? 
		            </h1>
                    <Link to="/step1" className="btn btn-primary">Get Quote <span className="start_icon"></span></Link>
                  </div>
              </div>
          </div>
      </Section>
    </div>
  )
}
