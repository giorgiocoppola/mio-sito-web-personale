import React from 'react'
import site from '../images/pizzeriaangolorosso-netlify-app.png'
import site2 from '../images/bed-breakfast-le-cerase-netlify-app.png'
import site3 from '../images/cocktaildb10-netlify-app.png'
import site4 from '../images/cantina-sociale-bordeaux1-netlify-app.png'
import site5 from '../images/fictiontv.png'
import './Project.css'




function Project() {
  return (
    <div>

       

         <h1 className=' text-center fw-bolder mt-5' id="portfolio">Portfolio</h1>

         <div className="container">

            <div className="row justify-content-center">

               <div className="col col-sm text-center mt-5">

                 <img src={site} className='site'  width="400px" height="400px"/>

               <div className="col-sm">

                   <h4 className="text-center fw-bolder mt-2">Pizzeria Angolo Rosso</h4>

                   <p>Questo e' un sito che contiene l'elenco delle pizze da ordinare dove 
                   cliccando su quei bottoni puoi procedere sulla quantita' degli ordini 
                   e quali pizze vuoi ordinare.
                   </p>

               <button className='rounded bg-primary fs-4 text-white border-info'><a href='https://pizzeriaangolorosso1.netlify.app' target='_blank' style={{textDecoration:'none',color:'white'}}>Vai al sito</a></button>


               </div>

            </div>

   
    
            <div className="col col-sm text-center mt-5">

                 <img src={site2}  className='site'  width="400px" height="400px"/>

            <div className="col-sm">

                 <h4 className="text-center fw-bolder mt-2">B&B Le Cerase(sviluppo in corso)</h4>

                 <p>Questo e' un sito di un b&b che dovrei gestire in futuro con le immagini ela pagina
                 prenotazione dove e' possibile prenotare una stanza quando vuoi
                 </p>

                 <button className='rounded bg-primary fs-4 text-white border-info'><a href='https://bed-breakfast-le-cerase.netlify.app/' target='_blank' style={{textDecoration:'none',color:'white'}}>Vai al sito</a></button>


            </div>

            </div>



            <div className="col col-sm text-center mt-5">

                 <img src={site3}  className='site'  width="400px" height="400px"/>

            <div className="col-sm">

                 <h4 className="text-center fw-bolder mt-2">The CocktailDB</h4>

                 <p>Questo e' una web app contenente una collezione di cocktail dove andando a digitare 
                 sul riquadro bianco(in alto a sinistra) esce il cocktail desiderato
                 </p>

                 <button className='rounded bg-primary fs-4 text-white border-info'><a href='https://glittery-churros-956d59.netlify.app/' target='_blank' style={{textDecoration:'none',color:'white'}}>Vai al sito</a></button>


            </div>

            </div>

            <div className="col col-sm text-center mt-5">

                 <img src={site4}  className='site'  width="200px" height="400px"/>

            <div className="col-sm">

                 <h4 className="text-center fw-bolder mt-2">Cantina sociale Bordeaux</h4>

                 <p>Questo e' una web app contenente una collezione di vini(assomiglia alla web app della
                    pizzeria)
                 </p>

                 <button className='rounded bg-primary fs-4 text-white border-info'><a href='https://cantina-sociale-boedeaux1234.netlify.app/' target='_blank' style={{textDecoration:'none',color:'white'}}>Vai al sito</a></button>


            </div>



            </div>

             <div className="col col-sm text-center mt-5">

                 <img src={site5}  className='site'  width="200px" height="400px"/>

                  <div className="col-sm">

                     <h4 className="text-center fw-bolder mt-2">Fiction TV(sviluppo in corso)</h4>

                     <p>Questo e' una web app contenente una serie di fiction televisive da vedere
                     </p>

                    <button className='rounded bg-primary fs-4 text-white border-info'><a href='https://fictiontv.netlify.app/' target='_blank' style={{textDecoration:'none',color:'white'}}>Vai al sito</a></button>


                   </div>



                 </div>

         </div>         



   </div>
       
            
 </div>
       
   
  )
}

export default Project