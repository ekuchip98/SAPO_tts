import axios from 'axios'

const baseUrl = "/api";
const loginUrl = baseUrl + "/login"
const signUpUrl = baseUrl + "/signup"
const verifyUrl = "/verify"

let axios_config = token => {
    return {
        headers: {
            "Authorization": "Bearer " + token
        }
    }
};

const login = async (username, password) => {
    try {
        let res = await axios.post(loginUrl, {
            name: username,
            password: password
        })
        return res;
    } catch (e) {
        return null;
    }

}

const signup = async (form) => {
    try {
        let res = await axios.post(signUpUrl, {
            name: form.name,
            full_name: form.website,
            password: form.pass,
            email: form.email,
            phone: form.phone
        })
        return res;
    } catch (e) {
        return null;
    }
}

const verify = async (token) => {
    try {
        let res = await axios.post(verifyUrl, {}, axios_config(token))
        return res.status;
    } catch (e) {
        return e.request.status
    }
}

export { login, signup, verify, axios_config }