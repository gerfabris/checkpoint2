import { BrowserRouter } from 'react-router-dom'
import { NavBasic } from '../NavBasic/NavBasic'
import { PublicRoutes } from './PublicRoutes'
import { Footer } from '../Footer/Footer'

export const AppRoutes = () =>{
    return(
            <BrowserRouter>
                <NavBasic/>
                <PublicRoutes/>
                <Footer/>
            </BrowserRouter>
    )
}