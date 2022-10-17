import { useNavigate } from 'react-router-dom';
import './CardDetail.scss'

export const CardDetail = ({card}) =>{
    
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }
    
    return(
            <section className='section__cardDetail'>
                <h2 className='itemDetail__title'>{card.name}</h2>
                <div className="itemDetail" >
                    <img src={card.image} className="card-img-top itemDetail__img" alt={card.name} />
                    <div className="card-body">
                        <p className="card-title">Nombre: {card.name}</p>
                        <p className="card-text">Creación: {card.created}</p>
                        <p className="card-text">Género: {card.gender}</p>
                        <p className="card-text">Especie: {card.species}</p>
                        <p className="card-text">Loaclización: {card.location.name}</p>
                        <p className="card-text">Estado: {card.status}</p>
                        <p className="card-text">Origen: {card.origin.name}</p>
                    </div>
                </div>
                <button onClick={handleVolver} className='btn btn-primary my-2 itemDetail__btn'>Volver atrás</button>
            </section>
    )
}