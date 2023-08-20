import React from 'react'
import img from '../images/sem-hero-man.png'
import '../style/home.css'
export default function Home() {
  return (
    <div className='home'>
     <div className="homesection1">
      <div className="homesection1child1">
      <h1>Get answers with surveys</h1>
      <p>Be the person with great ideas. Surveys give you actionable insights and fresh perspectives.</p>
      <div>
      <button className="homebtn1 homebtn">Go premium</button>
      <button className="homebtn2 homebtn">Sign up free</button>
      </div>
      </div>
      <div className="homesection1child2">
        <img src={img} alt="" />
      </div>
     </div>
    </div>
  )
}
