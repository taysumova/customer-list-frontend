<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body  {
  background: #f3f1ef;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 300px;
  padding-right: 10px;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

.btn {
  background: linear-gradient(#2979ff, #abbfe2);
  border-radius: 7px;
  display: block;
  color: #fff;
  border: none;
  outline: none;
  &--icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  &--add {
    background: rgb(59, 221, 221) url('~./assets/icons/addPerson.svg') no-repeat center;
    width: 50px;
    height: 50px;
  }
  &--view {
    position: relative;
    &:after {
      background: #315ca0 url('~./assets/icons/details.svg') no-repeat center;
      border-radius: 7px;
      position: absolute;
      content: "";
      top: 7px;
      left: 10px;
      height: 30px;
      width: 30px;
    }
  }
  &--edit {
    background: rgb(230, 158, 50) url('~./assets/icons/edit.svg') no-repeat center;
  }
  &--delete {
    background: rgb(238, 228, 226) url('~./assets/icons/delete.svg') no-repeat center;
  }
  &--back {
    text-decoration: underline;
    text-align: right;
    margin: 20px;
    display: block;
  }
  &:hover {
    cursor: pointer;
  }
  a {
    color: #fff;
  }
}
</style>
