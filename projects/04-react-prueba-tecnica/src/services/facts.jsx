import { useEffect, useState } from "react"

const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'

export const getUrlImage = async() => {
    const resp = await fetch(CAT_ENDPOINT_FACT)
    const data = await resp.json()
    const {fact} = data
    return fact
   
}

export function useCatImage({fact}){
    const [image,setImage] = useState()
    const size = 40
    const color = 'red'
    useEffect(() => {
        if(!fact) return
       const firstWord = fact.split(' ',3)
       setImage(`${firstWord}?size=${size}&color=${color}`)  
       
      }, [fact])

    return {image}  
}

export function useCatFact(){
    const [fact,setFact] = useState()

    const getRandomFact = async() => {
        const newFact = await getUrlImage()
        setFact(newFact)    
    }

    useEffect(() => {
        const fetchData = async () => {
         const newFact = await getUrlImage()
         setFact(newFact)
        }
        fetchData()
      }, [])
    return {fact,getRandomFact}
}