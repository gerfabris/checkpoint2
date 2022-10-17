import { CardsList } from "../CardsList/CardsList";
import { SpinnerCs } from "../SpinnerCs/SpinnerCs";
import { useCards } from "./useCards";


export const CardsListContainer = () =>{
    
    const { loading , cards } = useCards()
        
    return(
            <div>
                {
                    loading
                    ? <SpinnerCs/>

                    : <CardsList cards={cards} />
                }
            </div>
    )
}