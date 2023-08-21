import React from "react";
import img from "../images/sem-hero-man.png";
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

      {/* --------------------------------------section2 starts----------------------------------------- */}

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

      <div className="homesection4">
        <h1>Need an enterprise-grade solution? </h1>
        <p> SurveyMonkey Enterprise empowers organizations to gain insights from</p>
        <p>customers, employees, and the market—securely and at scale.</p>
      </div>

      <div className="homesection5">
        <div className="homesection5child">
          <h1>Contact us today</h1>
          <p>Learn more about SurveyMonkey Enterprise and schedule a demo.</p>
          <li>Manage multiple users and gain visibility into all survey data collected across your organization with admin controls and dashboards.</li>
          <li>Ensure confidential data is protected with enhanced security including encryption, SSO, and features that help you remain compliant with HIPAA and GDPR.</li>
          <li>Make feedback automated and actionable by connecting to key business systems using APIs and powerful integrations, including Salesforce, Marketo, Tableau, and more.</li>
        </div> 
        <div className="homesection5child">
          
        </div>
      </div>
    </div>
  );
}
