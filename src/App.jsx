import './App.css'
import CaseStudies from './components/CaseStudies'
import CAT from './components/CAT'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import WorkingProcess from './components/WorkingProcess'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <div className='font-primary overflow-hidden'>
       <Navbar/>
       <Hero/>
       <Services/>
       <CAT/>
       <CaseStudies/>
       <WorkingProcess/>
       <Team/>
       <Contact/>
        <Footer/>
    </div>
  )
}

export default App
