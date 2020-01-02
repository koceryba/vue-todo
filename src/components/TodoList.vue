<template>
  <ul class="list">
    <draggable>
      <transition-group>
        <TodoItem
          v-for="item in items"
          :item="item"
          :key="item.id">
        </TodoItem>
      </transition-group>
    </draggable>
    <TodoAdd/>
  </ul>
</template>

<script>
  import TodoItem from '@/components/TodoItem.vue'
  import TodoAdd from '@/components/TodoAdd.vue'
  import draggable from 'vuedraggable'
  import { mapState } from 'vuex';

  export default {
    name: 'TodoList',
    components: {
      TodoItem,
      TodoAdd,
      draggable,
    },
    computed: mapState([
      'items'
    ]),
  }
</script>

<style scoped lang="scss">
  .list {
    list-style-type:none;
    padding: 0;
    text-align: center;
  }
</style>
