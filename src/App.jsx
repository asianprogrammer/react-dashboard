import './App.css'
import {Routes, Route} from 'react-router'
import Nav from "./Nav";
import User from "./User";
import Panel from "./Panel";

function App() {
  return (
    <div className='flex'>
      
      <Nav />

      <section className="body">
        <Panel />
        <Routes>
            <Route path='/' element={<h1>Dashboard</h1>} />
            <Route path="users" element={<User />} />
            <Route path='/roles' element={<h1>Roles</h1>} />
            <Route path='/settings' element={<h1>Settings</h1>} />
        </Routes>

        <section>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </section>
      </section>
    </div>
  )
}

export default App
