import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div>

     
            

              <div className="col-12 bg-primary text-center text-white fs-2">GC GIORGIO COPPOLA</div>

              <div className="col-12 text-center bg-primary">

                   <Link to="" className='link text-white fs-3' >HOME</Link>
                   <a href="#competenze" className='link text-white fs-3 ms-3'>COMPETENZE</a>
                   <a href="#progetti" className='link text-white fs-3 ms-3'>PROGETTI</a>
                   <a href="#contatti" className='link text-white fs-3 ms-3'>CONTATTI</a>

             
   
          </div>


      </div>
   
     
  
  )
}

export default Header
