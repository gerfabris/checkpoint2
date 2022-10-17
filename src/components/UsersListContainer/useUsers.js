import axios from 'axios'
import { useEffect, useState } from 'react'

const URL = "https://jsonplaceholder.typicode.com/users";

export const useUsers = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        
        const getUsers = async () =>{
            try {
                axios.get(URL)
                .then(res => {
                    const newUsers = res.data
                    console.log(newUsers);
                    setUsers(newUsers)
                })
                
                users ? setLoading(false) : setLoading(true)

            } catch (error) {
                console.log(`Error:${error}`);
            } 
        }
        getUsers()
        
    }, [])
    
    return {users, loading}

}