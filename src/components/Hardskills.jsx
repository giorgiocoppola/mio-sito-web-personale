
import React from 'react'
import './Hardskills.css'
import html from '../images/html5.png'
import css from '../images/css.png'
import bootstrap from '../images/Bootstrap.png'
import javascript from '../images/JavaScript.png'
import react from '../images/react.svg'
import mysql from '../images/mysql.png'
import git from '../images/Git.png'


function Hardskills() {
  return (
    <>
       <h1 className='fw-bolder text-center mt-4'>Hard skills</h1>

           <div className="hard-skills m-5">
         
              <div className='linguaggi' id="HTML">

                 <h1 className='text-center fw-bolder'>HTML</h1>
                 <img src={html} alt="HTML5" className='mt-5' width="150px" height="150px" />

              </div>
      
              <div className='linguaggi' id="CSS">

                 <h1 className='text-center fw-bolder'>CSS</h1>
                 <img src={css} alt="CSS3" className='mt-5' width="150px"  height="150px"/>

              </div>

              <div className='linguaggi' id="CSS">

                  <h1 className='text-center fw-bolder'>Bootstrap</h1>
                  <img src={bootstrap} alt="Bootstrap" className='mt-5 ms-4' width="170px"  height="150px"/>

              </div>
       
              <div className='linguaggi' id="JAVASCRIPT">

                 <h1 className='text-center fw-bolder'>Javascript</h1>
                 <img src={javascript} alt="Javascript" className='mt-5' width="250px" height="150px" />

              </div>
        
              <div className='linguaggi' id="React">

                <h1 className='text-center fw-bolder'>React</h1>
                <img src={react} alt="React"  className='mt-5' width="150px"  height="150px" />
  
              </div>
       
              <div className='linguaggi' id="mySQL">
          
                <h1 className='text-center fw-bolder'>MySQL</h1>
                <img src={mysql} alt="mySQL" className='ms-5 mt-5' width="150px"  height="150px" />
              </div>
        
              <div className='linguaggi' id="git">

                <h1 className='text-center fw-bolder mt-4'>Git</h1>
                <img src={git} alt="Git" className='ms-5 mt-5' width="200px"  height="150px" />

              </div>
        

      </div>
    </>
  )
}

export default Hardskills