import { User } from "../User/User"

export const UsersList = ( {users} ) => {

    return (
        <> 
            {
                users.map((user) => <User key={user.id} user={user}/>)   
            }
        </> 
    )
}