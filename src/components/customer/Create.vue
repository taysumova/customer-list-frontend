<template>
  <div class="customer-form">
    <h2 class="customer-form__title">Добавить клиента</h2>
    <div class="customer-form__input input">
      <label class="input__label">Фамилия</label>
      <input type="text" class="input__field" v-model="last_name" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Имя</label>
      <input type="text" class="input__field" v-model="first_name" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Отчество</label>
      <input type="text" class="input__field" v-model="middle_name" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Email</label>
      <input type="text" class="input__field" v-model="email" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Номер телефона</label>
      <input type="text" class="input__field" v-model="phone" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Адрес</label>
      <input type="text" class="input__field" v-model="address" required>
    </div>
    <div class="customer-form__textarea textarea">
      <label class="textarea__label">Дополнительная информация</label>
      <textarea class="textarea__field" v-model="additionalInfo" required></textarea>
    </div>
    <div class="customer-form__select">
      <label class="select__label">Статус заявки</label>
      <select class="select__field" v-model="status">
        <option class="select__option">Новый клиент</option>
        <option class="select__option">В работе</option>
        <option class="select__option">Завершена</option>
        <option class="select__option">Отмена</option>
      </select>
    </div>
    <button class="btn btn-success" @click="createCustomer">Добавить</button>
  </div>
</template>
<script>
  import CustomerService from "@/services/CustomerService";
  import router from "@/router";
  
  export default {
    data() {
      return {
        last_name: '',
        first_name: '',
        middle_name: '',
        email: '',
        phone: '',
        address: '',
        additionalInfo: '',
        status: ''
      }
    },
    methods: {
      createCustomer() {
        let customerData = {
          last_name: this.last_name,
          first_name: this.first_name,
          middle_name: this.middle_name,
          email: this.email,
          phone: this.phone,
          address: this.address,
          additionalInfo: this.additionalInfo,
          status: this.status
        };
        this.__submitToServer(customerData);
      },
      __submitToServer(data) {
          CustomerService.addCustomer(data).then(data => {
          console.log(data);
          router.push({ name: "home" });
        });
      }
    }
  };
</script>
