import axios from "axios";

const instance = axios.create({
    baseURL: "http://evening-reef-74314.herokuapp.com/api/"
});

const sendForm = async (data) => {
    const response = await instance({
        method: 'POST',
        url: 'about/save',
        data: data
    });

    return response
}

export {
    sendForm
}
