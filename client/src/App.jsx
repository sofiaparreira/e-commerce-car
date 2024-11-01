import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/user/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Home />} />


        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </Router>
  )
}

export default App
