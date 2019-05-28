import Api from '@/services/Api'

export default {
  getAllCustomers () {
    return Api().get('customer/customers')
  },
  showCustomer (customerId) {
    return Api().get(`customer/customer/${customerId}`)
  },
  addCustomer (customer) {
    return Api().post('customer/create', customer)
  },
  editCustomer (customerId, customerData) {
    return Api().put(`customer/update?customerID=${customerId}`, customerData)
  },
  deleteCustomer (customerId) {
    return Api().delete(`customer/delete?customerID=${customerId}`)
  }
}
