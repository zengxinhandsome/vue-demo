<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todoHeader/> 
      <todoList/> 
      <todoFooter/>
    </div>
  </div>
</template>

<!-- 
      绑定事件监听 ：订阅消息
      触发事件 ： 发布消息


      slot : 通过标签通信，在父组件中定义好标签
 -->

<script>
import todoHeader from "./todoList-vuex/todoHeader.vue"
import todoList from "./todoList-vuex/todoList.vue"
import todoFooter from "./todoList-vuex/todoFooter.vue"
export default {
    mounted() {
      // 发送命令给action: 异步获取保存todos数据并显示
      this.$store.dispatch("reqTodos");
    },
    components : {
      todoHeader,
      todoList,
      todoFooter
    }
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  margin: 100px auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
