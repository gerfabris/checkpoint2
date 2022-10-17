import { Link } from "react-router-dom"
import './Card.scss'

export const Card = ({card}) =>{
    return(
            <div className="mb-5 card" >
                <img src={card.image} className="card-img-top" alt={card.name} />
                <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">Especie: {card.species}</p>
                    <p className="card-text">Origen: {card.origin.name}</p>
                    <p className="card-text">Creación: {card.created}</p>
                </div>
                <Link to={`/Cards/${card.id}`}>
                    <button className="btn btn-primary my-2 btn__card">Ver más</button>
                </Link>
            </div>
    )
}