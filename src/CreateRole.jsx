import { NavLink } from "react-router";
import { useState } from "react";

export default function CreateRole(){
    const [users, setUsers] = useState([{role_id: 'admin', text: ''}])

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
                    <div>Role Name</div>
                    <input value={users[0].name} name="role_id" onChange={handle} type="text" placeholder="Enter role name" />
                </div>
                <div className="input MTB">
                    <div>Description</div>
                    <textarea value={users[0].text} name="text" onChange={handle} type="text" placeholder="Enter role description" />

                </div>

                <div className="MTB flex FY-center F-space">
                    <button onClick={save}>Save</button>
                    <NavLink to="/roles" ><button>Cancel</button></NavLink>
                </div>

            </section>
        </div>
    );
}