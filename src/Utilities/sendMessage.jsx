import {h} from 'preact';
import axios from 'axios';

async function sendMessage(data) {
    const url = 'https://khandakar227-contact.herokuapp.com'
    let error_data;
    const res = await axios.post(`${url}/contact`, data)
        .catch(err=> {
            error_data = {error: err.message}
            return error_data
            
        })
    return res?.data || error_data
}

export default sendMessage
