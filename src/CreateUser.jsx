import { NavLink } from "react-router";
import { useState } from "react";

export default function UserCreate(){
    const [users, setUsers] = useState([{name: '',email:'',role_id: 'admin'}])

    function handle(e) {
        const { name, value } = e.target;
        setUsers((prevData) => {
            const updatedUsers = [...prevData];
            updatedUsers[0] = {
                ...updatedUsers[0],
                [name]: value,
            };
            return updatedUsers;
        });
    }

    function save(){
        console.log("Form data: ", users[0])
    }


    return (
        <div className="flex F-center">
            <section className="flex FW model">
                <h1>Add New User</h1>
                <div className="input MTB">
                    <div>Username</div>
                    <input value={users[0].name} name="name" onChange={handle} type="text" placeholder="Enter user name" />
                </div>
                <div className="input MTB w100">
                    <div>Email</div>
                    <input value={users[0].email} name="email" onChange={handle} type="text" placeholder="Enter email" />

                </div>
                <div className="input MTB">
                    <div>Role</div>
                    <select className="w100" name="role_id" onChange={handle} defaultValue={users[0].role}>
                        <option value="1">Admin</option>
                        <option value="2">Viewer</option>
                        <option value="3">Editor</option>
                        <option value="4">Manager</option>
                        <option value="5">Moderator</option>
                    </select>
                </div>

                <div className="MTB flex FY-center F-space">
                    <button onClick={save}>Save</button>
                    <NavLink to="/users" ><button>Cancel</button></NavLink>
                </div>

            </section>
        </div>
    );
}