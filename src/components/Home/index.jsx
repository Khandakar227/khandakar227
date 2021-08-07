import {h} from 'preact'
import {useContext, useRef} from 'preact/hooks'
import {ThemeContext} from '../../ThemeContext.jsx'
import Background from '../../../public/img/Home/background.svg'
import SkyScrapper from '../../../public/img/Home/skyscrappers.svg'
import HighBuildings from '../../../public/img/Home/highBuildings.svg'
import checkInViewport from '../../Utilities/CheckInViewport.jsx'
import './style.css'

export default function Home() {
    const {theme, scrollY} = useContext(ThemeContext)

    const Ref = useRef()
    checkInViewport(Ref)
    
    const Bg_Styles  = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        filter: theme[0]==='@'?theme.replace('@',''):`hue-rotate(${[theme]})`,
    }
    const Bg = {
        background:`url(${Background})`,
        ...Bg_Styles,
    }
    const HighBuildingsBg = {
        background:`url(${HighBuildings})`,
        position: 'absolute',
        top: '0', left: '0',
        ...Bg_Styles,
    }
    const SkyScrappers = {
        background:`url(${SkyScrapper})`,
        ...Bg_Styles,
        position: 'absolute',
        top: '0', left: '0',
    }

    const scrollToNext = () => {
      window.scrollTo({
        behavior:"smooth", top: window.innerHeight/1.5
      })
    }

    return (
        <div ref={Ref} id="Home" className="home_bg" style={Bg}>
        <div className="home_bg SkyScrapper" style={SkyScrappers}/>
            <div className="home_bg HighBuildingsBg" style={HighBuildingsBg}/>
                    <header className="heading fadeInUp">
                        <h2>Hello world</h2>
                        <h1>My name is <span>Khandakar Shakib</span></h1>
                        <button onClick={scrollToNext} style={{ background: 'var(--skyBlue' }}
                            className="button glass-container">FIND OUT MORE</button>
                    </header>
                </div>
    )
}
