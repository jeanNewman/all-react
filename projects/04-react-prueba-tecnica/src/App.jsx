import { useEffect, useState } from "react"
import './App.css'
import {cduseCatImage, useCatFact} from "./services/facts"



const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/'


export function App() {

  const {fact,getRandomFact} = useCatFact()
  const {image} = useCatImage({fact})
  const handleClik = () => {
    getRandomFact()
  }
 
  return (
    <main>
      <h1>Prueba técnica</h1>
      <button onClick={() => handleClik() }>Recargar</button>
     { fact && <p>{fact}</p> }
     { image && <img src={CAT_ENDPOINT_IMAGE_URL+image} alt={`Image stract from fact api whit this fact ${fact}`} /> }
    </main>
  )
}