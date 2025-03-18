import { NavLink } from "react-router";

export default function Roles(){
    return (
        <>
            <br />
            <h2>Role Management</h2>
            
            <div className="MTB flex FY-center F-space">
            <input type="search" placeholder="Search by role name" />
            <NavLink to="create"><button>Add Role</button></NavLink>
            </div>

            <table border="1">
                <thead>
                    <tr>
                        <th>Role Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Admin</td>
                        <td>A long description for admin</td>
                        <td>
                            <a href="#edit">Edit</a>
                            &nbsp;
                            <a href="#delete">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Viewer</td>
                        <td>This is the most active viewers on this blog</td>
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