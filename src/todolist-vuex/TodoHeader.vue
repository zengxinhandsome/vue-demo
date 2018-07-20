<template>
     <div class="todo-header">
         <input type="text" placeholder="请输入你的任务名称，按回车键确认"
         v-model="title"
         @keyup.enter="addItem">
     </div>
</template>

<script>
export default {
    data () {
      return {
        title : ""  // 组件内部使用的状态，不存在共享的问题 --> 不需要使用vuex管理它
      }
    },
    methods : {
      addItem () {
        const title = this.title.trim();
        if(!title){
          alert("不得为空!");
          return;
        }
        const todo = {
          title : title,
          complete : false
        };
        this.$store.dispatch('addTodo', todo);
        this.title = "";
      }
    }
  }
</script>

<style>
.todo-header input {
      width: 560px;
      height: 28px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 7px;
    }
</style>
