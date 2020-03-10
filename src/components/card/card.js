import React from "react"

export class Card extends React.Component{
    render(){
        const divStyle = {
            backgroundImage: 'url(' + this.props.item.img + ')',
          };
        return (
        <div className = 'card' style={divStyle}>
            <h2 className = "cardTitle">{this.props.item.title}</h2>
            <h3>{this.props.item.tagline}</h3>
        </div>
    )
}
}
