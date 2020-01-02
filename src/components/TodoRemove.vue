<template>
  <button 
    class="btn-remove"
    @click="removeItem()">
    <font-awesome-icon icon="trash"/>
  </button>
</template>

<script>
export default {
  name: 'TodoRemove',
  props: ['item'],
  methods: {
    removeItem: function () {
      this.$store.commit('REMOVE_ITEM', this.item);
    }
  }
}
</script>

<style scoped lang="scss">
  .btn-remove {
    background-color: #fff;
    border: none;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
    color: #8a8a8a;
  }
  .btn-remove:hover {
    color: #ff6969;
  }
  .btn-remove:focus {
    outline: none;
  }
</style>