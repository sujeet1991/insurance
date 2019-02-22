import React from 'react'

export default function thili(props) {
  return (
        <li>
            <span className={`step_icons ${props.bgimage}`}></span>
            <span className="step_txt">{props.heading}</span>
            <span className="step_copy">{props.desc}</span>
        </li>
  )
}
