import { Link } from 'react-router-dom'
import './Inicio.scss'

const datosNavBar = {
    link1: "Form",
    link2: "Users",
    link3: "Cards",
}

export const Inicio = () =>{
    const { link1, link2, link3} = datosNavBar
    return(
        <section className='inicio'>
            <div className='inicio__containerTitle'>
                <h1>
                    Checkpoint 2.. Tuki 👌
                </h1>
            </div>
            <div className='inicio__contenedorLinks'>
                <li className='inicio__contenedorLinks__li'>
                    <Link to={`/${link1}`} className="inicio__contenedorLinks__li__link">Formulario</Link>
                </li>
                <li className='inicio__contenedorLinks__li'>
                    <Link to={`/${link2}`} className="inicio__contenedorLinks__li__link">Users</Link>
                </li>
                <li className='inicio__contenedorLinks__li'>
                    <Link to={`/${link3}`} className="inicio__contenedorLinks__li__link">API Rick & Morty</Link>
                </li>
            </div>
        </section>
    )
}