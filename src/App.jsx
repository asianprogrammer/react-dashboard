import './App.css'
import Nav from "./Nav";
import User from "./User";
import {Routes, Route} from 'react-router'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="user" element={<User />} />
        <Route path="/" />
      </Routes>
    </>
  )
}

export default App
