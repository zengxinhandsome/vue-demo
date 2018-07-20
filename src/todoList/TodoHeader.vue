<template>
     <div class="todo-header">
         <input type="text" placeholder="请输入你的任务名称，按回车键确认"
         v-model="title"
         @keyup.enter="addItem">
     </div>
</template>

<script>
export default {
    props : {
      // addTodo : {
      //   type : Function
      // }
    },
    data () {
      return {
        title : ""
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
        this.$emit("addTodo", todo);    // 触发自定义事件：addTodo    通常用于父子组件之间进行传递，如果多层组件嵌套则不合适
        // this.addTodo(todo);
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
