<template>
  <div class="customer-form">
    <h2 class="customer-form__title">{{title}}</h2>
    <div class="customer-form__input input">
      <label class="input__label">ffff</label>
      <input type="text" class="input__field" v-model="last_name" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">ffff</label>
      <input type="text" class="input__field" v-model="first_name" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">ffff</label>
      <input type="text" class="input__field" v-model="middle_name" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">ffff</label>
      <input type="text" class="input__field" v-model="email" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">ffff</label>
      <input type="text" class="input__field" v-model="phone" required>
    </div>
    <div class="customer-form__input input">
      <label class="input__label">ffff</label>
      <input type="text" class="input__field" v-model="address" required>
    </div>
    <div class="customer-form__textarea textarea">
      <label class="textarea__label">ffff</label>
      <input type="text" class="textarea__field" v-model="additionalInfo" required>
    </div>
    <div class="customer-form__select">
      <label class="select__label">ffff</label>
      <select class="select__field" v-model="status">
        <option class="select__option">Option 1</option>
        <option class="select__option">Option 2</option>
        <option class="select__option">Option 3</option>
      </select>
    </div>
    <slot name="action" />
  </div>
</template>
  <!-- <customer-form title="Add Customer">
    <button slot="action" class="btn btn-success" @click="createCustomer">Добавить</button>
  </customer-form> -->
<script>
  export default {
    data () {
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
    props: [
      'title',
      'customer'
    ]
  }
</script>

<style>
</style>
