import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import ReactD from './pages/reactDevelopments/ReactDevelopments'
import JavaD from './pages/javaDevelopments/JavaDevelopments'
import PHPD from './pages/phpDevelopments/PHPDevelopments'
import Hardware from './pages/hardwareDevelopments/HardwareProjects'
import Contact from './pages/contact/Contact'
import './App.scss'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/about" element={<About />} />
          <Route path="/react-developments" element={<ReactD />} />
          <Route path="/java-developments" element={<JavaD />} />
          <Route path="/php-developments" element={<PHPD />} />
          <Route path="/hardware-projects" element={<Hardware />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}