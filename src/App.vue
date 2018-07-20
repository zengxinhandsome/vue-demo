<template>
  <div class="wrap">
    <div class="title">
      <h1>请发表对Vue的评论</h1>
    </div>
    <div class="main">
        <Add :addComment="addComment"></Add>
        <List :comments="comments" :deleteComment="deleteComment"></List>
    </div>
  </div>
</template>

<script>
  import Add from "./comment/Add.vue"
  import List from "./comment/List.vue"
export default {
  data () {
    return {        // 数据在哪个组件，更新数据的行为（方法）就应该定义在哪个组件
      comments : [
        {
          name : "jack",
          content : "Vue is pretty good"
        },
        {
          name : "Bob",
          content : "i think Vue is so easy"
        },
        {
          name : "lucy",
          content : "i dont like Vue"
        }
      ]
    };
  },
  methods : {
    // 添加评论
    addComment (comment) {
      this.comments.unshift(comment);
    },
    deleteComment (index){
      this.comments.splice(index, 1);
    }
  },
  components : {
    Add,
    List
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
  li{
    list-style: none;
  }
  .title {
    height: 200px;
    background: #ccc;
    line-height: 200px;
    font-size: 30px;
    text-align: center;
  }
  .main .add {
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;
    margin-left: 200px;
    float: left;
  }
  .main .content {
    width: 400px;
    height: 400px;
    border: 1px solid gray;
    float: right;
    margin-right: 200px;
  }
  .main .content ul li {
    margin-top: 3px;
    background: #eee;
  }
  .main .content ul li span a{
    display: inline-block;
    float: right;
    color: green;
  }
</style>
