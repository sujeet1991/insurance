import React, { Component } from 'react'
import Section from '../../../HOC/Homepage';
import Policy from './coveredpolicy';

import {Link} from 'react-router-dom';

export default class covered extends Component {
    state={
        tabshow:'yes',
        tabactive:'activetabhome',
        cover:[]
        
        
    }
    tabhandler=(data,e)=>{
        //console.log(e.target);
         this.setState({
             tabshow:data
       })
     
    }
    
    componentDidMount(){
       
        this.setState({
            cover:Policy
        });
       
    }
   
    viewHandler=(list,conlist)=>{
        return this.descHandal(list[conlist])
    }
   
    descHandal(datalist){
        return datalist.map((cur,index)=>{
            return(
                <li key={index}>
				  	<p className={`tabs_icon ${cur.icon}`}></p>
				    <p className="tabs_heading">{cur.heading}</p>
				  	<p className="tabs_copy">{cur.desc}</p>
				  	 	</li>
            )
        })
    }
   
    
   
    
    
  render() {
    var datadisplay=null;
     //let yesno = this.state.tabshow;
    //console.log(this.state.cover)
    //console.log(typeof(Policy.yes))
     //this.viewHandler(this.state.cover,yesno)
     if((this.state.cover).length!==0){
        datadisplay= this.viewHandler(this.state.cover,this.state.tabshow);
     }
    
    return (
      <Section>
        <div className="tab_panel tab">
            <ul className="nav nav-tabs">
                <li className="nav-item"><Link to="" onClick={this.tabhandler.bind(this,'yes')} className={`nav-link ${this.state.tabshow==='yes'? this.state.tabactive:''}`}>What is covered?</Link></li>
                <li className="nav-item"><Link to="" onClick={this.tabhandler.bind(this,'no')} className={`nav-link ${this.state.tabshow==='no'? this.state.tabactive:''}`}>What is not covered?</Link></li>
            </ul>
            <div className="tab-content">
            
               
                <div className="tab-pane " style={{display:'block'}}>
                <ul className="tabs_list">
                {datadisplay} 
                </ul>
                   
                </div>
                
                
            
                
                
            </div>
        </div>
      </Section>
    )
  }
}
