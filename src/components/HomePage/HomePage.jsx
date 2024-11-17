import React from 'react'
import './HomePage.css'
import homePhoto from "../../assets/homePage.png";


export default function HomePage() {
  return (
    <div className='HomePage'>
      <div className="LeftHomePage">
        <h3>We Care About Your <br/> Dental Health.</h3>
        <p>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. <br /> healthy mouth, free of infections, injuries and other problems .</p>
        <div className="BtnBlock">
          <button className='AppoinmentBtn'>Appoinment</button>
          <button className='WatchVideoBtn'><i className="fa-solid fa-circle-play"></i>Watch Video</button>
        </div>
      </div>
      <div className="RightHomePage">
      <img src={homePhoto} alt="img" className='HomePagePhoto'/>
        <div className="RightBar"></div>
       
      </div>
    </div>
  )
}
