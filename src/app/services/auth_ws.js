import {_api} from './api' 

                        //data = {email:'',password:''}
export const loginEndpoint = (data) => _api.post('/auth/login',data);

export const signupEndpoint = (data) => _api.post('/auth/signup',data);

export const logoutEndpoint = () => _api.post('/auth/logout')





