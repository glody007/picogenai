import axios, { type AxiosInstance } from 'axios'
import { errorMessages } from './error'
import type { PicogenAIOptions, RunOptions } from './ressources'

const API_URL: string = 'https://api.picogen.io'

export class PicogenAI {
  client: AxiosInstance
  constructor ({ apiKey }: PicogenAIOptions) {
    if (apiKey === '') {
      throw new Error(errorMessages.MANDATORY_INITIALIZATION_MISSING)
    }
    this.client = axios.create({
      baseURL: API_URL,
      headers: {
        'API-Token': apiKey,
        'Content-Type': 'application/json'
      }
    })
  }

  // TODO throw error if invalid parameters passed to client queries
  // TODO setting default options
  async run (options: RunOptions): Promise<object> {
    return await new Promise((resolve, reject) => {
      this.client
        .post('/job/run', options)
        .then((resp) => {
          resolve(resp.data)
        })
        .catch(reject)
    })
  }

  // TODO throw error if invalid parameters passed to client queries
  // TODO setting default options
  async cost (options: RunOptions): Promise<object> {
    return await new Promise((resolve, reject) => {
      this.client
        .post('/job/cost', options)
        .then((resp) => {
          resolve(resp.data)
        })
        .catch(reject)
    })
  }

  async get (id: string): Promise<object> {
    return await new Promise((resolve, reject) => {
      this.client
        .get(`/job/get/${id}`)
        .then((resp) => {
          resolve(resp.data)
        })
        .catch(reject)
    })
  }

  async list (page: number, limit: number): Promise<object> {
    return await new Promise((resolve, reject) => {
      this.client
        .get(`/job/list?page=${page}&limit=${limit}`)
        .then((resp) => {
          resolve(resp.data)
        })
        .catch(reject)
    })
  }
}

export default PicogenAI
