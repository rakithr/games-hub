import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '981c75b1a57a4471be1264753829dfde'
    }
});