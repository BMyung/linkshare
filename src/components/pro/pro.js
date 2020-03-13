import React from 'react'
import {Card} from '../card/card'
import {Social} from '../social/social'


export class Professional extends React.Component{
    constructor(props){
        super(props);
        this.state={
            linkList: testlist,
            // button: buttons
    }};
render(){
    return (
        <div className = 'cat1'>
      {this.state.linkList.map((d) => {
         return (<Card item={d} key={d.title}/>)
       })}
       <Social />
       
      </div>
    )}};

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
    img: 'Samueli-ACF-Anaheim-Community-Impact-Grant.jpg',
    url: 'http://www.anaheimcf.org/'
}];


