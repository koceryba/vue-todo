<template>
  <li class="item-add">
    <input
      class="input-add"
      type="text"
      v-model="subText"/>
    <button class="btn-add" @click="addSubItem()">
      <font-awesome-icon icon="plus"/>
    </button>
    <TodoSublistRemove
      :item="item"/>
  </li>
</template>

<script>
import TodoSublistRemove from '@/components/TodoSublistRemove.vue'

export default {
  name: 'SublistAddItem',
  components: {
    TodoSublistRemove,
  },
  props: ['item'],
  data: function() {
    return {
      subText: ''
    };
  },
  methods: {
    addSubItem: function () {
      this.$store.commit({
        type: 'ADD_SUBLIST_ITEM',
        itemTo: this.item,
        text: this.subText,
      });
      this.subText = '';
    },
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
    max-width: 140px;
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