import axios from 'axios'

const VTU_BASE_URL = process.env.REACT_APP_VTU_BASE_URI
const API_KEY = process.env.REACT_APP_API_KEY
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY


//get mtn variation

const getMtn = async () => {
    const res = await axios.get(`${VTU_BASE_URL}/api/service-variations?serviceID=mtn-data`, {
        headers: {
            "api-key": API_KEY,
            "public-key": PUBLIC_KEY
        }

    })

    const { data: { content } } = res

    return content
}

//get airtel

const getAirtel = async () => {
    const res = await axios.get(`${VTU_BASE_URL}/api/service-variations?serviceID=airtel-data`, {
        headers: {
            "api-key": API_KEY,
            "public-key": PUBLIC_KEY
        }

    })

    const { data: { content } } = res

    return content
}

//get glo

const getGlo = async () => {
    const res = await axios.get(`${VTU_BASE_URL}/api/service-variations?serviceID=glo-data`, {
        headers: {
            "api-key": API_KEY,
            "public-key": PUBLIC_KEY
        }

    })

    const { data: { content } } = res

    return content
}

//get 9mobile

const getMobile = async () => {
    const res = await axios.get(`${VTU_BASE_URL}/api/service-variations?serviceID=etisalat-data`, {
        headers: {
            "api-key": API_KEY,
            "public-key": PUBLIC_KEY
        }

    })

    const { data: { content } } = res

    return content
}

//get Wallet Balance

const getWallet = async () => {
    const res = await axios.get(`${VTU_BASE_URL}/api/balance`, {
        headers: {
            "api-key": API_KEY,
            "public-key": PUBLIC_KEY
        }

    })

    const { data: { contents } } = res

    return contents
}
//get airtime categories

const getAirtimeCategory = async () => {
    const res = await axios.get(`${VTU_BASE_URL}/api/services?identifier=airtime`, {
        headers: {
            "api-key": API_KEY,
            "public-key": PUBLIC_KEY
        }

    })

    const { data: { content } } = res
    return content
}

//get Data categories

const getDataCategory = async () => {
    const res = await axios.get(`${VTU_BASE_URL}/api/services?identifier=data`, {
        headers: {
            "api-key": API_KEY,
            "public-key": PUBLIC_KEY
        }

    })

    const { data: { content } } = res
    return content
}

//get Data categories

const getElectricityCategory = async () => {
    const res = await axios.get(`${VTU_BASE_URL}/api/services?identifier=electricity-bill`, {
        headers: {
            "api-key": API_KEY,
            "public-key": PUBLIC_KEY
        }

    })

    const { data: { content } } = res
    return content
}
//get Data categories

const getTvCategory = async () => {
    const res = await axios.get(`${VTU_BASE_URL}/api/services?identifier=tv-subscription`, {
        headers: {
            "api-key": API_KEY,
            "public-key": PUBLIC_KEY
        }

    })

    const { data: { content } } = res
    return content
}

const vtuService = {
    getMtn,
    getAirtel,
    getGlo,
    getMobile,
    getWallet,
    getAirtimeCategory,
    getDataCategory,
    getElectricityCategory,
    getTvCategory,
}


export default vtuService
