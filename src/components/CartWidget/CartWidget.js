import {BsFillCartCheckFill} from "react-icons/bs"
import { Link } from "react-router-dom"
import './CartWidget.scss'

export const CartWidget = () =>{

    return (
        <Link to="/cart" className="containerCartWidget">
            <div className="containerCartWidget__cartWidget">
                <BsFillCartCheckFill/>
            </div>
        </Link>
    )
}