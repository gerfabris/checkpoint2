import { Card } from "../Card/Card"
import './CardsList.scss'  

export const CardsList = ( {cards} ) => {

    return (
        <div className='cardsList'>
            {
                cards.map((card) => <Card key={card.id} card={card}/>)   
            }
        </div>
    )
}