import { client } from '../utils/request'

type IAccountLoginParams = {
  account: string
  password: string
}

export const accountAPI = {
  getInfo: () => client.get('/account/info'),
  logout: () => client.get('/account/logout'),
  login: (params: IAccountLoginParams) => client.post('/account/login', params),
  register: (params: any) => client.post('/account/register', params),
}
