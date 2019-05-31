<template>
  <div class="customer-info">
    <h2 class="customer-info__title">Информация о&nbsp;клиенте</h2>
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
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
    background: white;
    padding: 10px;
    position: relative;
    margin: 0 auto;
    max-width: 700px;
    &__title {
      font-size: 1.4rem;
      padding-right: 80px;
    }
    .btn--edit {
      position: absolute;
      top: 20px;
      right: 53px;
    }
    .btn--delete {
      position: absolute;
      top: 20px;
      right: 10px;
    }
    .middle-block {
      display: flex;
      flex-wrap: wrap;
    }
    &__full-name {
      text-transform: capitalize;
      font-size: 1.8rem;
      text-shadow: 1px 1px 10px #000000;
    }
    &__contacts {
      margin-right: 40px;
    }
    .contacts {
      &__data {
        display: block;
      }
    }
    &__status {
      margin: 20px 0;
      color: #000;
    }
    h3 {
      border-bottom: 2px solid gray;
      color: #000;
    }
  }
</style>
