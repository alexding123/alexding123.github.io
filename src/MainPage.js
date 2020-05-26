import React from 'react';
import NavbarComponent from "./Components/Navbar";
import DividerComponent from "./Components/Divider";
import IntroComponent from "./Components/Intro"
import ExperiencesComponent from './Components/Experiences';
import ProjectsComponent from "./Components/Projects";
import ClassesComponent from "./Components/Classes";
import SkillsComponenet from "./Components/Skills";
import ContactComponent from './Components/Contact';
import FooterComponent from './Components/Footer';

const MainPage = () => {
  return <div className="App" id="main">
    <NavbarComponent/>
    <div className="container fade-in">
      <IntroComponent/>
      <DividerComponent/>
      <ExperiencesComponent/>
      <DividerComponent/>
      <ProjectsComponent/>
      <DividerComponent/>
      <ClassesComponent/>
      <DividerComponent/>
      <SkillsComponenet/>
      <DividerComponent/>
      <ContactComponent/>
      <DividerComponent/>
    </div>
    <FooterComponent/>
  </div>
}

export default MainPage