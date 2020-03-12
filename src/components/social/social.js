import React from 'react'

export class Social extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // linkList: testlist,
            button: buttons
    }};
    render (){
        const socialLinks = this.state.button.map(i => <li className='button' key= {i.url}style={{backgroundColor: i.bg}}><a className = 'buttonLink'
        href={i.url}><span className='icon'><i className={i.fa}></i></span></a></li>)
        return (
            <div className='socialMedia'>
            <div className='iconContainer'>
            <ul>
                {socialLinks}
            </ul>
            </div>
            </div>
        )
    }


}

const buttons = [{
    url: 'https://www.facebook.com/johnGmagic',
    fa: 'fab fa-facebook-f',
    bg: '#3b5998'},
    {url: 'https://www.linkedin.com/in/johnguastaferro/',
    fa: 'fab fa-linkedin-in',
    bg: '#0077B5'
    },
    {
        url: 'http://www.instagram.com/johngmagic',
        fa : 'fab fa-instagram',
        bg: '#bc2a8d'
    },
    {url: 'https://twitter.com/johngmagic',
    fa:"fab fa-twitter",
    bg: '#1DA1F2'
    }

];