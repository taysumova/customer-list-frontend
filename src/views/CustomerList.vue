<template>
  <div class="customer-list">
    <h1 class="customer-list__title">Список клиентов</h1>
    <router-link class="btn btn--icon btn--add" to="/create"></router-link>
    <p class="customer-list--empty"
      v-if="customers.length === 0">
      Пока не добавлено ни одного клиента (:
    </p>
    <div class="customer-list__table table">
      <div
        class="table__row"
        v-for="customer in customers"
        :key="customer._id">
        <router-link :to="{
            name: 'View',
            params: {
              id: customer._id
              }
            }"
            class="btn btn--icon btn--view">
        </router-link>
        <span class="table__data table__data--name">{{ customer.last_name }} {{ customer.first_name[0] }}. {{ customer.middle_name [0] }}.</span>
        <!-- to do: hover effect -->
        <!-- <span class="table__data">{{ customer.email }}</span> -->
        <!-- <span class="table__data">{{ customer.phone }}</span> --> 
        <span class="table__data table__data--status">{{ customer.status }}</span>
      </div>
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

<style lang="scss">
  .customer-list {
    position: relative;
    margin: 0 auto;
    max-width: 700px;
    &__title {
      text-align: center;
      font-size: 1.5rem;
      padding-right: 50px;
    }
    .btn--add {
      position: absolute;
      top: 0;
      right: 10px;
    }
    .btn--view {
      border-radius: 7px;
      margin-right: 15px;
    }
    .table {
      &__row {
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        margin: 20px auto;
      }
      &__data {
        &--name {
          width: 70%;
        }
        &--status {
          width: 30%;
        }
      }
    }
  }
</style>
