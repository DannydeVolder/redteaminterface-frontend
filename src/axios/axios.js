import axios from 'axios';
const baseDomain = "http://10.10.1.84:5000";
const baseURL = `${baseDomain}/api`;
const resource = "/v1/resources/attacks"

const API = axios.create({
    baseURL
})

export default {

    executeGetHostName(){
        return API.get(`${resource}/gethostname`)
    },

    executeMock2Attack(){
        return API.get(`${resource}/mock2`)
    },

    executeMock3Attack(){
        return API.get(`${resource}/mock3`)
    },

    executeFreeFloatBOF(){
        return API.get(`${resource}/bufferoverflow`)
    },

    executeSSHBruteForce(){
        return API.get(`${resource}/SSHLoginAttempts`)
    },

}
