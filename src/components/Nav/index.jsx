import { h } from 'preact';
import { useState, useContext } from 'preact/hooks'
import { ThemeContext } from '../../ThemeContext.jsx';
import { NavIcon, PaintIcon, CrossIcon } from '../Icon/icon.jsx';
import NavBrand from '../../../public/img/favicon.svg';
import './styles.css';

const Nav = () => {
  const filters = ['0deg', '45deg', '120deg', '180deg', '270deg', '300deg', '@sepia(1)', '@grayscale(1)']
  const [Nav, setNav] = useState(true)
  const [colorPalette, setColorPalette] = useState(false)

  const changeTheme = (Filter) => {
    setTheme(Filter)
    localStorage.setItem('Theme', Filter)
  }
  window.onclick = (e) => {
    if (e.target.id !== ("paint_icon" || 'color_palette')) setColorPalette(false)
  }
  const hideNav = () => setNav(true)
  const showNav = () => setNav(false)
  const { setInViewport, inViewport, setTheme } = useContext(ThemeContext)

  return (
    <nav className="nav">
      <div className="nav_brand">
        <a href="#Home"><img className="nav_brand_logo" src={NavBrand} alt="Logo" /></a>
      </div>
      <div style={{ position: 'relative' }}>
        <button id="color_palette" className="transparent_button" onClick={() => setColorPalette(prev => !prev)}><PaintIcon id="paint_icon" /></button>
        <div className={`color_palette ${colorPalette ? 'showPalette' : 'display_none'}`}>
          {filters.map(Filter => <div onClick={() => changeTheme(Filter)} style={{ filter: `${Filter[0] === '@' ? Filter.replace('@', '') : `hue-rotate(${Filter})`}` }} className="theme" />
          )
          }
        </div>
      </div>
      <div className="nav_container">
        <button onClick={showNav} className="nav_icon">
          <NavIcon />
        </button>
        <div className={`nav_all_items ${Nav ? "hide_nav_items" : "show_nav_items"}`}>
          <div className="close_nav">
            <button onClick={hideNav}>
              <CrossIcon />
            </button>
          </div>
          <div className="nav_items">
            <a href="#Home">
              <div className={inViewport === 'Home' ? 'nav_item active_nav' : 'nav_item'}>Home</div></a>
            <a href="#About">
              <div className={inViewport === 'About' ? 'nav_item active_nav' : 'nav_item'}>About</div></a>
            <a href="#Service">
              <div className={inViewport === 'Service' ? 'nav_item active_nav' : 'nav_item'}>Service</div></a>
            <a href="#Portfolio">
              <div className={inViewport === 'Portfolio' ? 'nav_item active_nav' : 'nav_item'}>Portfolio</div></a>
            <a href="#Contact">
              <div className={inViewport === 'Contact' ? 'nav_item active_nav' : 'nav_item'}>Contact</div></a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
