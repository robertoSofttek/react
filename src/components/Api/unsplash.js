import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID XRO1v15YVHTASQXot7bmDcRi7ritH4LRPraE6FPiP0Y'
    }
})