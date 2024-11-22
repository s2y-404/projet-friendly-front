import MenuNavbar from '@/components/menu-navbar'
import PartyCards from '@/components/party-cards'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '@/pages/login-page'
import RegisterPage from '@/pages/register-page'
import { useState } from 'react'
import ProfilePage from './pages/profile-page'
import Page404 from './pages/404-page'

function App() {
  const [user, setUser] = useState({});

  return (
    
    <BrowserRouter>
      <main className="w-screen h-screen overflow-x-hidden flex flex-col">
        <nav className='w-full'>
          <MenuNavbar user={user} setUser={setUser} />
        </nav>
        <section className='w-full flex-grow flex flex-row'>
        <Routes>
          <Route path="/" element={<PartyCards />}/>
          {/* <Route path="/friends" />
          <Route path="/chat" /> */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="*" element={<Page404 />} />
        </Routes>
        </section>

      </main>
    </BrowserRouter>
  )
}

export default App
