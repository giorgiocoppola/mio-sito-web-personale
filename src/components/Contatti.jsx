import './Contatti.css'
import React, { useState } from 'react'

function Contatti() {

    const [identificazione,setIdentificazione] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [message2,setMessage2] = useState("");
    const [message3,setMessage3] = useState("");

    const handleSubmit = (e) => {

         e.preventDefault();
         setIdentificazione('');
         setEmail('');
         setMessage3("Messaggio inviato");
         setTimeout( () => setMessage3(""),3000);

         if( identificazione === "" && email === "" ) {

            setMessage("Campo obbligatorio");
            setTimeout( () => setMessage(""),3000);
            setMessage2("Campo obbligatorio");
            setTimeout( () => setMessage2(""),3000);
         }

         if( identificazione === "" ) {

           setMessage("Campo obbligatorio");
           setTimeout( () => setMessage(""),3000);
           setEmail(email);
         }

         if( email === "" ) {

          setMessage2("Campo obbligatorio");
          setTimeout( () => setMessage2(""),3000);
          setIdentificazione(identificazione);
        }

         
    }

  return (
    <div className='contatti'>
        <h1 className='title-contatti text-center fw-bolder m-5' id="contatti">Contatti</h1>

        <form className='row g-3 bg-info  p-5 rounded m-auto mb-5'>

            <div className="row mb-3">

                <label htmlFor="name and surname" className='col text-center fs-4 text-white'>Nome e cognome:
                <input type="text" className='form-control' id="name and surname" placeholder='Inserisci il nome e il cognome...' value={identificazione} onChange={ e => setIdentificazione(e.target.value)}/>
                <p className='text-center text-danger fw-bolder fs-5'>{message}</p>

            </label>
            </div>
            <div className="row mb-3">
                
                <label htmlFor="email" className='form-label text-center fs-4 text-white'>Email:
                   <input type="email" className='form-control' id='email' placeholder="Inserisci l'email... " value={email} onChange={ e => setEmail(e.target.value)}/>
                   <p className='text-center text-danger fw-bolder fs-5'>{message2}</p>
                 </label>

            </div>

            <div className="row mb-3">
                 
                 <label htmlFor="message" className='form-label text-center fs-4 text-white' >
                    Messaggio:

                    <textarea name="mex"  className='form-control' id="message" cols="40" rows="15"></textarea>
                 </label>

            </div>

            <button className='btn btn-primary mb-3 fs-4' onClick={handleSubmit}>Invia</button>
            <p className='text-center text-success fw-bolder fs-5'>{message3}</p>
        </form>
    </div>
  )
}

export default Contatti