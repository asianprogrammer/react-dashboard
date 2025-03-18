import { NavLink } from "react-router";

export default function User(){
    return (
        <>
            <br />
            <h2>User Management</h2>
            
            <div className="MTB flex FY-center F-space">
            <input type="search" placeholder="Search by user name" />
            <NavLink to="create"><button>Add User</button></NavLink>
            </div>

            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Parvez Ahmed</td>
                        <td>parvez@gmail.com</td>
                        <td>Frontend Dev</td>
                        <td>
                            <a href="#edit">Edit</a>
                            &nbsp;
                            <a href="#delete">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Parvez Ahmed</td>
                        <td>parvez@gmail.com</td>
                        <td>Frontend Dev</td>
                        <td>
                            <a href="#edit">Edit</a>
                            &nbsp;
                            <a href="#delete">Delete</a>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    );
}