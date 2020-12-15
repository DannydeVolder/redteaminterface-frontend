import axios from 'axios';
const baseDomain = "http://localhost:5000";
const baseURL = `${baseDomain}`;
const resource = ""

const API = axios.create({
    baseURL
})

export default {

    executePortScan(){
        return API.get(`${resource}/NMAP`)
    },

    executeSQLI(){
        return API.get(`${resource}/SQLI`)
    },

    executeDDOS(){
        return API.get(`${resource}/DDOS`)
    },

    executeRansomWare(){
        return API.get(`${resource}/RANSOMWARE`)
    },

    executeSSHBruteForce(){
        return API.get(`${resource}/BRUTEFORCE`)
    },

}
