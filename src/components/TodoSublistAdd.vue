<template>
  <button 
    class="btn-add"
    @click="addSublist()">
    <font-awesome-icon icon="plus"/>
  </button>
</template>

<script>
  export default {
    name: 'TodoSublistAdd',
    props: ['item'],
    methods: {
      addSublist: function () {
        this.$store.commit('ADD_SUBLIST', this.item);
      }
    }
  }
</script>

<style scoped lang="scss">
  .btn-add {
    background-color: #fff;
    border: none;
    position: absolute;
    right: 30px;
    top: 5px;
    cursor: pointer;
    color: #8a8a8a;
  }
  .btn-add:hover {
    color: #5a9bff;
  }
  .btn-add:focus {
    outline: none;
  }
</style>