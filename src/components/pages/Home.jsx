import React from 'react'
import Hero from '../Hero/Hero'
import Education from '../Education/Education'
import ContactNow from '../ContactNow/ContactNow'
import MyProjects from '../MyProjects/MyProjects'
import About from '../About/About'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Education/>
    <ContactNow/>
    <MyProjects/>
    <Contact/>
    </>
  )
}

export default Home