import React from 'react'
import Hero from './componants/Hero'
import About from './componants/About'
import Navbar from './componants/Navbar'
import Features from './componants/Features'
import Story from './componants/Story'
import Contact from './componants/Contact'
import Footer from './componants/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden '>
       <Navbar />
       <Hero />
       <About />
       <Features />
       <Story />
       <Contact />
       <Footer />
    </main>
  )
}

export default App