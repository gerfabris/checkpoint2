

export const FormDOM = ( {name, email, comments} ) =>{

    if(name.length > 0 & email.length > 0 & comments.length > 0){
        return(
            <div className="container-fluid py-2">
                <h3 className="text-center my-3"> Se ha añadido un nuevo mensaje</h3>
                <p>Nombre: {name}</p>
                <p>Email: {email}</p>
                <p>Comentario: {comments}</p>
            </div>
        )
    }
    return(
        <div className="container-fluid py-2">
            <h3 className="text-center my-3 alert alert-danger" > No hay mensajes que mostrar</h3>
        </div>
    )
}