
import instance from './config.js'

export async function getLunBoData () {
  return await instance.get('/getlunbo')
}

export async function getRecommendData (limit = 10) {
  return await instance.get(`/recommend?limit=${limit}`)
}
