import './App.css'
import {Routes, Route} from 'react-router'
import Nav from "./Nav";
import User from "./User";
import Roles from './Role';
import Panel from "./Panel";
import CreateUser from './CreateUser';
import CreateRole from './CreateRole';

function App() {
  return (
    <div className='flex'>
      
      <Nav />

      <section className="body">
        <Panel />
        <Routes>
            <Route path='/' element={<h1>Dashboard</h1>} />
            <Route path="users" element={<User />} />
            <Route path='/roles' element={<Roles />} />
            <Route path='/settings' element={<h1>Settings</h1>} />
            <Route path='/users/create' element={<CreateUser />} />
            <Route path="/roles/create" element={<CreateRole />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
