import React from "react";
import { useHistory } from "react-router-dom";

// Imgs
import WeStayInTouch from "../../assets/static/img/landing/WeStayInTouch.png";
import WeWorkEnergy from "../../assets/static/img/landing/WeWorkEnergy.png";
import WeFindImg from "../../assets/static/img/landing/WeFindAnything.png";
import WeCalendar from "../../assets/static/img/landing/WeCalendar.png";
import WeFindClose from "../../assets/static/img/landing/WeFindClose.png";

// styles
import "../../assets/styles/components/Landing/Landing.scss";

// Compnents
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import LandingParagraph from "../../components/LandingParagraph/LandingParagraph";
import LandingCardSmall from "../../components/LandingCardSmall/LandingCardSmall";
import LandingCard from "../../components/LandingCard/LandingCard";
import LandingFooter from "../../components/LandingFooter/LandingFooter"

const Landing = () => {
 // History of react router dom
 const history = useHistory();

 // Go to Login
 const goToLogin = () => history.push("/login");

 // Go to Register
 const goToRegister = () => history.push("/register");

 return (
  <section className="landing-page">
   <LandingHeader goToLogin={goToLogin} isLanding isRegister />

   {/* First section */}
   <article className="landing-page__section" id="introduction">
    <div className="landing-page__section--content">
     <LandingParagraph
      title="WeDeal"
      content="The perfect place to find and connect with the best workers of your zone"
     />
     <div className="landing-page__section--cards">
      <LandingCardSmall title="What?" />
      <LandingCardSmall title="Why?" />
      <LandingCardSmall title="Who?" />
     </div>
    </div>
    <figure className="landing-page__section--img">
     <img src={WeStayInTouch} alt="We stay in touch" />
    </figure>
   </article>

   {/* Second sections */}
   <article
    className="landing-page__section landing-page__section-what"
    id="what">
    <figure className="landing-page__section--img">
     <img src={WeWorkEnergy} alt="Solve anything" />
    </figure>
    <div className="landing-page__section--content">
     <LandingParagraph
      title="What we do?"
      content="We help you to connect with the best workers of your area to solve any kind of problem that can happen to you in any momment"
      action="Register"
      position="right"
      action="register"
      onClick={goToRegister}
     />
    </div>
   </article>

   {/* Third seciton */}
   <article className="landing-page__section" id="why">
    <div className="landing-page__section--content landing-page__section--content-why">
     <LandingParagraph
      title="Why we do?"
      content="We believe in the talent of the people, Our main purpose is create new chances to all that persons that don’t have the recognition that they desrve. We want to create connections between the workers with the world"
      position="center"
     />
     <div className="landing-page__section--cards landing-page__section--cards-medium">
      <LandingCard title="What You Need" image={WeFindImg} />
      <LandingCard title="Whenever You Want" image={WeCalendar} />
      <LandingCard title="Whatever You Need" image={WeWorkEnergy} />
     </div>
    </div>
   </article>

   {/* Fourth Seciton */}
   <article className="landing-page__section" id="who">
    <div className="landing-page__section--content">
     <LandingParagraph
      title="Who we are?"
      content="We are We, a new group that search create connections between all that people with talent and don’t have the recognition that deserve yet"
      position="left"
      action="Get Started"
      onClick={goToRegister}
     />
    </div>
    <figure className="landing-page__section--img">
     <img src={WeFindClose} alt="We find the closest workers" />
    </figure>
   </article>
   <LandingFooter/>
  </section>
  
 );
};

export default Landing;
