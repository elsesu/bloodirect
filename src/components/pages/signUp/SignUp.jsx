import React from 'react'
import { useState } from "react";
import HeroComponent from "../../sections/hero/hero-component";
import ContactComponent from "../../sections/contact/ContactComponent";
import ContactDetailsComponent from "../../sections/details/details-component";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";
import SignUpCard from '../../sections/signUp/SignUpCard';

import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const SignUp = () => {
    const ContactPageDetails = {
		hero: {
			subheadingText: "Got any Questions?",
			headingText: "Don't Know What to Do? Let Us Assist You.",
			classHint: "contact-page-hero",
		},
	};



  return (
    <>
    <HeaderComponent />

    <HeroComponent {...ContactPageDetails.hero} />
 
    <SignUpCard heading={"Sign Up"}
        buttonText={"Sign Up"}/>
  
    <BeforeFooterCTA />
    <FooterComponent />
</>
  )
}

export default SignUp
