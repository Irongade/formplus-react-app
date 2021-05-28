import axios from 'axios'
const API_BASE_URL = 'https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates';

const connection = axios.create({
    baseURL: API_BASE_URL,
    responseType: "json",
})

const fetchTemplates = async () => {
    const response = await connection.get(API_BASE_URL)

    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchTemplates
};