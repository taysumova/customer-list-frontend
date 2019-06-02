<template>
  <form class="customer-form" @submit.prevent="createCustomer()">
    <h2 class="customer-form__title">Добавить клиента</h2>
    <div class="customer-form__input input">
      <label class="input__label">Фамилия*</label>
      <input type="text" class="input__field" v-model="last_name" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Имя*</label>
      <input type="text" class="input__field" v-model="first_name" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Отчество</label>
      <input type="text" class="input__field" v-model="middle_name">
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Email*</label>
      <input type="email" class="input__field" v-model="email" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Номер телефона*</label>
      <input type="text" class="input__field" v-model="phone" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Адрес*</label>
      <input type="text" class="input__field" v-model="address" required>
    </div>
    <div class="customer-form__textarea textarea">
      <label class="textarea__label">Дополнительная информация</label>
      <textarea class="textarea__field" v-model="additionalInfo" rows="5"></textarea>
    </div>
    <div class="customer-form__select select">
      <label class="select__label">Статус заявки</label>
      <select class="select__field" v-model="status">
        <option class="select__option">Новый клиент</option>
        <option class="select__option">В работе</option>
        <option class="select__option">Завершена</option>
        <option class="select__option">Отмена</option>
      </select>
    </div>
    <button class="btn btn--save">Добавить</button>
    <router-link
      to="/"
      class="btn--back">
      Вернуться без добавления &#8678;
    </router-link>
  </form>
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
          router.push({ name: "CustomerList" });
        });
      }
    }
  };
</script>

<style lang="scss">
  .customer-form {
    position: relative;
    max-width: 400px;
    margin: 0 auto;
    &__title {
      text-align: center;
    }
    .input,
    .textarea,
    .select {
      display: flex;
      flex-direction: column;
      &__field {
        border-radius: 7px;
        min-height: 25px;
        outline: none;
        padding: 0 10px;
        margin: 10px 0 20px;
      }
    }
    .select {
      &__field {
        background: transparent;
        max-width: 150px;
      }
    }
    .textarea {
       &__field {
        padding: 10px;
      }
    }
    .btn--save {
      font-size: 1.3rem;
      margin: 0 auto;
      min-height: 40px;
      max-width: 300px;
      width: 100%;
    }
  }
</style>
