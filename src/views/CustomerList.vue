<template>
  <div class="customer-list">
    <h1 class="customer-list__title">Список клиентов</h1>
    <router-link class="btn btn--icon btn--add" to="/create"></router-link>
    <p class="customer-list--empty"
      v-if="customers.length === 0 && !loading">
      Пока не добавлено ни одного клиента
    </p>
    <p class="customer-list__loading"
      v-if="loading">
      Загрузка...
      <img src="@/assets/loading.gif" alt="spinner">
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
            class="btn--view">
          <span class="table__data table__data--name">{{ customer.last_name }} {{ customer.first_name[0] }}. {{ customer.middle_name [0] }}.</span>
          <!-- to do: hover effect -->
          <!-- <span class="table__data">{{ customer.email }}</span> -->
          <!-- <span class="table__data">{{ customer.phone }}</span> --> 
          <span class="table__data table__data--status">{{ customer.status }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerService from '@/services/CustomerService'
export default {
  data() {
    return {
      customers: [],
      loading: true
    }
  },
  created() {
    this.fetchCustomers();
  },
  methods: {
    fetchCustomers() {
      CustomerService.getAllCustomers()
        .then(data => {
          this.customers = data.data;
          this.loading = false;
        })
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
      top: -10px;
      right: 10px;
    }
    .btn--view {
      position: relative;
      box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
      display: flex;
      justify-content: space-between;
      padding: 13px 15px 13px 55px;
      width: 100%;
    }
    .table {
      &__row {
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        margin: 20px auto;
      }
    }
    &__loading {
      position: relative;
      text-align: center;
      img {
        left: 0;
        width: 100%;
        position: absolute;
        z-index: 5;
        top: 0;
      }
    }
  }
</style>
