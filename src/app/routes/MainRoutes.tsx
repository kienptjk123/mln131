import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import { Navbar } from '@/components/navbar'
import LandingPage from '@/pages/LandingPage'
import TheoryPage from '@/pages/TheoryPage'
import RealityPage from '@/pages/RealityPage'
import PartyBuildingPage from '@/pages/PartyBuildingPage'
import PerspectivesPage from '@/pages/PerspectivesPage'
import FlashcardPage from '@/pages/FlashcardPage'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function MainRoutes() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="integravia-ui-theme">
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/ly-luan' element={<TheoryPage />}></Route>
        <Route path='/thuc-tien' element={<RealityPage />}></Route>
        <Route path='/xay-dung-dang' element={<PartyBuildingPage />}></Route>
        <Route path='/goc-nhin' element={<PerspectivesPage />}></Route>
        <Route path='/flashcard' element={<FlashcardPage />}></Route>
      </Routes>
    </ThemeProvider>
  )
}
