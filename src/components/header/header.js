import React from "react"
import headshot from './0.jfif'

export class Header extends React.Component{
    render(){
        return (
        <div className="header">
        <img src={headshot} alt="JohnG headshot" className="headshot" />
            <h1>John Guastaferro</h1>
            <h2>Connecting People to the Extraordinary</h2>
        </div>
        )
    }
}