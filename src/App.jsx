import { h, } from 'preact';
import {useState, useEffect} from 'preact/hooks'
import sal from 'sal.js'
import {ThemeContext} from './ThemeContext.jsx'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import './App.css';
import Service from './components/Service/index.jsx';
import Portfolio from './components/Portfolio/index.jsx';
import Contact from './components/Contact/index.jsx';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('Theme')||'0deg')

  sal({
    threshold:0.5
  })

  const [scrollY, setScrollY] = useState(null)
  const [inViewport, setInViewport] = useState(null)
  const [MousePos, setMousePos] = useState({x:null, y: null})

  useEffect(() => {
      window.addEventListener('scroll',()=>{setScrollY(window.scrollY+1)}, {passive: true})
      window.addEventListener('mousemove', ({x,y})=>setMousePos({x, y}))
      return () => {
          window.removeEventListener('scroll', ()=>{setScrollY(window.scrollY+1)}, {passive: true})
          window.removeEventListener('mousemove', (e)=>setMousePos({x, y}))
    }
  }, [])
  
  return (
      <ThemeContext.Provider value={{theme, MousePos, scrollY, inViewport, setInViewport, setTheme}}>
        <div className="App">
          <Nav/>
            <main>
            <Home/>
            <About/>
            <Service/>
            <Portfolio/>
            <Contact/>
            </main>
        </div>
      </ThemeContext.Provider>
  );
}

export default App;
