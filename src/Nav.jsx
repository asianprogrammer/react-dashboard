import {Link} from 'react-router';

export default function Nav(){
    return (
        <div className="side-nave">
            <Link to="/">Home</Link>
            <Link to="user" >Nave TO user</Link>
        </div>
    );
}