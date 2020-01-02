<template>
  <li class="item-add">
    <input
      class="input-add"
      type="text"
      v-model="text"/>
    <button class="btn-add" @click="addItem()">
      <font-awesome-icon icon="plus"/>
    </button>
  </li>
</template>

<script>
export default {
  name: 'TodoAdd',
  data: function() {
    return {
      text: ''
    };
  },
  methods: {
    addItem: function () {
      this.$store.commit('ADD_ITEM', this.text);
      this.text = '';
    }
  }
}
</script>

<style scoped lang="scss">
  .item-add {
    max-width: 210px;
    margin: auto;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .input-add {
    max-width: 160px;
    background: #fff;
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
  }
  .input-add:focus {
    outline: none;
  }
  .btn-add {
    background-color: #fff;
    border: none;
    cursor: pointer;
    color: #8a8a8a;
    padding: 6px 8px;
    border-radius: 20px;
  }
  .btn-add:hover {
    color: #5a9bff;
  }
  .btn-add:focus {
    outline: none;
  }
</style>