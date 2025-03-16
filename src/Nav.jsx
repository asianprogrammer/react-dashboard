import {NavLink} from 'react-router';
import HomeIcon from './assets/icons/home.svg';
import RolesIcon from './assets/icons/key.svg';
import UsersIcon from './assets/icons/users.svg';
import SettingsIcon from './assets/icons/setting.svg';

export default function Nav(){
    return (
        <div className="side-nave">
            <h3 className='nav-title'>Admin Dashboard</h3>
            <div className="navigation-urls">
                <NavLink to="/" activeclassname="active">
                    <div className='nav-list flex FY-center'>
                        <div className="icon MR">
                            <img width="100%" src={HomeIcon} alt="Home Icon" />
                        </div>
                        <span>Dashboard</span>
                    </div>
                </NavLink>
                <NavLink to="/roles" activeclassname="active">
                    <div className='nav-list flex FY-center'>
                        <div className="icon MR">
                            <img src={RolesIcon} alt="Roles Icon"  />
                        </div>
                        <span>Roles</span>
                    </div>
                </NavLink>
                <NavLink to="/users" activeclassname="active">
                    <div className='nav-list flex FY-center'>
                        <div className="icon MR">
                            <img src={UsersIcon} alt="Roles Icon"  />
                        </div>
                        <span>Users</span>
                    </div>
                </NavLink>
                <NavLink to="/settings" activeclassname="active">
                    <div className='nav-list flex FY-center'>
                        <div className="icon MR">
                            <img src={SettingsIcon} alt="Roles Icon"  />
                        </div>
                        <span>Settings</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}