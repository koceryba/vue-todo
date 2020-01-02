<template>
  <ul class="list">
    <draggable>
      <transition-group>
        <TodoItem
          v-for="subItem in item.items"
          :item="subItem"
          :key="subItem.id"/>
      </transition-group>
    </draggable>
    <SublistAddItem
      :item="item"/>
  </ul>
</template>

<script>
import SublistAddItem from '@/components/SublistAddItem.vue'
import draggable from 'vuedraggable'

export default {
  name: 'Subist',
  components: {
    TodoItem: () => import('./TodoItem.vue'),
    SublistAddItem,
    draggable,
  },
  props: ['item']
}
</script>

<style scoped lang="scss">
  .list {
    list-style-type:none;
    padding: 0;
    text-align: center;
    margin-left: 40px;
  }
</style>