import React from 'react'
import site from '../images/pizzeriaangolorosso-netlify-app.png'
import site2 from '../images/bed-breakfast-le-cerase-netlify-app.png'
import site3 from '../images/cocktaildb10-netlify-app.png'
import './Project.css'




function Project() {
  return (
    <div>
        <h1 className='text-center fw-bolder mt-5' id="progetti">Progetti</h1>

        <div className="website">
         
           <div className="site">
                
               <img src={site}   width="400px" height="400px"/>

               <div className="didascalia">

               <h4 className="text-center fw-bolder mt-2">Pizzeria Angolo Rosso</h4>

               <p>Questo e' un sito che contiene l'elenco delle pizze da ordinare dove 
                cliccando su quei bottoni puoi procedere sulla quantita' degli ordini 
                e quali pizze vuoi ordinare.
               </p>

                  <button className='rounded bg-primary fs-4 text-white border-info'><a href='https://pizzeriaangolorosso.netlify.app' target='_blank' style={{textDecoration:'none',color:'white'}}>Vai al sito</a></button>

            
               </div>
                
           </div>


           <div className="site">

               <img src={site2}   width="400px" height="400px"/>

               <div className="didascalia">

                <h4 className="text-center fw-bolder mt-2">B&B Le Cerase(sviluppo in corso)</h4>

                <p>Questo e' un sito di un b&b che dovrei gestire in futuro con le immagini ela pagina
                   prenotazione dove e' possibile prenotare una stanza quando vuoi
                </p>

                <button className='rounded bg-primary fs-4 text-white border-info'><a href='https://bed-breakfast-le-cerase.netlify.app/' target='_blank' style={{textDecoration:'none',color:'white'}}>Vai al sito</a></button>

            
               </div>
                
            </div>

            <div className="site">

                <img src={site3}   width="400px" height="400px"/>

                <div className="didascalia">

                <h4 className="text-center fw-bolder mt-2">The CocktailDB</h4>

                <p>Questo e' una web app contenente una collezione di cocktail dove andando a digitare 
                   sul riquadro bianco(in alto a sinistra) esce il cocktail desiderato
                </p>

                <button className='rounded bg-primary fs-4 text-white border-info'><a href='https://cocktaildb10.netlify.app/' target='_blank' style={{textDecoration:'none',color:'white'}}>Vai al sito</a></button>


</div>
 
</div>
         
               

            
           </div>

          

            
           </div>
       
   
  )
}

export default Project