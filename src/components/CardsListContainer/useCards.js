import { useEffect, useState } from "react"

const URL = "https://rickandmortyapi.com/api/character";


export const useCards = () =>{
    
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        
        const getCards = async () =>{
            try {
                const resp = await fetch(URL)
                const data = await resp.json()
                const cards = await data.results
                setCards(cards)
                cards ? setLoading(false) : setLoading(true)
            } catch (error) {
                console.log(`Error:${error}`);
            } 
        }
        getCards()
    }, [])
    
    return {cards, loading}

}