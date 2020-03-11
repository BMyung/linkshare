import React from "react"

export class Card extends React.Component{
    render(){
        const divStyle = {
            backgroundImage: 'url(' + this.props.item.img + ')',
          };
        return (
        <div>
            <a href={this.props.item.url} className='card' style={divStyle}>
            <div className="caption">
            <h2 className = "cardTitle">{this.props.item.title}</h2>
            <h3>{this.props.item.tagline}</h3>
        </div>
            </a>
        </div>

    )
}
}
