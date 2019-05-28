<template>
  <div class="customer-form">
    <h2 class="customer-form__title">Информация о клиенте</h2>
    <div class="customer-form__input input">
      Фамилия: {{customer.last_name}}
    </div>
    <div class="customer-form__input input">
      Имя: {{customer.first_name}}
    </div>
    <div class="customer-form__input input">
      Отчество: {{customer.middle_name}}
    </div>
    <div class="customer-form__input input">
      Email: {{customer.email}}
    </div>
    <div class="customer-form__input input">
      Номер телефона: {{customer.phone}}
    </div>
    <div class="customer-form__input input">
      Адрес: {{customer.address}}
    </div>
    <div class="customer-form__textarea textarea">
      Дополнительная информация: {{customer.additionalInfo}}
    </div>
    <div class="customer-form__select">
      Статус заявки: {{customer.status}}
    </div>
    <router-link
        :to="{
        name: 'Edit',
        params: {id: id}
        }"
        class="btn btn--edit">
        &#9998;
    </router-link>
    <button
        class="btn btn--delete"
        @click="deleteCustomer(id)">
        &#10060;
    </button>
    <router-link
        class="btn btn--back"
        to="/">
        Вернуться к списку клиентов
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
