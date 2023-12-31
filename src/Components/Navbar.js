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
               <div id="logo"><Link to="/">SurvayMonkey</Link></div>
               <div className={`navbar2 ${isActive ? 'active' : ''}`}>
                    <li><Link to="/">PRODUCT</Link></li>
                    <li><Link to="/">TEMPLATE</Link></li>
                    <li><Link to="/PRICING">PRICING</Link></li>
                    <li><Link to="/ENTERPRISE">ENTERPRISE</Link></li>
                    <li><Link to="/">RESOURCES</Link></li>
               </div>
               <div className={`nav3 ${isActive ? 'active' : ''}`}>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/">Signup free</Link></li>
               </div>
          </div>
          <i className="fabars" onClick={this.handleToggleClick}>{isActive ? <i className="fa-regular fa-x"></i> : <i className="fa-solid fa-bars"></i>}
          </i>
      </div>
    </>
    );
  }
}