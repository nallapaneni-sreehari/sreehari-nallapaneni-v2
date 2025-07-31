import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Contact from './components/UI/Contact';
import Portfolio from './components/UI/Portfolio';
import Services from './components/UI/Services';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
