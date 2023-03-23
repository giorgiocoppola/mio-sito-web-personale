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
    <div className='home'>
        <Header />

      <div className="container">

        <div className="row align-items-center">

            <div className="col-12 col-sm text-center">

               <img src={profilo} className = "image rounded-circle m-5" alt="Mia foto di riconoscimento" />

            </div>
 
            <div className="col-12 col-sm  text-center">
  
               <h1 className="tit-hard fw-bolder">Buongiorno sono Giorgio Coppola</h1>
               <p>Buongiorno sono Giorgio Coppola e sono un Frontend Developer Junior</p>

            </div>

        </div>      
  
 
      </div>
      

   

           <Hardskills />

           <Softskills />

           <Project />

           <Contatti />

        <Footer />

    </div>
  )
}

export default Home