import {h} from 'preact';
import {useContext, useRef} from 'preact/hooks'
import {ThemeContext} from '../../ThemeContext.jsx'
import {ResponsiveIcon,InteractivityIcon ,FrontEndIcon, BackEndIcon, IllustrateIcon, IOTIcon} from '../Icon/icon.jsx';
import HexaFloor from '../../../public/img/Service/hexafloor.svg';
import {InkscapeIcon, FirebaseIcon, NodejsIcon,VueIcon,ReactjsIcon,BootstrapIcon,MongodbIcon} from './icons.jsx'
import checkInViewport from '../../Utilities/CheckInViewport.jsx'
import './style.css';

function Service() {
    const {theme} = useContext(ThemeContext)

    const Background = {
        background:`url(${HexaFloor})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
    const services = [{icon:<ResponsiveIcon className="field_of_expertise_icon"/>,text:'Responsive Web Designing'},
    {icon:<FrontEndIcon className="field_of_expertise_icon"/>,text:'Front End Development'},
    {icon:<BackEndIcon className="field_of_expertise_icon"/>,text:'Back End Development'},
    {icon:<IllustrateIcon className="field_of_expertise_icon"/>,text:'Vector arts and Illustrations'},
    {icon:<IOTIcon className="field_of_expertise_icon"/>,text:'Internet Of Things'},
    {icon:<InteractivityIcon className="field_of_expertise_icon"/>,text:'Interactive Web Applications'},
    ]

    const experiencedFramework = [
    {icon: <FirebaseIcon/>, name:'Firebase'},{icon: <ReactjsIcon/>, name:'React js'},
    {icon: <VueIcon/>, name:'Vue js'},{icon: <NodejsIcon/>, name:'Node js'}, {icon: <MongodbIcon/>, name:'Mongodb'},
    {icon: <BootstrapIcon/>, name:'Bootstrap'},{icon: <InkscapeIcon/>, name:'Inkscape'},
]
    const Ref = useRef()
    checkInViewport(Ref)
    
    return (
        <div ref={Ref} id='Service' style={Background}>
            <h1 className="title">Service</h1>
            <h1 className="bigger_title">Field Of Expertise</h1>
                <div className="foe-wrapper" style={{filter: theme[0]==='@'?theme.replace('@',''):`hue-rotate(${[theme]})`}}>
            {services.map((service,i) => (
                <div key={i} className="foe">
                    <div className="icon_container">
                        {service.icon}
                    </div>
                    <p>{service.text}</p>
                </div>
            ))}
            </div>
            <div className="Service_grid">
                <div className="progress-bar-container" style={{filter: theme[0]==='@'?theme.replace('@',''):`hue-rotate(${[theme]})`}}>
                    <h1 className="progressbar_head">Coding Languages and Platform</h1>
                    <ProgressBar width="100%" height="45px" text="HTML & CSS" progress="90%" />
                    <ProgressBar width="100%" height="45px" text="Java Script" progress="80%" color="rgba(0,0,255,0.4)" />
                    <ProgressBar width="100%" height="45px" text="Python" progress="70%" color="rgb(142 0 0 / 44%)" />
                </div>
                <div>
                    <h1 className="exp_head">Experience</h1>
                <div className="Experiance" style={{filter: theme[0]==='@'?theme.replace('@',''):''}}>
                    {experiencedFramework.map((framework,i)=>(
                    <div key={i} data-sal="fade" data-sal-delay={100*i + 50} data-sal-duration="1000"
                     className="Services_Softwares tooltip">
                         {framework.icon}
                         <div className="tooltiptext">{framework.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Service;

const ProgressBar = ({width,height="60px", text, progress, color="rgba(169, 0, 255, .44)"}) => {
    const side = {
        position:'absolute',
        top:'0', left:'0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(254, 254, 254, 0.3)',
        transform: 'rotateX(0deg) rotateY(0deg)',
    }
    const bottom = {
        ...side,
        boxShadow: '10px 10px 50px 5px rgba(90, 90, 90, 0.7)',
        transform: 'rotateX(90deg)',
        transformOrigin: 'bottom',
    }
    const top = {
        ...side,
        transform: 'translate(0, -100%) rotateX(90deg)',
        transformOrigin: 'bottom',
    }
    const back = {
        ...side,
        transform: `translateZ(-${height})`
    }
    const left = {
        ...side,
        width: height,
        transform: 'rotateY(90deg)',
        transformOrigin: 'left',
    }
    const bar = {
        fontSize: '2rem',
        height:'100%',
        backgroundColor: color,
        boxShadow: `5px 5px 50px 5px ${color}`,
        width:progress,
    }
    const fullbar = {
        fontSize: '2rem',
        height:'100%',
        backgroundColor: color,
        boxShadow: `inset ${color} 0px 0px 17px 5px`,
        width:'100%',
    }


    return (
        <div style={{ position: 'relative', padding:'3rem 0' }}>
            <div style={{ maxWidth: '800px',width: width, height: height, top: '50%', left: '50%', position: 'absolute', transform: 'translate(-50%,-50%)' }}>
                <div className="rotate_animation" style={{ height: '100%', width: '100%', transformStyle: "preserve-3d", transform: 'rotateX(-16deg) rotateY(-22deg)', }}>
                    <div className="Front" style={side}><div style={bar}>{text}</div></div>
                    <div className="Back" style={back}><div style={bar}/></div>
                    <div className="Top" style={top}><div style={bar}/></div>
                    <div className="Bottom" style={bottom}><div style={bar}/></div>
                    <div className="Left" style={left}><div style={fullbar}/></div>
                </div>
            </div>
        </div>
    )
}
