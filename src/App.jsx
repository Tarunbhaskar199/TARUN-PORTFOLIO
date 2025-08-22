import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-blue-50 to-pink-100 text-gray-900 flex flex-col">
      <SplashScreen />
      <Navbar />
      <main className="flex-1 pt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
