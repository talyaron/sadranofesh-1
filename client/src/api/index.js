
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
})

export const createUser = user => api.post(`/user`, user).then(() => {});
export const getUsers = () => api.post(`/get-users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.post(`/user-by-id/${id}`)

export const createOrder = order => api.post(`/order`, order).then(() => {});
export const getOrders = () => api.post(`/get-orders`)
export const getNotAprovedOrders = () => api.post(`/get-not-aproved-orders`)
export const ordersAproved = (id, payload) => api.put(`/update-order/${id}`, payload)


const apis = {
  createUser,
  createOrder,
  getUsers,
  getOrders,
  updateUserById,
  deleteUserById,
  getUserById,
  getNotAprovedOrders,
  ordersAproved
}

export default apis