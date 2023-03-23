import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {

  return (
    
    <div className='header'>

          <div className="col-lg text-center fs-3 bg-primary text-white fs-3 p-3">GC Giorgio Coppola</div>

          <div className="col-sm col-md col-lg text-center bg-primary p-3">

                <Link to="" className='link text-white  ms-3' >HOME</Link>
                <a href="#competenze" className='link text-white  ms-3'>COMPETENZE</a>
                <a href="#portfolio" className='link text-white  ms-3'>PORTFOLIO</a>
                <a href="#contatti" className='link text-white  ms-3'>CONTATTI</a>

          </div>    
   
     </div>
  
  )
}

export default Header
