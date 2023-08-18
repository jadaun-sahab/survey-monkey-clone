import React, { Component } from 'react'
import "../style/navbar.css";
import { Link } from 'react-router-dom';



export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleToggleClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { isActive } = this.state;

    return (
    <>  
      <div id="navbar">
     
          <div className='navbar'>
               <div id="logo">NewsMonkey</div>
               <div className={`navbar2 ${isActive ? 'active' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Market</Link></li>
                    <li><Link to="/">Why Choose us</Link></li>
                    <li><Link to="/">Join us</Link></li>
               </div>
               <div className={`nav3 ${isActive ? 'active' : ''}`}>
                    <li><Link to="/"><i className="fa-brands fa-twitter"></i></Link></li>
                    <li><Link to="/"><i className="fa-solid fa-gamepad"></i></Link></li>
               </div>
          </div>
          <i className="fabars" onClick={this.handleToggleClick}>{isActive ? <i className="fa-regular fa-x"></i> : <i className="fa-solid fa-bars"></i>}
          </i>
      </div>
    </>
    );
  }
}