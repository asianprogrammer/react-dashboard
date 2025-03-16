export default function User(){
    return (
        <>
            <br />
            <h2>User Management</h2>
            
            <div className="MTB flex FY-center F-space">
            <input type="search" placeholder="Search by user name" />
            <button>Add User</button>
            </div>

            <table border="1">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
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