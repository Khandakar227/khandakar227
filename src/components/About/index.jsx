import {h} from 'preact'
import { useContext, useRef } from 'preact/hooks'
import {ThemeContext} from '../../ThemeContext.jsx'
import BackGround from '../../../public/img/About/web dev.svg'
import checkInViewport from '../../Utilities/CheckInViewport.jsx'
import './style.css'

export default function About() {
  const {theme} = useContext(ThemeContext)

  const Ref = useRef()
  checkInViewport(Ref)

    return (
        <div ref={Ref} id="About" className="about_container" style={{filter: theme[0]==='@'?theme.replace('@','') : ''}}>
          <div data-sal="fade" className="about_text_container" style={{filter: theme[0]==='@'? '':`hue-rotate(${[theme]})`}}>
          <div className='about_text'>
            I am an impassioned full stack web developer with a decent amount of
            experience in vector arts from Bangladesh studying in Chittagong college.
            <p><a className="Link_normal" href="#Service">
              <button style={{background:'var(--glass_button_purple)',marginTop:'3em'}}
             className="button glass-container">
               FIELD OF EXPERTISE</button></a></p>
          </div>
          </div>
          <div data-sal = "slide-up" data-sal-easing="ease-out-quad" data-sal-delay="500" className="about_bg_img">
            <div className="about_bg">
              <img src={BackGround} alt="web dev vector art"/>
            </div>
          </div>
        </div>
    )
}
