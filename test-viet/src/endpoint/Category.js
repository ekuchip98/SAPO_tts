import axios from 'axios'
import { axios_config } from './User';

const adminUrl = "/admin";
const categoryUrl = adminUrl + "/categories";


const getListCategories = async (page, pageSize) => {

    let params = {
        page: page ? page : 1,
        size: pageSize ? pageSize : 5
    };

    let config = {
        params: params
    }

    let rsp = await axios.get(categoryUrl, config);
    return rsp.data;
}

const getCategoryById = async (id) => {
    let url = categoryUrl + "/" + id;
    let rsp = await axios.get(url);
    return rsp.data;
}

const createCategory = (token, form) => {
    let res = axios.post(categoryUrl, {
        name: form.name,
        code: form.code,
        description: form.description,
    }, axios_config(token))
    return res
}

const updateCategory = (token, form, id) => {
    let url = categoryUrl + "/" + id;
    let res = axios.put(url, {
        name: form.name,
        code: form.code,
        description: form.description,
    }, axios_config(token))
    return res
}

const deleteCategory = (token, id) => {
    let url = categoryUrl + "/" + id;
    let res = axios.delete(url, axios_config(token))
    return res
}

export { getListCategories, getCategoryById, createCategory, deleteCategory, updateCategory }