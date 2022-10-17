import './User.scss'

export const User = ({user}) =>{
    return(
            <tr>
                <th scope="row">{user.id}</th>
                <td>{user.username}</td>
                <td className="email-table">{user.email}</td>
                <td>{user.phone}</td>
                <td className="city-table">{user.address.city}</td>
                <td className="company-table">{user.company.name}</td>
            </tr>       
    )
}