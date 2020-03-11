import React from 'react'
import {Card} from '../card/card'

export class Professional extends React.Component{
    constructor(props){
        super(props);
        this.state={
            linkList: testlist,
    }};
render(){
    return (
        <div className = 'cat1'>
      {this.state.linkList.map(function(d){
         return (<Card item={d} className="card"/>)
       })}
      </div>
    )
}
}
const testlist = [{
    title: 'John G Entertainment',
    tagline: 'Live Entertainment at its best',
    img: 'magic.jpg',
    url: 'http://www.magicjohng.com/'
},
{
    title:'One Degree Connect',
    tagline: 'Connecting Teams to Greatness', 
    img: 'audience.jpg',
    url: 'http://www.onedegreeconnect.com/'
},
{
    title: 'Anaheim Community Foundation',
    tagline: '',
    img: 'http://www.anaheimcf.org/wp-content/uploads/2018/07/acf-logo-new.jpg',
    url: 'http://www.anaheimcf.org/'
}];