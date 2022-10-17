import Spinner  from "react-bootstrap/Spinner"

export const SpinnerCs = () =>{
    return(
            <Spinner animation="border" role="status" variant="primary" className='spinner'>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
    )
}