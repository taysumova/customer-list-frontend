<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>Список клиентов</h1>
      <div v-if="customers.length === 0">
        <h2>Пока не добавлено ни одного клиента (:</h2>
      </div>
    </div>
    <router-link to="/create">Добавить клиента</router-link>
    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
        <tr>
          <th scope="col">ФИО</th>
          <th scope="col">Email</th>
          <th scope="col">Номер телефона</th>
          <th scope="col">Статус</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="customer in customers" :key="customer._id">
          <td>{{ customer.last_name }} {{ customer.first_name[0] }} {{ customer.middle_name [0] }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.status }}</td>
          <td>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group" style="margin-bottom: 20px;">
                <router-link
                  :to="{
                    name: 'View',
                    params: {id: customer._id}
                  }"
                  class="btn btn-sm btn-outline-secondary">
                  VIEW
                </router-link>
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import CustomerService from '@/services/CustomerService'
export default {
  data() {
    return {
      customers: []
    }
  },
  created() {
    this.fetchCustomers();
  },
  methods: {
    fetchCustomers() {
      CustomerService.getAllCustomers()
        .then(data => (this.customers = data.data))
    }
  }
}
</script>