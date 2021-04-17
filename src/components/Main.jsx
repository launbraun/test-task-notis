import React from 'react'
import './styles.css'
import video from '../video/video-1.mp4'

const Main = () => {
    return (
        <div className='main'>
            <video src={video} autoPlay loop muted />
            <h1>Добро пожаловать</h1>
        </div>
    )
}

export default Main
