import React from "react";
import img from "../images/sem-hero-man.png";
import img2 from "../images/sem-videotest-wistia-v6.png";
import img3 from "../images/Allbirds-slate.png";
import img4 from "../images/Tweezerman-slate.png";
import img5 from "../images/box-logo-grey-3x-360x121.webp";
import img6 from "../images/Verizon-slate.png";
import img7 from "../images/sephora-logo.png";
import img8 from "../images/midnight-plug.png";
import "../style/home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div id="home">
      <div className="home">
        {/* --------------------------------------section2 starts----------------------------------------- */}

        <div className="homesection1">
          <div className="homesection1child1">
            <h1>Get answers with surveys</h1>
            <p>
              Be the person with great ideas. Surveys give you actionable
              insights and fresh perspectives.
            </p>
            <div className="buttons">
              <button className="homebtn1 homebtn">Go premium</button>
              <button className="homebtn2 homebtn">Sign up free</button>
            </div>
          </div>
          <div className="homesection1child2">
            <img src={img} alt="" />
          </div>
        </div>
      </div>

      {/* --------------------------------------section2 starts----------------------------------------- */}

      <div className="homesection2">
        <div className="homesection2child1">
          <i>Go to:</i>
          <li>
            <Link to="/">Pricing | </Link>
          </li>
          <li>
            <Link to="/"> Enterprise | </Link>
          </li>
          <li>
            <Link to="/"> How it works | </Link>
          </li>
          <li>
            <Link to="/"> Templates | </Link>
          </li>
          <li>
            <Link to="/"> Create a survey</Link>
          </li>
        </div>

        <div className="homesection2child2">
          <h1>Choose from our most popular plans</h1>
        </div>
        <div className="homesection2child3">
          <p>
            Get an individual plan with{" "}
            <Link to="">features that fit your needs</Link>, or create a team
            instead!
          </p>
        </div>
      </div>

      {/* --------------------------------------section3 starts----------------------------------------- */}

      <div className="homesection3">
        <div className="homesection3child homesection3child1">
          <h2>Individual Advantage</h2>
          <div>
            <h1>₹1,999</h1>
            <p>/ month</p>
            <p>Billed ₹23,988 annually</p>
            <button>Sign up</button>
            <p>
              Tools to help individuals create, send, and analyze surveys—in a
              snap.
            </p>
          </div>
        </div>
        <div className="homesection3child homesection3child2">
          <h2>Team Advantage</h2>
          <div>
            <h1>₹1,550</h1>
            <p>per user / month</p>
            <p>Starting at 3 users, billed annually</p>
            <button>Sign up</button>
            <p>
              Collaboration tools and survey features that help your team work
              more efficiently.
            </p>
          </div>
        </div>
        <div className="homesection3child homesection3child3">
          <h2>Team Premier</h2>
          <div>
            <h1>₹3,800</h1>
            <p>per user / month</p>
            <p>Starting at 3 users, billed annually</p>
            <button>Sign up</button>
            <p>
              Our best team features to launch advanced surveys and analyze
              results quickly.
            </p>
          </div>
        </div>
      </div>


      {/* --------------------------------------section4 starts----------------------------------------- */}



      <div className="homesection4">
        <h1>Need an enterprise-grade solution? </h1>
        <p> SurveyMonkey Enterprise empowers organizations to gain insights from</p>
        <p>customers, employees, and the market—securely and at scale.</p>
      </div>


      {/* --------------------------------------section5 starts----------------------------------------- */}



      <div className="homesection5">
        <div className="homesection5child1">
          <h1>Contact us today</h1>
          <p>Learn more about SurveyMonkey Enterprise and schedule a demo.</p>
          <div>
            <li></li>
            <li>Manage multiple users and gain visibility into all survey data collected across your organization with admin controls and dashboards.</li>
          </div>
          <div>
            <li></li>
            <li>Ensure confidential data is protected with enhanced security including encryption, SSO, and features that help you remain compliant with HIPAA and GDPR.</li>
          </div>
          <div>
            <li></li>
            <li>Make feedback automated and actionable by connecting to key business systems using APIs and powerful integrations, including Salesforce, Marketo, Tableau, and more.</li>
          </div>
        </div> 
        <div className="homesection5child2">
        <div>
            First name*
            <input type="text" name="" id="" />
          </div>
          <div>
            Last name*
            <input type="text" name="" id="" />
          </div>
          <div>
            Business email *
            <input type="text" name="" id="" />
          </div>
          <div>
            Job title *
            <input type="text" name="" id="" />
          </div>
          <div>
            Company *
            <input type="text" name="" id="" />
          </div>
          <div>
            Phone number *
            <input type="text" name="" id="" />
          </div>
          <div>
            Country*
            <input type="text" name="" id="" />
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <li>I wish to receive other information about Momentive like product updates, news, information, and special promotions.
            Visit the Privacy Notice for information on how we use your information.
            You can unsubscribe anytime using a link at the bottom of our communications.
            By clicking 'Contact sales', I agree to use of my details to contact me about my specific request or inquiry.</li>
          </div>
          <div>
            <button>Contact sales</button>
          </div>
        </div>
      </div>


            {/* --------------------------------------section6 starts----------------------------------------- */}


      <div className="homesection6">
        <div className="homesection6child1">
          <img src={img2} alt="" />
        </div>
        <div className="homesection6child2">
        <h1>Everything you need to create the best surveys</h1>
          <div>
            <li></li>
            <li>Get access to survey templates that speak to customers, employees, or your target audience.</li>
          </div>
          <div>
            <li></li>
            <li>Choose from expert-written sample questions to include in your surveys.</li>
          </div>
          <div>
            <li></li>
            <li>Score your surveys to estimate their success rates with SurveyMonkey Genius.</li>
          </div>
          <div>
            <li></li>
            <li>Explore our best practices for creating the even the most sophisticated surveys.</li>
          </div>
        </div>
      </div>


      {/* --------------------------------------section7 starts----------------------------------------- */}


      <div className="homesection7">
        <h1>95% of the Fortune 500 rely on SurveyMonkey</h1>
        <div>
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
        </div>
        <h2>Get survey templates to help you get started</h2>
      </div>


      {/* --------------------------------------section8 starts----------------------------------------- */}


      <div className="homesection8">
      <div className="homesection8child">
          <i class="fa-regular fa-comments"></i>
          <h1>Customer satisfaction</h1>
          <h4>Lorem ipsum dolor sit amet consectetur  elit. Distinctio voluptate vero debitis.</h4>
          <p>Learn more</p>
        </div>
        <div className="homesection8child">
          <i class="fa-brands fa-researchgate"></i>
          <h1>Employee engagement</h1>
          <h4>Lorem ipsum dolor sit amet consectetur  elit. Distinctio voluptate vero debitis.</h4>
          <p>Learn more</p>
        </div>
        <div className="homesection8child">
          <i class="fa-solid fa-magnifying-glass"></i>
          <h1>Market research</h1>
          <h4>Lorem ipsum dolor sit amet consectetur  elit. Distinctio voluptate vero debitis.</h4>
          <p>Learn more</p>
        </div>
        <div className="homesection8child">
          <i class="fa-solid fa-calendar-check"></i>
          <h1>Event planning</h1>
          <h4>Lorem ipsum dolor sit amet consectetur  elit. Distinctio voluptate vero debitis.</h4>
          <p>Learn more</p>
        </div>
        <div className="homesection8child">
          <i class="fa-solid fa-book-open-reader"></i>
          <h1>Education and schools</h1>
          <h4>Lorem ipsum dolor sit amet consectetur  elit. Distinctio voluptate vero debitis.</h4>
          <p>Learn more</p>
        </div>
        <div className="homesection8child">
          <i class="fa-solid fa-heart-pulse"></i>
          <h1>Healthcare</h1>
          <h4>Lorem ipsum dolor sit amet consectetur  elit. Distinctio voluptate vero debitis.</h4>
          <p>Learn more</p>
        </div>
      </div>


      {/* --------------------------------------section9 starts----------------------------------------- */}


      <div className="homesection9">
        <div className="homesection9child1">
        <img src={img8} alt="" />
        </div>
        <div className="homesection9child2">
          <h1>Reach anyone, anywhere</h1>
          <p>Connect with people via email, your website, social media, and more. With our expert, pre-written templates, you can create surveys, polls, or quizzes in minutes!</p>
          <button>Sign up free</button>
        </div>
      </div>


      {/* --------------------------------------section10 starts----------------------------------------- */}


      <div className="homesection10">
        <h1>Aren't you just a little curious?</h1>
        <button>Get started</button>
      </div>


      {/* --------------------------------------section11 starts----------------------------------------- */}


      <div className="homesection11">
        <div className="homesection11child1">
          <div>
          Community:
          </div>
          <div>
            <li><Link to="/">Developers</Link></li>
            <li><Link to="/">Facebook</Link></li>
            <li><Link to="/">Twitter</Link></li>
            <li><Link to="/">Linkedin</Link></li>
            <li><Link to="/">Our Blog </Link></li>
            <li><Link to="/">Instagram</Link></li>
            <li><Link to="/">Youtube</Link></li>
          </div>
        </div>

        <div className="homesection11child1">
          <div>
          About Us:&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div>
            <li><Link to="/">Leadership Team</Link></li>
            <li><Link to="/">App Directory</Link></li>
            <li><Link to="/">Newsroom</Link></li>
            <li><Link to="/">Office Locations</Link></li>
            <li><Link to="/">Imprint</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/">Sitemap</Link></li>
            <li><Link to="/">Help</Link></li>
            <li><Link to="/">Log In</Link></li>
            <li><Link to="/">Sign Up</Link></li>
          </div>
        </div>

        <div className="homesection11child1">
          <div>
          Policies:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div>
            <li><Link to="/">Leadership Team</Link></li>
            <li><Link to="/">App Directory</Link></li>
            <li><Link to="/">Newsroom</Link></li>
            <li><Link to="/">Office Locations</Link></li>
            <li><Link to="/">Imprint</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/">Sitemap</Link></li>
            <li><Link to="/">Help</Link></li>
            <li><Link to="/">Log In</Link></li>
            <li><Link to="/">Sign Up</Link></li>
            <li><Link to="/">Leadership Team</Link></li>
            <li><Link to="/">App Directory</Link></li>
            <li><Link to="/">Newsroom</Link></li>
            <li><Link to="/">Office Locations</Link></li>
            <li><Link to="/">Imprint</Link></li>
            <li><Link to="/">Careers</Link></li>
          </div>
        </div>

        <div className="homesection11child1">
          <div>
          Use Cases:&nbsp;&nbsp;&nbsp;
          </div>
          <div>
            <li><Link to="/">Leadership Team</Link></li>
            <li><Link to="/">App Directory</Link></li>
            <li><Link to="/">Newsroom</Link></li>
            <li><Link to="/">Office Locations</Link></li>
            <li><Link to="/">Imprint</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/">Sitemap</Link></li>
            <li><Link to="/">Help</Link></li>
            <li><Link to="/">Log In</Link></li>
            <li><Link to="/">Sign Up</Link></li>
            <li><Link to="/">Help</Link></li>
            <li><Link to="/">Log In</Link></li>
            <li><Link to="/">Sign Up</Link></li>
            
          </div>
        </div>

        <div className="homesection11child1">
          <div className="spacing">
          
          </div>
          <div>
            <li><Link to="/">Leadership Team</Link></li>
            <li><Link to="/">App Directory</Link></li>
            <li><Link to="/">Newsroom</Link></li>
            <li><Link to="/">Office Locations</Link></li>
            <li><Link to="/">Imprint</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/">Sitemap</Link></li>
            <li><Link to="/">Help</Link></li>
            <li><Link to="/">Log In</Link></li>
            <li><Link to="/">Sign Up</Link></li>
            <li><Link to="/">Leadership Team</Link></li>
            <li><Link to="/">App Directory</Link></li>
            <li><Link to="/">Newsroom</Link></li>
            <li><Link to="/">Office Locations</Link></li>
            <li><Link to="/">Imprint</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/">Sitemap</Link></li>
            <li><Link to="/">Help</Link></li>
            <li><Link to="/">Log In</Link></li>
            <li><Link to="/">Sign Up</Link></li>
          </div>
        </div>

        <div className="homesection11child1">
          <div className="spacing">
           
          </div>
          <div>
            <li><Link to="/">Leadership Team</Link></li>
            <li><Link to="/">App Directory</Link></li>
            <li><Link to="/">Newsroom</Link></li>
            <li><Link to="/">Office Locations</Link></li>
            <li><Link to="/">Imprint</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/">Sitemap</Link></li>
            <li><Link to="/">Help</Link></li>
            <li><Link to="/">Log In</Link></li>
            <li><Link to="/">Sign Up</Link></li>
            <li><Link to="/">Leadership Team</Link></li>
            <li><Link to="/">App Directory</Link></li>
            <li><Link to="/">Newsroom</Link></li>
            <li><Link to="/">Office Locations</Link></li>
            <li><Link to="/">Imprint</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/">Sitemap</Link></li>
            <li><Link to="/">Help</Link></li>
            <li><Link to="/">Log In</Link></li>
            <li><Link to="/">Sign Up</Link></li>
          </div>
        </div>
 <hr style={{ width: "85%", margin:"2rem auto 0 auto" }}/>
      </div>

      {/* --------------------------------------section11 ends----------------------------------------- */}
<footer>Copyright © 1999-2023 SurveyMonkey</footer>
    </div>
  );
}
