import { client } from '../utils/request'

type ISendCodeParams = {
  target: string
}

type IVerifyCodeParams = {
  code: number
  scene: 'login' | 'register'
}

export const securityAPI = {
  sendCode: (params: ISendCodeParams) =>
    client.post('/security/sendcode', params),
  verifyCode: (params: IVerifyCodeParams) =>
    client.post('/security/verifycode', params),
}
