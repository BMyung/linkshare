import React from "react"
import headshot from './0.jfif'

export class Header extends React.Component{
    render(){
        return (
        <div className="header">
        <img src={headshot} alt="JohnG headshot" className="headshot" />
            <h2>John Guastaferro</h2>
            <h3>Connecting People to the Extraordinary</h3>
        </div>
        )
    }
}