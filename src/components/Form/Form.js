import { useState } from "react"
import { FormDOM } from "./FormDOM"

export const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comments, setComments] = useState("")

    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newComments, setNewComments] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()

        const regExUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        const validateName = regExUserName.test(newName) ? true : false
        validateName ? setNewName(newName) : setNewName("")

        const regExUserEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const validateEmail = regExUserEmail.test(newEmail) ? true : false
        validateEmail ? setNewEmail(newEmail) : setNewEmail('')

        const validateComments = newComments.length > 10 & newComments.length < 250 ? true : false
        validateComments ? setNewComments(comments) : setNewComments('')

        let validation = Boolean

        validateName & validateEmail & validateComments ? validation = true : validation = false
        
        if(validation)
        
        console.table(`user: ${name} \nemail: ${email} \ncomments: ${comments}`) 
        
        setName(newName)
        setEmail(newEmail)
        setComments(newComments)

    }

    return(
            <main className="container-fluid py-2">
                <h2 className="text-center my-3">Form</h2>
                <div className="container my-3">
                    <form  id="form" method="GET" onSubmit= { handleSubmit }>
                        <div className="mb-3">
                            <label htmlFor="user" className="form-label">User:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="user" 
                                name="user" 
                                required 
                                placeholder="Name User"
                                onChange={(e)=>{
                                    setNewName(e.target.value)
                                }}    
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email"
                                className="form-control" 
                                id="email" name="email" 
                                aria-describedby="emailHelp" 
                                required 
                                placeholder="example@example.com"
                                onChange={(e)=>{
                                    setNewEmail(e.target.value)
                                }}
                            />
                        </div>
                        <div className="form-floating mb-3">
                            <p>Comentarios:</p>
                            <textarea 
                                className="form-control" 
                                placeholder="Leave a comment here" 
                                id="comments" 
                                name="comments"
                                onChange={(e)=>{
                                    setNewComments(e.target.value)
                                }}
                            />                      
                        </div>
                        <button type="submit" className="btn btn-info" id="submit">Submit</button>
                    </form>
                </div>
                <FormDOM name={name} email={email} comments={comments} />
            </main>
    )
}