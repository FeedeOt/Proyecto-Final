import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/api/"
});

const sendForm = async (data) => {
    const response = await instance({
        method: 'POST',
        url: '/email',
        data: data
    });

    return response.data
}

export {
    sendForm
}
