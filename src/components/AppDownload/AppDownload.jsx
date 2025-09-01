import React from 'react'
import './AppDownload.css'
import {assets} from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p className='paragraph'>For Better Experience Downlaod <br></br> The Lunch Box App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>

    </div>
  )
}

export default AppDownload