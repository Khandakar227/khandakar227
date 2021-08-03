import { h } from 'preact';
import { useContext, useState, useRef } from 'preact/hooks';
import { ThemeContext } from '../../ThemeContext.jsx';
import FutureCity from './FutureCity.jsx';
import { FacbookIcon, GithubIcon, LinkedInIcon, MessageSentIcon } from '../Icon/icon.jsx';
import checkInViewport from '../../Utilities/CheckInViewport.jsx';
import sendMessage from '../../Utilities/sendMessage.jsx';
import './style.css';

export default function Contact() {
    const Ref = useRef()
    checkInViewport(Ref)

    const [formData, setFormData] = useState({name: '', email: '', message: ''})
    const [hideForm, setHideForm] = useState(false)
    const [Respond, setRespond] = useState({error: '', message: ''})
    const [Loading, setLoading] = useState(false)
    const { theme } = useContext(ThemeContext)
    const BgColor = "rgb(31, 0, 66)"

    const submitMessage = async (e) => {
      e.preventDefault();
      setLoading(true);
      if (formData.name && formData.email && formData.message) {
        const resData = await sendMessage(formData).catch(
          (err) => {
            setRespond({ error: err });
            console.log(Respond);
            setLoading(false);
          },
        );
        if (resData?.message) {
          setRespond({ message: resData?.message });
          console.log(Respond);
          setHideForm(true);
          setLoading(false);
        } else if (resData?.error) {
          setLoading(false);
          setRespond({ error: resData?.error });
          console.log(Respond);
        }
      }
    };

    const inputChange= (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div ref={Ref} id="Contact" style={{ filter: theme[0] === '@' ? theme.replace('@', '') : `hue-rotate(${[theme]})` }}>
            <FutureCity fill={BgColor} style={{ minWidth: '900px', overflow: 'hidden', marginBottom: '-5px' }} />
            <div className="contact_container" style={{ background: BgColor }}>
                <h1 className="contact_heading">Contact Me</h1>
                <div className="form_container glass-container" style={{position:'relative'}}>
                    {!hideForm?<form onSubmit={submitMessage}>
                        <div className="input_container name_email">
                            <input onChange={inputChange} name="name" placeholder="Name" required />
                            <input onChange={inputChange} name="email" type="email" placeholder="Email" required />
                        </div>
                        <div className="input_container">
                            <textarea onChange={inputChange} name="message" placeholder="Leave a reply" required />
                        </div>
                        {Respond.error? (<h1>{Respond.error} &#9888;</h1>): ''}
                        <button className="button glass-container" type="submit">Submit</button>
                    </form>: 
                    <div className="mail_sent">
                        <div style={{textAlign: 'center', padding: '1.2rem 0rem'}}>
                    <h1 style={{fontSize:'1.3rem'}}>{Respond.error?Respond.error:Respond.message?Respond.message:''}</h1>
                            {Respond.message?<MessageSentIcon/> : ''}
                        </div>
                    </div>}
                    <div data-sal="slide-right" data-sal-duration="1000" style={{
                            position: 'absolute',background: '#211941c7',
                            top: '0',
                            height: '100%',
                            left: '0',
                            width: '100%',
                            display: Loading?'grid': 'none',
                            placeItems: 'center',
                    }}><div className="loader_icon"/></div>
                </div>
            </div>
            <div className="social_profiles">
                <footer className="footer">
                    <a href="https://www.facebook.com/profile.php?id=100015443855406&viewas=">
                        <FacbookIcon className="bg_white" fill="#1877f2" /></a>
                    <a href="https://www.github.com/khandakar227">
                        <GithubIcon className="bg_white" fill="#000" /></a>
                    <a href="https://www.linkedin.com/in/khandakar-shakib-al-hasan-716475207">
                        <LinkedInIcon className="bg_white" fill="#0077b5" /></a>
                </footer>
                <p className="copyright">Developed by Khandakar Shakib</p>
            </div>
        </div>
    )
}
