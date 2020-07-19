import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Enroll from './Enroll/Enroll';
import Date from './Date/Date';
import MoreInfo from './MoreInfo/MoreInfo';
import Suport from './Suport/Suport';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, enrollData, dateData, moreInfoData, suportData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [enroll, setEnroll] = useState([]);
  const [date, setDate] = useState([]);
  const [moreInfo, setMoreInfo] = useState([]);
  const [suport, setSuport] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setEnroll([...enrollData]);
    setDate([...dateData]);
    setMoreInfo([...moreInfoData]);
    setSuport([...suportData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, enroll, date, moreInfo, suport, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Enroll />
      <Date />
      <MoreInfo />
      <Suport />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
