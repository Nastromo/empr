import axios from 'axios';

let url = `http://cyt.empirecitylabs.net/api`;
if (window.location.href.includes(`localhost`)) {
    url = `http://localhost:4000`;
} else if (window.location.href.includes(`192.168`)) {
    url = `http://192.168.0.105:4000`;
}


export default axios.create({
    baseURL: url,
    headers: {'x-auth': `Bearer ${localStorage.getItem('emprToken')}`}
});