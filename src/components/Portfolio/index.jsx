import {h} from 'preact';
import { useContext, useState, useRef } from 'preact/hooks'
import {ThemeContext} from '../../ThemeContext.jsx'
import {CrossIcon} from '../Icon/icon.jsx'
import NOTFOUND from '../../../public/img/404.svg'
import imgSrc from './project.json'
import checkInViewport from '../../Utilities/CheckInViewport.jsx'
import './style.css';

function Portfolio() {
    const {theme} = useContext(ThemeContext)

    const [action, setAction] = useState(null)

    const Ref = useRef()
    checkInViewport(Ref)

    const HandleView =(action) => {
        console.log(action)
        if(action?.type==='image') {
            setAction(action)
        } else if (action?.type==='link') {
            window.open(action.src, 'blank')
        }
    }

    return (
        <div ref={Ref} id="Portfolio">
            <h2 className="portfolio_heading">Portfolio</h2>
            <h1 className="portfolio_title">My Projects</h1>
            <div className="portfolio_wrapper">
               {
                   imgSrc.map((img,i)=> {
                       return (
                           <div className="thumbnail_container">
                               <div
                                data-sal="slide-down"
                                data-sal-duration="1200"
                                data-sal-delay={100*i} className="thumbnail">
                                   <img className="portfolio_img" src={img.src || NOTFOUND} alt={img.info.title} />
                                   <div className="info" style={{filter: theme[0]==='@'?theme.replace('@',''):`hue-rotate(${[theme]})`}}>
                                       <h1 className="info_title">{img.info.title}</h1>
                                       <p className="info_desc">{img.info.desc}</p>
                                       <button className="button" onClick={()=>HandleView(img.action)}>View</button>
                                   </div>
                               </div>
                           </div>
                       )
                })
               }
            </div>
                {
               action?<div className="full_view glass-container">
                   <div className="full_thumbnail">
                       <div className="Align_right">
                           <button className="transparent_button" onClick={()=>setAction(null)}><CrossIcon/></button>
                        </div>
                        {action.type==='image'?<img className="full_img" src={action.src} alt="full_img"/>: ''}
                   </div>
               </div>:''
               }
        </div>
    )
}

export default Portfolio
