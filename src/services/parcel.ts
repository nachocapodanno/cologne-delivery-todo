import { authHeader } from "../utils/authHeader";
import { logout } from "./auth";
import { history } from "../utils/history";

const apiUrl = process.env.REACT_APP_COLOGNE_DELIVERY_API;
const contentType = { 'Content-Type': 'application/json' };

const findAllByBikerId = ({id}: any) => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader() as Headers
    };
    return fetch(`${apiUrl}/parcel/biker/${id}`, requestOptions).then(handleResponse);
}

const findAll = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader() as Headers
    };
    return fetch(`${apiUrl}/parcel`, requestOptions).then(handleResponse);
}

const update = (params:any) => {
    const requestOptions = {
        method: 'PATCH',
        headers: {...authHeader() as Headers, ...contentType},
        body: JSON.stringify({ ...params.params, status: +params.params.status })
    };
    return fetch(`${apiUrl}/parcel/${params.params.id}`, requestOptions).then(handleResponse);
}

const handleResponse = (response:any) => {
    return response.text().then((text:any) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout()
                history.push("/");
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
const parcelService = {
    findAllByBikerId,
    findAll,
    update
};
export default parcelService;