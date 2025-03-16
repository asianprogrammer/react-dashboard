import './App.css'
import Nav from "./Nav";
import User from "./User";
import {Routes, Route} from 'react-router'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="users" element={<User />} />
        <Route path="/" element={<h1>Dashboard</h1>} />
      </Routes>
    </>
  )
}

export default App
