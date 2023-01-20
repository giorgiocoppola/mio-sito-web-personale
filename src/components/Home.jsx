import React from 'react'
import Contatti from './Contatti'
import Footer from './Footer'
import Hardskills from './Hardskills'
import Header from './Header'
import './Home.css'
import profilo from './profilo.jpg'
import Project from './Project'
import Softskills from './Softskills'

function Home() {
  return (
    <div>
        <Header />

        <div className="main">
            <img src={profilo} className = "rounded-circle m-5" alt="Mia foto di riconoscimento" />

            <div className="descrizione">

                <h1 className="fw-bolder">Buongiorno sono Giorgio Coppola</h1>
                <p>Buongiorno sono Giorgio Coppola e sono un Frontend Developer Junior</p>
            </div>
         
            
        </div>

          <h1 className='text-center fw-bolder' id='competenze'>Competenze</h1>

           <Hardskills />

           <Softskills />

           <Project />

           <Contatti />

        <Footer />
    </div>
  )
}

export default Home