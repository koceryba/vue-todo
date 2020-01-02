<template>
  <div>
    <li class="list-item">
      <span>{{item.text}}</span>
      <TodoSublistAdd
        :item="item"/>
      <TodoRemove
        :item="item"/>
    </li>
    <Sublist
      v-if="item.items"
      :item="item"/>
  </div>
</template>

<script>
import TodoSublistAdd from '@/components/TodoSublistAdd.vue'
import TodoRemove from '@/components/TodoRemove.vue'
import Sublist from '@/components/Sublist.vue'

export default {
  name: 'TodoItem',
  components: {
    TodoSublistAdd,
    TodoRemove,
    Sublist,
  },
  props: ['item'],
}
</script>

<style scoped lang="scss">
  .list-item {
    max-width: 200px;
    margin: auto;
    background: #fff;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 10px;
    position: relative;
    cursor: pointer;
  }
</style>