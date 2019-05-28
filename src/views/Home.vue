<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>Мой список</h1>
      <div v-if="customers.length === 0">
        <h2>У Вас пока не добавлено ни одного клиента (:</h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
        <tr>
          <th scope="col">Фамилия</th>
          <th scope="col">Имя</th>
          <th scope="col">Отчество</th>
          <th scope="col">Email</th>
          <th scope="col">Номер телефона</th>
          <th scope="col">Адрес</th>
          <th scope="col">Дополнительная информация</th>
          <th scope="col">Статус</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="customer in customers" :key="customer._id">
          <td>{{ customer.middle_name }}</td>
          <td>{{ customer.first_name }}</td>
          <td>{{ customer.last_name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.additionalInfo }}</td>
          <td>{{ customer.status }}</td>
          <td>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group" style="margin-bottom: 20px;">
                <router-link
                  :to="{
                    name: 'Edit',
                    params: {id: customer._id}
                  }"
                  class="btn btn-sm btn-outline-secondary">
                  &#9998;
                </router-link>
                <button
                  class="btn btn-sm btn-outline-secondary"
                  @click="deleteCustomer(customer._id)">
                  &#10060;
                </button>
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
    },
    deleteCustomer(id) {
      CustomerService.deleteCustomer(id)
        .then(data => {
            console.log(data);
            this.fetchCustomers();
      });
    }
  }
}
</script>