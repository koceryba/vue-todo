<template>
  <button 
    class="btn-remove"
    @click="removeItem()">
    <font-awesome-icon icon="trash"/>
  </button>
</template>

<script>
export default {
  name: 'TodoSublistRemove',
  props: ['item'],
  methods: {
    removeItem: function () {
      this.$store.commit('REMOVE_SUBLIST', this.item);
    }
  }
}
</script>

<style scoped lang="scss">
  .btn-remove {
    background-color: #fff;
    border: none;
    cursor: pointer;
    color: #8a8a8a;
    padding: 6px 8px;
    border-radius: 20px;
  }
  .btn-remove:hover {
    color: #ff6969;
  }
  .btn-remove:focus {
    outline: none;
  }
</style>