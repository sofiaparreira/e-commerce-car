import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/user/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import HomeAdmin from './pages/admin/HomeAdmin'
import AddProject from './pages/admin/AddProduct'
import ShoppingCart from './pages/user/ShoppingCart'
import EditProduct from './pages/admin/EditProduct'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />


        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/add" element={<AddProject />} />
        <Route path="/admin/edit/:id" element={<EditProduct />} />


        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </Router>
  )
}

export default App
