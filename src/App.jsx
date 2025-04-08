import { useContext, useEffect } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import { ThemeContext } from './components/Context/Context';
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ProjectDetails from './components/pages/ProjectDetails';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

function App() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
return (
  <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer/>
      <ScrollToTopButton />
  </>
  )
}

export default App
