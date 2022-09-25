import React from 'react'
import { useState, useEffect } from "react";

import { TopNavigation } from "./components/topnavigation";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Signin } from "./components/Signin";
// import SignUpPage from "./components/SignUp";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {topnavigation} from "./components/topnavigation"
//import styles from "./App.module.scss";
//import Users from "./components/Users";
//import { FormInput } from "./components/form-input"


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
 speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
   
    <div>
      
      <TopNavigation />
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Signin data={landingPageData.Signin} />
      
      <Contact data={landingPageData.Contact} />
      
      
      
    </div>
  );
};

export default App;
