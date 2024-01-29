import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/login'
import Signup from './pages/Signup'
import Profile from './pages/profile'
import NotFound from './pages/404'
import Admin from './pages/admin'

function App() {


  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/admin' element={<Admin />} />
          

        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
