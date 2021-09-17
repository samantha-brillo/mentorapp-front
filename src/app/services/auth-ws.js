import {_api} from './api' 

                            //data = {email:'',password:''}
export const loginEndpoint = (data) => _api.post('/auth/login',data);

export const signupEndpoint = (data) => _api.post('/auth/signup',data);

export const logoutEndpoint = () => _api.get('/auth/logout')

export const signupGoogle = () => _api.get('/auth/google') 

export const updateUser = (data) => _api.patch ('/auth/update',data)

export const getList = (data) => _api.get (`/auth/getlist/${data}`)



