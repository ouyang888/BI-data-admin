import cookie from 'js-cookie';
export const getToken = () => {
    return cookie.get('token');
}
export const getAccount = () => {
    return cookie.get('account');
}
export const removeToken = () => {
    cookie.remove('token');
    cookie.remove('account');
}
export const setToken = (data) => {
    return localStorage.set('token', data);
}