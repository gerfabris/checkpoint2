import { SpinnerCs } from "../SpinnerCs/SpinnerCs";
import { UsersList } from "../UsersList/UsersList";
import { useUsers } from "./useUsers";


export const UsersListContainer = () =>{
    
    const { loading , users } = useUsers()
        
    return(
            <tbody id="table-row">
                {
                    loading
                    ? <SpinnerCs/>

                    : <UsersList users={users} />
                }
            </tbody>
    )
}