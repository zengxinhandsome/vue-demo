<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <todoHeader :addTodo="addTodo"/> -->  <!-- 第1种方式：v-bind传给子组件(通常用于父子组件之间的通信) -->
      <todoHeader @addTodo="addTodo"/>           <!-- 第2种方式：给todoHeader标签对象绑定addTodo事件监听 -->
    <!--   <todoHeader ref="header"/> -->        <!-- 第3种方式：通过this.$on -->

    <!--   <todoList 
      :todos="todos"
      :removeTodo="removeTodo"/>  -->

      <todoList 
      :todos="todos"/>  <!-- 这里通过PubSub实现组件通信 -->

      <todoFooter
      :todos="todos"
      :deleteCompleteTodos="deleteCompleteTodos"
      :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<!-- 
      绑定事件监听 ：订阅消息
      触发事件 ： 发布消息


      slot : 通过标签通信，在父组件中定义好标签
 -->

<script>
import PubSub from "pubsub-js"
import todoHeader from "./todoList/todoHeader.vue"
import todoList from "./todoList/todoList.vue"
import todoFooter from "./todoList/todoFooter.vue"
import storageUtil from "./util/storageUtil.js"
export default {
    data () {
      return {
        // todos : JSON.parse(window.localStorage.getItem("todo_key") || "[]")
        todos : storageUtil.readTodos()
      }
    },
    methods : {
      addTodo (todo) {
        this.todos.unshift(todo);
      },
      removeTodo (index) {
        this.todos.splice(index, 1);
      },
      deleteCompleteTodos () {
        this.todos = this.todos.filter(todo => !todo.complete);
      },
      selectAllTodos (check) {
        this.todos.forEach(todo => todo.complete = check);
      }
    },
    mounted () {    // 执行异步代码
        // this.$refs.header.$on("addTodo", this.addTodo);

        // PubSub的好处：两个组件之间通信没有任何的位置要求，父子， 父孙，兄弟都可以
        PubSub.subscribe("removeTodo", (msg, index) => {
          this.removeTodo(index)
        });
    },
    watch : {   //监视
      todos : {   
        deep : true,    // 深度监视
        // handler : function (value) {
        //   // 将todos最新的值的json数据，保存到localeStorage
        //   // window.localStorage.setItem("todo_key", JSON.stringify(value));
        //   storageUtil.saveTodos(value);
        // }
        handler : storageUtil.saveTodos

        // 上面这种写法相当于
        // handler : function saveTodos(todos){
        //   window.localStorage.setItem("TODOS_KEY", JSON.stringify(todos));
        // }
      }
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
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
