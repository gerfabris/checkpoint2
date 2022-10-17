import { Navigate, Route, Routes } from "react-router-dom"
import { Inicio } from '../Inicio/Inicio';
import { Cards } from "../Cards/Cards";
import { Users } from "../Users/Users";
import { Form } from "../Form/Form";
import { CardDetailContainer } from "../CardDetailContainer/CardDetailContainer";


export const PublicRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path='/Users' element={ <Users/>}/> 
                <Route path='/Cards' element={ <Cards/>}/> 
                <Route path='/Cards/:cardId' element={<CardDetailContainer greeting="Detalles del producto"/>} />
                <Route path='/Form' element={ <Form/>}/> 
                <Route path="*" element={ <Navigate to={'/'} /> } />
            </Routes>
    )
}

