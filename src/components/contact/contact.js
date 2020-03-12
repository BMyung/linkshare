import React from 'react'

export class Contact extends React.Component {
    render(){
        return (
            <div className='contact'>
                <div className='phone contactInfo'>
                <a href='tel:7149040274'><span className='icon'><i className="fas fa-phone-alt"></i>714-904-0274</span></a>
                </div>
                <div className= 'email contactInfo'>
                <a href='mailto:john@onedegreeconnect.com'><span className='icon'><i className="fas fa-envelope"></i>john@onedegreeconnect.com</span></a>
                </div>
            </div>
        )
    }
}