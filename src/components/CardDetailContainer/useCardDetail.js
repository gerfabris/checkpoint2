import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom';

export const useCardDetail = () =>{
    const [card, setCard] = useState(null)
    const [loading, setLoading] = useState(true)

    const { cardId } = useParams()
    
    const URL = "https://rickandmortyapi.com/api/character"; 

    useEffect(() =>{
        setLoading(true)
        const getCard = async () =>{
            try {
                const resp = await fetch(URL)
                const data = await resp.json()
                const cards = await data.results
                console.log(cards);
                const card = await cards.find(card => card.id === Number(cardId))
                setCard(card)
                card ? setLoading(false) : setLoading(true)
            } catch (error) {
                console.log(`Error:${error}`);
            } 
        }
        getCard()
    }, [])
    
    return { card , loading }
}