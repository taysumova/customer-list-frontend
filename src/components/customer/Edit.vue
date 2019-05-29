<template>
  <div class="customer-form customer-form--edit">
    <h2 class="customer-form__title">Отредактировать информацию</h2>
    <div class="customer-form__input input">
      <label class="input__label">Фамилия</label>
      <input type="text" class="input__field" v-model="customer.last_name">
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Имя</label>
      <input type="text" class="input__field" v-model="customer.first_name">
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Отчество</label>
      <input type="text" class="input__field" v-model="customer.middle_name">
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Email</label>
      <input type="text" class="input__field" v-model="customer.email">
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Номер телефона</label>
      <input type="text" class="input__field" v-model="customer.phone">
    </div>
    <div class="customer-form__input input">
      <label class="input__label">Адрес</label>
      <input type="text" class="input__field" v-model="customer.address">
    </div>
    <div class="customer-form__textarea textarea">
      <label class="textarea__label">Дополнительная информация</label>
      <textarea class="textarea__field" v-model="customer.additionalInfo" rows="5"></textarea>
    </div>
    <div class="customer-form__select select">
      <label class="select__label">Статус заявки</label>
      <select class="select__field" v-model="customer.status">
        <option class="select__option">Новый клиент</option>
        <option class="select__option">В работе</option>
        <option class="select__option">Завершена</option>
        <option class="select__option">Отмена</option>
      </select>
    </div>
    <button class="btn btn--save" @click="editCustomer">Сохранить</button>
    <router-link
      :to="{
          name: 'View',
          params: {
          id: id
        }
      }"
      class="btn--back">
      Вернуться без сохранения &#8678;
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
        editCustomer() {
            let customerData = {
                last_name: this.customer.last_name,
                first_name: this.customer.first_name,
                middle_name: this.customer.middle_name,
                email: this.customer.email,
                phone: this.customer.phone,
                address: this.customer.address,
                additionalInfo: this.customer.additionalInfo,
                status: this.customer.status
            };
            CustomerService.editCustomer(this.id, customerData)
                .then(data => {
                    console.log(data);
                    router.push({
                      name: 'View',
                      params: {
                        id: this.id
                        }
                    });
                });
        },
        getCustomer() {
          CustomerService.showCustomer(this.id)
            .then(data => (this.customer = data.data));
        }
    }
}
</script>

<style lang="scss">
</style>
