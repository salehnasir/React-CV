import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import pic from "./image/nasir.jpg"

import phone from "./image/phone.jpg"
import email from "./image/email.png"
import location from "./image/location.png"
import html5 from "./image/html2.png"
import css from "./image/css2.png"
import js from "./image/javascript.png"
import express from "./image/express.png"
import node from "./image/node.png"
import boot from "./image/png-transparent-responsive-web-desbootstrap.png"
import weather from "./image/weatherapp.png"
import trello from "./image/trello.png"
import belog from "./image/Belonging.jpg"



function Hi() {
  return <div>
    
    <div className='contact'>
      <img className='img' src={pic} alt='nasirpic'></img>

      <br></br>
      <h1 className='nameh'><i>SALEH NASIR</i></h1>
      <h2 className='nameh'>(MERN Stack Developer)</h2>
      <p className='logoicon'>
      <a href="tel:+923463587232"><img className='phone' alt='phoneicon' src={phone}/></a>

      
      <a href="mailto:nasirali617@gmail.com"><img className='phone' alt='emailicon' src={email}/></a>

      
      <a href="https://www.google.com/maps/search/m.c+1006+green+town+shah+faisal+town+karachi/@24.8801885,67.1567042,16z/data=!3m1!4b1?entry=ttu:"><img className='phone' alt='location' src={location}/></a></p>
          <div className='line'><h1 className='name'>Skills</h1></div>
          
          <div className='skill'>
            <img className='skilogo' src={html5} alt=''></img>
            <img className='skilogo' src={css} alt=''></img>
            <img className='skilogo' src={js} alt=''></img>
            <br></br>
            <img className='skilogo' src={express} alt=''></img>
            <img className='skilogo' src={node} alt=''></img>
            <img className='skilogo' src={boot} alt=''></img>
          </div>
          <div className='line'><h1 className='name'>Projects</h1></div>
          
          <div className='skill'>
          <figure>
          <img className='projectlogo' src={weather} alt=''></img>
          <figcaption><a href='https://salehnasir.github.io/weather_app/'>Weather App</a></figcaption>
          </figure>
          <figure>
            <img className='projectlogo' src={trello} alt=''></img>
<figcaption><a href='https://salehnasir.github.io/Canvas/'>Trello Clone</a></figcaption>
            </figure>
            <figure>
            <img className='projectlogo' src={belog} alt=''></img>
<figcaption ><a href='https://salehnasir.github.io/hackathon-smit/'>Belonging APP</a></figcaption>
            </figure>
          </div>
          <div className='line'>
            <h1 className='name'>Education</h1></div>
            <ul>
              <li><h3>B-Tech (Electronics)</h3>Indus University Karachi<p>From 2011 TO 2013</p></li>
            
              <li><h3>DAE (Electronics)</h3>Sindh Board of Technical Education <p>From 2007 TO 2009</p></li>
            
              <li><h3>Matric (TSC)</h3>Sindh Board of Technical Education Karachi<p>From 2011 TO 2013</p></li>
            </ul>
          
          <div className='line'><p class="center">Thanks For <i>Visiting</i> Regards! <i>SALEH NASIR;</i></p></div>
          
    </div>
  </div >
}

ReactDOM.render(<Hi />, document.querySelector('#root'));