import React from 'react'
import cover from './guitarra.jfif'

export class Music extends React.Component {
    constructor(props){
        super(props);
        this.state={
            musicStore: storeList
        }
    }
    render (){
    const storeLinks = this.state.musicStore.map(d => <li className='storeButton' key= {d.text}><a href={d.url} style={{color: d.bg}}><span className='icon'><i className={d.img}></i>{d.text}</span></a></li>)
        return (
            <div className='music'>
                <img src={cover} alt='guitar album cover' className='cover'/>
                <h2>Discover John's latest album</h2>
                <ul className='musicStores'>
                    {storeLinks}
                </ul>

            </div>
        )
    }
}

const storeList = [{
    text: 'GUITARRA on iTunes',
    url: 'http://itunes.apple.com/album/id1498055997?ls=1&app=itunes',
    img: 'fab fa-itunes-note', 
    bg: '#0070c9'
},
{
    text: 'GUITARRA on Apple Music',
    url: 'http://itunes.apple.com/album/id/1498055997',
    img: 'fab fa-apple',
    bg: '#da0f47',
},
{
    text: 'GUITARRA on Spotify',
    url: 'https://open.spotify.com/album/7m6vFG62jEdOpqBYitIPcY?si=G-_VtCAHSfG8WSLuX6-qpg',
    img: 'fab fa-spotify',
    bg: '#1DB954'
}]