<template>
  <div class="customer-info">
    <h2 class="customer-info__title">Информация о клиенте</h2>
    <router-link
        :to="{
        name: 'Edit',
        params: {
          id: id
          }
        }"
        class="btn btn--icon btn--edit">
    </router-link>
    <button
        class="btn btn--icon btn--delete"
        @click="deleteCustomer(id)">
    </button>
    <div class="customer-info__status">
      Статус заявки: {{customer.status}}
    </div>
    <div class="customer-info__full-name">
      {{customer.last_name}} {{customer.first_name}} {{customer.middle_name}}
    </div>
    <div class="middle-block">
      <div class="customer-info__contacts contacts">
        <h3>Контактная информация: </h3>
        <span class="contacts__data contacts__email"><b>Email: </b>{{customer.email}}</span>
        <span class="contacts__data contacts__phone"><b>Номер: </b>{{customer.phone}}</span>
        <span class="contacts__data contacts__address"><b>Адрес: </b>{{customer.address}}</span>
      </div>
      <div class="customer-info__additional">
        <h3>Дополнительная информация:</h3>
        <p>{{customer.additionalInfo}}</p>
      </div>
    </div>
    <router-link class="btn--back" to="/">
      Вернуться к списку клиентов &#8678;
    </router-link>
  </div>
</template>

<script>
import CustomerService from '@/services/CustomerService'
import router from "../../router";
export default {
    data() {
        return {
            id: 0,
            customer: {}
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.getCustomer();
    },
    methods: {
        getCustomer() {
          CustomerService.showCustomer(this.id)
            .then(data => (this.customer = data.data));
        },
        getBack() {
            router.push({ name: "CustomerList" });
        },
        deleteCustomer(id) {
            CustomerService.deleteCustomer(id)
            .then(data => {
                console.log(data);
                this.getBack();
            });
        }
    }
}
</script>

<style lang="scss">
  .customer-info {
    position: relative;
    margin: 0 auto;
    max-width: 700px;
    &__title {
      font-size: 1.2rem;
      padding-right: 50px;
    }
    .btn--edit {
      position: absolute;
      top: 0;
      right: 33px;
    }
    .btn--delete {
      position: absolute;
      top: 0;
      right: 0;
    }
    .middle-block {
      display: flex;
      flex-wrap: wrap;
    }
    &__full-name {
      text-transform: capitalize;
      font-size: 1.8rem;
    }
    &__contacts {
      margin-right: 40px;
      min-width: 300px;
      width: 40%;
    }
    &__additional {
      min-width: 300px;
      width: 40%;
    }
    .contacts {
      &__data {
        display: block;
      }
    }
    &__status {
      margin: 20px 0;
    }
    h3 {
      border-bottom: 2px solid gray;
    }
  }
</style>
