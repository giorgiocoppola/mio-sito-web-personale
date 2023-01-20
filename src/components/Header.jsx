import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div>
        <div className="nav bg-primary p-3">

           <Link to="" style={{textDecoration:'none',color:'white',fontSize:"30px"}}>HOME</Link>
           <a href="#competenze" style={{textDecoration:'none',color:'white',fontSize:"30px"}}>COMPETENZE</a>
           <a href="#progetti" style={{textDecoration:'none',color:'white',fontSize:"30px"}}>PROGETTI</a>
           <a href="#contatti" style={{textDecoration:'none',color:'white',fontSize:"30px"}}>CONTATTI</a>

        </div>
     
    </div>
  )
}

export default Header
