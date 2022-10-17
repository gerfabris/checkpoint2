import { UsersListContainer } from "../UsersListContainer/UsersListContainer"
import './Users.scss'

export const Users = () => {
    return (
        <section className="section__Users">
            <h2 className="text-center">Users Table</h2>
            <div className="container__table">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col" className="email-table">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col" className="city-table">User city</th>
                            <th scope="col" className="company-table">Company name</th>
                        </tr>
                    </thead>
                    <UsersListContainer/>
                </table>
            </div>
        </section>
    )
}

