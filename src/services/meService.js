import request from './request'

export const fetch = () => {
  return request(
    { url: 'me', method: 'GET' },
    { requestType: 'fetchMe' }
  )
}
