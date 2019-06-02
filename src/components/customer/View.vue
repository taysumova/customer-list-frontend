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
        @click="toggleDeleteModal">
    </button>
    <div v-if="deleteMode" class="customer-info__confirm-delete">
      <p>Вы уверены, что хотите удалить клиента?</p>
      <div>
        <button
        class="btn btn--icon btn--yes"
        @click="deleteCustomer(id)">
        Да
      </button>
      <button
        class="btn btn--icon btn--no"
        @click="toggleDeleteModal">
        Нет
      </button>
      </div>
    </div>
    <div class="customer-info__status">
      Статус заявки: {{customer.status}}
    </div>
    <div class="customer-info__full-name">
      {{customer.last_name}} {{customer.first_name}} {{customer.middle_name}}
    </div>
    <div class="middle-block">
      <div class="customer-info__contacts contacts">
        <h3>Контактная информация: </h3>
        <span class="contacts__data contacts__email">{{customer.email}}</span>
        <a
          class="contacts__data contacts__phone"
          :href="'tel:' + customer.phone">
          {{customer.phone}}
        </a>
        <span class="contacts__data contacts__address">
          {{customer.address}}
        </span>
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
            deleteMode: false,
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
        toggleDeleteModal() {
          this.deleteMode = !this.deleteMode;
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
        position: relative;
        padding: 10px 0 10px 35px;
        &:before {
          content: '';
          position: absolute;
          width: 26px;
          height: 26px;
          top: 5px;
          left: 0
        }
      }
      &__email {
        &:before {
          background: rgb(221, 132, 59) url('../../assets/icons/mail.svg') no-repeat center;
          border-radius: 30%;
        }
      }
      &__phone {
        color: blue;
        display: inline-block;
        &:before {
          border-radius: 50%;
          background: rgb(59, 221, 221) url('../../assets/icons/phone.svg') no-repeat center;
        }
      }
      &__address {
        &:before {
          background: url('../../assets/icons/address.svg') no-repeat center;
        }
      }
    }
    &__status {
      margin: 20px 0;
      color: #000;
    }
    &__confirm-delete {
      background: rgba(43, 39, 39, 0.8);
      position: absolute;
      color: white;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        width: 100%;
        font-size: 1.5rem;
        text-align: center;
      }
      .btn {
        &--icon {
          width: 50px;
          height: 50px;
          margin: 10px;
          display: inline-block;
        }
        &--yes {
          background: red;
        }
      }
    }
    h3 {
      border-bottom: 2px solid gray;
      color: #000;
    }
    &__additional p {
      word-break: break-word;
    }
  }
</style>
