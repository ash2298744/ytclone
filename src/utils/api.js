import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '2527b5010emsh1047c967eceaba3p12699bjsn1a3f0b9b695e',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}